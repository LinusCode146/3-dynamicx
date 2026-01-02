import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Nur POST erlauben
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { email, password, name } = req.body;

        // Validierung
        if (!email || !password) {
            return res.status(400).json({
                error: "E-Mail und Passwort sind erforderlich"
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                error: "Passwort muss mindestens 8 Zeichen haben"
            });
        }

        // Email-Format prüfen
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: "Ungültige E-Mail-Adresse"
            });
        }

        // Prüfe ob Benutzer existiert
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({
                error: "Diese E-Mail ist bereits registriert"
            });
        }

        // Hash Passwort
        const hashedPassword = await bcrypt.hash(password, 12);

        // Erstelle Benutzer
        const user = await prisma.user.create({
            data: {
                email,
                name: name || email.split('@')[0],
                password: hashedPassword
            }
        });

        return res.status(201).json({
            message: "Registrierung erfolgreich",
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });
    } catch (error) {
        console.error("Registrierungsfehler:", error);
        return res.status(500).json({
            error: "Fehler bei der Registrierung. Bitte versuche es später erneut."
        });
    }
}