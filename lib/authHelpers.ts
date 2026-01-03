import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prisma";

export interface AuthenticatedUser {
    id: string;
    email: string;
}

/**
 * Validates session and retrieves authenticated user from database
 * Returns the user if valid, or sends appropriate error response and returns null
 */
export async function validateAndGetUser(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<AuthenticatedUser | null> {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
        res.status(401).json({ message: "Please sign in!" });
        return null;
    }

    if (!session.user?.email) {
        res.status(401).json({ message: "User email not found!" });
        return null;
    }

    // Get user from database
    const prismaUser = await prisma.user.findUnique({
        where: { email: session.user.email },
    });

    if (!prismaUser) {
        res.status(404).json({ message: "User not found!" });
        return null;
    }

    return {
        id: prismaUser.id,
        email: prismaUser.email as string,
    };
}

/**
 * Validates HTTP method
 * Returns true if valid, or sends error response and returns false
 */
export function validateMethod(
    req: NextApiRequest,
    res: NextApiResponse,
    allowedMethod: string
): boolean {
    if (req.method !== allowedMethod) {
        res.status(405).json({ error: "Method not allowed" });
        return false;
    }
    return true;
}