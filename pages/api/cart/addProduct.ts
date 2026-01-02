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

    const { productId, quantity = 1 } = req.body;

    if(!productId) return res.status(400).json({ message: "Product ID is required!" });

    try {
        const existingProduct = await prisma.product.findFirst({
            where: {
                productId: productId,
                userId: prismaUser.id,
            }
        });

        let result;

        if (existingProduct) {
            result = await prisma.product.update({
                where: {
                    id: existingProduct.id,
                },
                data: {
                    quantity: existingProduct.quantity + quantity,
                }
            });
        } else {
            result = await prisma.product.create({
                data: {
                    ...req.body,
                    userId: prismaUser.id,
                }
            });
        }

        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Error occurred while adding product to cart"});
    }
}