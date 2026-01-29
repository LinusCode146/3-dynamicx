import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import {CartProductData} from "@/data/vaseInfo";
import prisma from "@/lib/prisma";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-12-15.clover",
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        let versand = ""
        // Get authenticated user
        const serverSession = await getServerSession(req, res, authOptions);

        if (!serverSession || !serverSession.user?.email) {
            return res.status(401).json({error: 'Not authenticated'});
        }

        const user = await prisma.user.findUnique({
            where: { email: serverSession.user.email },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const { items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ error: 'Keine Items im Warenkorb' });
        }

        // Line items für Stripe erstellen
        const lineItems = items.map((item: any) => ({
            price_data: {
                currency: 'eur',
                product_data: {
                    name: item.name,
                    description: `${item.description} - ${item.size}`,
                    images: item.image ? [item.image] : [],
                },
                //unit_amount: Math.round(parseFloat(item.price.replace('€', '')) * 100),
                unit_amount: 50,
            },
            quantity: item.quantity,
        }));

        // Versandkosten hinzufügen
        const subtotal = items.reduce((total: number, item: any) => {
            return total + (parseFloat(item.price.replace('€', '')) * item.quantity);
        }, 0);

        if (subtotal > 50) {
            lineItems.push({
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: 'Versand',
                    },
                    unit_amount: 10,
                },
                quantity: 1,
            });
            versand += "4,90"
        }

        // Checkout Session erstellen
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card', "paypal"],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/cart`,
            customer_email: user.email || undefined,
            metadata: {
                userId: user.id,
                versand: versand,
                cartProductIds: items.map((p: Partial<CartProductData>) => p.id).join(','), // Pass product IDs
            },
        });

        // WICHTIG: URL zurückgeben, nicht sessionId
        return res.status(200).json({ url: session.url });
    } catch (error: any) {
        console.error('Checkout error:', error);
        return res.status(500).json({
            error: error.message || 'Fehler beim Erstellen der Checkout-Session'
        });
    }
}