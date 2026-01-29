import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed. Use POST." });
    }

    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email address!" });
    }

    try {
        // Create a transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASSWORD, // Your Gmail app password
            },
        });

        // Email content to send to you
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "threedynamicx@gmail.com",
            subject: `Contact Form: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #667eea;">New Contact Form Submission</h2>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                    </div>
                    <div style="background: white; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
                        <h3 style="color: #334155;">Message:</h3>
                        <p style="line-height: 1.6; color: #475569;">${message}</p>
                    </div>
                    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
                    <p style="color: #94a3b8; font-size: 12px;">
                        This email was sent from the 3DynamicX contact form.
                    </p>
                </div>
            `,
            replyTo: email, // Set reply-to as the sender's email
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Optionally send a confirmation email to the user
        const confirmationMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Thank you for contacting 3DynamicX",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #667eea;">Thank You for Reaching Out!</h2>
                    <p>Hi ${name},</p>
                    <p>We've received your message and will get back to you as soon as possible.</p>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
                        <h3 style="color: #334155;">Your Message:</h3>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p style="line-height: 1.6; color: #475569;">${message}</p>
                    </div>
                    <p>Best regards,<br>The 3DynamicX Team</p>
                    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
                    <p style="color: #94a3b8; font-size: 12px;">
                        This is an automated confirmation email from 3DynamicX.
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(confirmationMailOptions);

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({
            message: "Failed to send email. Please try again later.",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
}