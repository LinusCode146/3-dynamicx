import type { NextApiRequest, NextApiResponse} from "next";
import prisma from '@/lib/prisma';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method !== 'GET') {
        return res.status(405).json({error: "Method not allowed"})
    }
    try{
        const data = await prisma.stockproduct.findMany();

        res.status(200).json(data);
    } catch {
        res.status(403).json({message : "Error fetching products"})
    }
}