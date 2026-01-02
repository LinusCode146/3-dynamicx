'use client';

import { useSession } from 'next-auth/react';
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

export default function AuthButtons() {
    const { data: session } = useSession();

    return (
        <div>
            {session ? <SignOutButton /> : <SignInButton />}
        </div>
    );
}