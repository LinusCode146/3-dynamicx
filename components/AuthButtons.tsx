'use client';

import { useSession } from 'next-auth/react';
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

export default function AuthButtons({ onClose }: { onClose?: () => void }) {
    const { data: session } = useSession();

    return (
        <>
            {session ? <SignOutButton onClose={onClose} /> : <SignInButton onClose={onClose} />}
        </>
    );
}