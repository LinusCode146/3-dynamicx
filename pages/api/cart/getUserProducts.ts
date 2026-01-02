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
        const data = await prisma.product.findMany({
            where: {userId: prismaUser.id},
        });

        res.status(200).json(data);
    } catch {
        res.status(403).json({message : "Error fetching products"})
    }
}