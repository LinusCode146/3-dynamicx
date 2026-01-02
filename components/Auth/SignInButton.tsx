import styles from "@/components/Layout/Header.module.css";
import {signIn} from "next-auth/react";

export default function SignInButton({ onClose }: { onClose?: () => void }) {
    const handleSignIn = () => {
        signIn();
        onClose?.();
    };

    return (
        <button onClick={handleSignIn} className={styles.signIn}>
            Sign In
        </button>
    );
}