import styles from "@/components/Layout/Header.module.css";
import {signOut} from "next-auth/react";

export default function SignOutButton({ onClose }: { onClose?: () => void }) {
    const handleSignOut = () => {
        signOut();
        onClose?.();
    };

    return (
        <button onClick={handleSignOut} className={styles.signUp}>
            Sign Out
        </button>
    );
}