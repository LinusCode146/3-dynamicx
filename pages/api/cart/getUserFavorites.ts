import type { NextApiRequest, NextApiResponse} from "next";
import prisma from '@/lib/prisma';
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await getServerSession(req, res, authOptions);

    if(!session) return res.status(401).json({ message: "Please sign in!" });
    if(!session.user?.email) return res.status(401).json({ message: "User email not found!" });
    if(req.method !== 'GET') {
        return res.status(405).json({error: "Method not allowed"})
    }

    //Get user
    const prismaUser = await prisma.user.findUnique({
        where: { email: session.user.email },
    })

    if(!prismaUser) return res.status(404).json({ message: "User not found!" });

    try{
        // Get all hearts (liked products) for the user
        const hearts = await prisma.heart.findMany({
            where: {userId: prismaUser.id},
        });

        // Extract productIds from hearts
        const productIds = hearts.map(heart => heart.productId);

        // Fetch the corresponding stock products
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
        res.status(500).json({message : "Error fetching products"})
    }
}