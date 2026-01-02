import type { NextApiRequest, NextApiResponse} from "next";

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

import prisma from "@/lib/prisma";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const session = await getServerSession(req, res, authOptions);

    if(!session) return res.status(401).json({ message: "Please sign in!" });
    if(!session.user?.email) return res.status(401).json({ message: "User email not found!" });
    if(req.method !== 'DELETE') {
        return res.status(405).json({error: "Method not allowed"})
    }

    const { productId } = req.body;

    const prismaUser = await prisma.user.findUnique({
        where: { email: session.user.email },
    })

    if(!prismaUser) return res.status(404).json({ message: "User not found!" });

    try {
        const result = await prisma.product.deleteMany({
            where: {
                userId: prismaUser.id,
                productId: productId
            }
        })
        res.status(200).json(result);
    } catch {
        res.status(403).json({message: "Error occurred while deleting the post"})
    }

}