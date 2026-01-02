"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import styles from "./register.module.css";

export default function Register() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState("");

    const calculatePasswordStrength = (pass: string) => {
        if (pass.length === 0) {
            setPasswordStrength("");
            return;
        }
        if (pass.length < 8) {
            setPasswordStrength("weak");
            return;
        }

        let strength = 0;
        if (pass.length >= 8) strength++;
        if (pass.length >= 12) strength++;
        if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
        if (/\d/.test(pass)) strength++;
        if (/[^a-zA-Z0-9]/.test(pass)) strength++;

        if (strength <= 2) setPasswordStrength("weak");
        else if (strength <= 3) setPasswordStrength("medium");
        else setPasswordStrength("strong");
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        calculatePasswordStrength(value);
    };

    const handleCredentialsSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setIsLoading(true);

        try {
            // Registrierung
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Registrierung fehlgeschlagen");
                setIsLoading(false);
                return;
            }

            // Erfolgreiche Registrierung
            setSuccess("Account erfolgreich erstellt! Du wirst eingeloggt...");

            // Automatisch einloggen
            setTimeout(async () => {
                const result = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                });

                if (result?.error) {
                    setError("Account erstellt, aber Login fehlgeschlagen. Bitte melde dich manuell an.");
                    setTimeout(() => router.push("/auth/signin"), 2000);
                } else {
                    router.push("/");
                }
            }, 1500);
        } catch  {
            setError("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signIn("google", { callbackUrl: "/" });
    };

    return (
        <>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@400;600&display=swap"
                rel="stylesheet"
            />

            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.brand}>
                        <div className={styles.brandLogo}>YourBrand</div>
                        <div className={styles.brandTagline}>Wo Ideen Leben finden</div>
                    </div>
                    <div className={styles.welcomeSection}>
                        <h1 className={styles.welcomeTitle}>Werde Teil unserer Community</h1>
                        <p className={styles.welcomeSubtitle}>
                            Erstelle einen Account und erhalte Zugang zu allen Features,
                            die dein Erlebnis unvergesslich machen.
                        </p>

                        <div className={styles.featuresList}>
                            <div className={styles.featureItem}>
                                <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                                <span>Vollständiger Zugriff auf alle Funktionen</span>
                            </div>
                            <div className={styles.featureItem}>
                                <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                                <span>Sichere Datenverschlüsselung</span>
                            </div>
                            <div className={styles.featureItem}>
                                <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                                <span>Personalisierte Erfahrung</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.formContainer}>
                        <div className={styles.formHeader}>
                            <h2 className={styles.formTitle}>Account erstellen</h2>
                            <p className={styles.formSubtitle}>
                                Wähle deine bevorzugte Registrierungsmethode
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
                            Mit Google registrieren
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

                        {success && (
                            <div className={styles.successMessage}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                                {success}
                            </div>
                        )}

                        <form onSubmit={handleCredentialsSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.formLabel}>
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Dein vollständiger Name"
                                    disabled={isLoading}
                                    className={styles.formInput}
                                />
                            </div>

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
                                    onChange={handlePasswordChange}
                                    placeholder="Mindestens 8 Zeichen"
                                    required
                                    disabled={isLoading}
                                    className={styles.formInput}
                                />
                                {passwordStrength && (
                                    <div className={`${styles.passwordStrength} ${styles[passwordStrength]}`}>
                                        {passwordStrength === "weak" && "Schwaches Passwort"}
                                        {passwordStrength === "medium" && "Mittleres Passwort"}
                                        {passwordStrength === "strong" && "Starkes Passwort"}
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={styles.submitBtn}
                            >
                                {isLoading ? "Wird erstellt..." : "Account erstellen"}
                            </button>
                        </form>

                        <p className={styles.terms}>
                            Mit der Registrierung stimmst du unseren{" "}
                            <a href="/AGB">AGB</a> und{" "}
                            <a href="/Datenschutz">Datenschutzrichtlinien</a> zu.
                        </p>

                        <div className={styles.formFooter}>
                            Bereits registriert?{" "}
                            <a href="/auth/signin">Jetzt anmelden</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}