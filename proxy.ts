import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export async function proxy(request: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next();

}



export const config = {
    matcher: [
        //'/productDetails/:path*',
        '/cart',
        '/favorites'
    ],
}