'use client'

import styles from "@/components/Header.module.css";
import {signOut} from "next-auth/react";


export default  function SignOutButton() {
    return <button onClick={() => signOut()} className={styles.signUp}>Sign Out</button>;
}