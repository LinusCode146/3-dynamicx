import Header from "./Header"
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function HeaderWrapper() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.name as string;
    const img = session?.user?.image;
    const email = session?.user?.email;

    return <Header userId={userId} image={img} mail={email} />
}
