import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// WICHTIG: Body Parser deaktivieren für Webhooks
export const config = {
    api: {
        bodyParser: false,
    },
};


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

async function sendPurchaseConfirmation(
    userEmail: string,
    userName: string,
    products: any[],
    versand: string,
    purchaseId: string
) {
    const productList = products
        .map(
            (p) => `
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${p.name}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${p.size}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${p.quantity}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">€${p.price}</td>
        </tr>
    `
        )
        .join('');




    const totalPrice = products.reduce(
        (sum, p) => sum + parseFloat(p.price) * p.quantity,
        0
    );

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Order Confirmation - 3DynamicX',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #667eea;">Thank You for Your Purchase!</h2>
                <p>Hi ${userName},</p>
                <p>We've received your order and it's being processed. Here are your order details:</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h3 style="color: #334155;">Order #${purchaseId}</h3>
                    <p><strong>Shipping Method:</strong> ${versand}</p>
                </div>

                <div style="background: white; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
                    <h3 style="color: #334155;">Order Items:</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: #f8f9fa;">
                                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e2e8f0;">Product</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e2e8f0;">Size</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e2e8f0;">Qty</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e2e8f0;">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${productList}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3" style="padding: 15px; text-align: right; font-weight: bold;">Total:</td>
                                <td style="padding: 15px; font-weight: bold; color: #667eea;">€${totalPrice.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <p style="margin-top: 20px;">We'll send you another email once your order has shipped.</p>
                
                <p>Best regards,<br>The 3DynamicX Team</p>
                
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
                <p style="color: #94a3b8; font-size: 12px;">
                    This is an automated confirmation email from 3DynamicX.
                </p>
            </div>
        `,
    };

    await transporter.sendMail(mailOptions);
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log('🔔 WEBHOOK ENDPOINT HIT - Method:', req.method);
    console.log('🔔 Headers:', req.headers);

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Check if env variables exist
    if (!process.env.STRIPE_SECRET_KEY) {
        console.error('❌ STRIPE_SECRET_KEY not set');
        return res.status(500).json({ error: 'Stripe key not configured' });
    }

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
        console.error('❌ STRIPE_WEBHOOK_SECRET not set');
        return res.status(500).json({ error: 'Webhook secret not configured' });
    }

    console.log('✅ Environment variables present');

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const buf = await buffer(req);
    const signature = req.headers['stripe-signature']!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(buf, signature, webhookSecret);
    } catch (err: any) {
        console.error(`Webhook Error: ${err.message}`);
        return res.status(400).json({ error: `Webhook Error: ${err.message}` });
    }

    // Ereignis verarbeiten
    switch (event.type) {
        case 'checkout.session.completed':
            console.log("Webhook hit");
            const session = event.data.object as Stripe.Checkout.Session;
            console.log('Payment successful:', session.id);

            try {
                const metadata = session.metadata;

                if (!metadata?.userId) {
                    console.error('No userId in session metadata');
                    break;
                }

                const userId = metadata.userId;
                const versand = metadata.versand || 'Standard';
                const cartProductIds = metadata.cartProductIds?.split(',') || [];

                // Get user info
                const user = await prisma.user.findUnique({
                    where: { id: userId },
                    select: { email: true, name: true },
                });

                if (!user || !user.email) {
                    console.error('User not found or no email');
                    break;
                }

                console.log("cartProductIds", cartProductIds);
                console.log("userId", userId);

                // Get cart products
                const cartProducts = await prisma.product.findMany({
                    where: {
                        id: { in: cartProductIds },
                    },
                });


                if (cartProducts.length === 0) {
                    console.error('No products found in cart');
                    break;
                }

                const purchase = await prisma.purchase.create({
                    data: {
                        userId: userId,
                        versand: versand,
                        products: {
                            connect: cartProductIds.map((id) => ({ id })),
                        },
                    },
                    include: {
                        products: true,
                    },
                });

                // Send confirmation email
                await sendPurchaseConfirmation(
                    user.email,
                    user.name || 'Customer',
                    cartProducts,
                    versand,
                    purchase.id
                );

                console.log(`Purchase ${purchase.id} created and confirmation email sent`);
            } catch (error) {
                console.error('Error processing purchase:', error);
            }
            break;


        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log('PaymentIntent successful:', paymentIntent.id);
            break;

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    return res.status(200).json({ received: true });
}