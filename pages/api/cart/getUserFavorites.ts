import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/lib/prisma';
import { validateAndGetUser, validateMethod } from '@/lib/authHelpers';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (!validateMethod(req, res, 'GET')) return;

    const user = await validateAndGetUser(req, res);
    if (!user) return;

    try {
        const hearts = await prisma.heart.findMany({
            where: { userId: user.id },
        });

        const productIds = hearts.map(heart => heart.productId);

        const likedProducts = await prisma.stockproduct.findMany({
            where: {
                productId: {
                    in: productIds
                }
            }
        });

        res.status(200).json(likedProducts);
    } catch (error) {
        console.error("Error fetching liked products:", error);
        res.status(500).json({ message: "Error fetching products" });
    }
}