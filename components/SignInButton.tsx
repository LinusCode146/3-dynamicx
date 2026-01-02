import styles from "@/components/Header.module.css";
import {signIn} from "next-auth/react";

export default function SignInButton() {
    return <button onClick={() => signIn()} className={styles.signUp}>Sign In</button>;
}