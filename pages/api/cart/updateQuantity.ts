import type { NextApiRequest, NextApiResponse} from "next";

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await getServerSession(req, res, authOptions);

    if(!session) return res.status(401).json({ message: "Please sign in to update quantity!" });
    if(!session.user?.email) return res.status(401).json({ message: "User email not found!" });
    if(req.method !== "PUT") return res.status(405).json({message: "Method not allowed. Use PUT."})

    const prismaUser = await prisma.user.findUnique({
        where: { email: session.user.email },
    });

    if(!prismaUser) return res.status(404).json({ message: "User not found!" });

    const { productId, quantity, size } = req.body;

    if(!productId) return res.status(400).json({ message: "Product ID is required!" });
    if(typeof quantity !== 'number' || quantity < 1) return res.status(400).json({ message: "Valid quantity is required!" });

    try {
        // Find the product in the user's cart
        const product = await prisma.product.findFirst({
            where: {
                productId: productId,
                userId: prismaUser.id,
                size: size,
            }
        });

        if(!product) return res.status(404).json({ message: "Product not found in cart!" });

        // Update the quantity
        const result = await prisma.product.update({
            where: {
                id: product.id,
            },
            data: {
                quantity: quantity,
            }
        });

        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Error occurred while updating quantity"});
    }
}