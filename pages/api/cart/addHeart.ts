import type { NextApiRequest, NextApiResponse} from "next";

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const session = await getServerSession(req, res, authOptions);

    if(!session) return res.status(401).json({ message: "Please sign in to add a product!" });
    if(!session.user?.email) return res.status(401).json({ message: "User email not found!" });
    if(req.method !== "POST") return res.status(405).json({message: "Method not allowed. Use POST."})

    const prismaUser = await prisma.user.findUnique({
        where: { email: session.user.email },
    });

    if(!prismaUser) return res.status(404).json({ message: "User not found!" });

    const { productId } = req.body;

    if(!productId) return res.status(400).json({ message: "Product ID is required!" });

    try {
        // Check if heart already exists
        const existingHeart = await prisma.heart.findFirst({
            where: {
                userId: prismaUser.id,
                productId: productId
            }
        });

        if(existingHeart) {
            // Heart exists, delete it (unlike)
            await prisma.heart.delete({
                where: {
                    id: existingHeart.id
                }
            });
            return res.status(200).json({
                message: "Product removed from favorites",
                action: "deleted",
                productId: productId
            });
        } else {
            // Heart doesn't exist, create it (like)
            const result = await prisma.heart.create({
                data: {
                    productId: productId,
                    userId: prismaUser.id,
                }
            });
            return res.status(200).json({
                message: "Product added to favorites",
                action: "created",
                data: result
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Error occurred while toggling product favorite"});
    }
}