import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/lib/prisma';
import { validateAndGetUser, validateMethod } from '@/lib/authHelpers';

const sizeOrder = { 'S': 1, 'M': 2, 'L': 3 };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Validate method
    if (!validateMethod(req, res, 'GET')) return;

    // Validate user
    const user = await validateAndGetUser(req, res);
    if (!user) return;

    try {
        const data = await prisma.product.findMany({
            where: { userId: user.id },
            orderBy: { productId: 'asc' }
        });

        // Custom sort by productId, then size (S -> M -> L)
        const sortedData = data.sort((a, b) => {
            if (a.productId !== b.productId) {
                return a.productId.localeCompare(b.productId);
            }
            return (sizeOrder[a.size as 'S' | 'M' | 'L'] || 999) - (sizeOrder[b.size as 'S' | 'M' | 'L'] || 999);
        });

        res.status(200).json(sortedData);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Error fetching products" });
    }
}