"use client";
import gStyles from '../../../public/globalStyles.module.css'

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState, FormEvent, Suspense } from "react";
import styles from "./signin.module.css";
import Link from "next/link";

function SignInForm() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams?.get("callbackUrl") || "/";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleCredentialsSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("Ungültige Anmeldedaten. Bitte versuche es erneut.");
            } else {
                window.location.href = callbackUrl;
            }
        } catch  {
            setError("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signIn("google", {callbackUrl}).then(_ => null).catch(_ => _);
    };

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@400;600&display=swap"
                rel="stylesheet"
            />
            <div className={gStyles.filler}></div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.brand}>
                        <div className={styles.brandLogo}>YourBrand</div>
                        <div className={styles.brandTagline}>Wo Ideen Leben finden</div>
                    </div>
                    <div className={styles.welcomeSection}>
                        <h1 className={styles.welcomeTitle}>Willkommen zurück</h1>
                        <p className={styles.welcomeSubtitle}>
                            Melde dich an, um mit dem shoppen so richtig loslegen zu können!
                        </p>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.formContainer}>
                        <div className={styles.formHeader}>
                            <h2 className={styles.formTitle}>Anmelden</h2>
                            <p className={styles.formSubtitle}>
                                Wähle deine bevorzugte Anmeldemethode
                            </p>
                        </div>

                        <button
                            onClick={handleGoogleSignIn}
                            disabled={isLoading}
                            className={styles.googleBtn}
                            type="button"
                        >
                            <svg className={styles.googleIcon} viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Mit Google fortfahren
                        </button>

                        <div className={styles.divider}>Oder mit E-Mail</div>

                        {error && (
                            <div className={styles.errorMessage}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <line x1="12" y1="8" x2="12" y2="12"/>
                                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                                </svg>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleCredentialsSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.formLabel}>
                                    E-Mail-Adresse
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="deine@email.com"
                                    required
                                    disabled={isLoading}
                                    className={styles.formInput}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="password" className={styles.formLabel}>
                                    Passwort
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    disabled={isLoading}
                                    className={styles.formInput}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={styles.submitBtn}
                            >
                                {isLoading ? "Wird angemeldet..." : "Anmelden"}
                            </button>
                        </form>

                        <div className={styles.formFooter}>
                            Noch kein Konto?{" "}
                            <Link href="/auth/register">Jetzt registrieren</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function SignIn() {
    return (
        <Suspense fallback={<div>Lädt...</div>}>
            <SignInForm />
        </Suspense>
    );
}