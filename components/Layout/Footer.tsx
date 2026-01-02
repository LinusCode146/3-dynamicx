import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Main Footer Content */}
                <div className={styles.grid}>
                    {/* Brand Section */}
                    <div className={styles.brandSection}>
                        <h3 className={styles.brandTitle}>3DynamicX</h3>
                        <p className={styles.brandDescription}>
                            Einzigartige 3D-gedruckte Vasen und Dekorationen für dein Zuhause.
                        </p>
                    </div>

                    {/* Shop Links */}
                    <div className={styles.linkSection}>
                        <h4 className={styles.sectionTitle}>Shop</h4>
                        <ul className={styles.linkList}>
                            <li>
                                <Link href="/public" className={styles.link}>
                                    Alle Produkte
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className={styles.linkSection}>
                        <h4 className={styles.sectionTitle}>Kundenservice</h4>
                        <ul className={styles.linkList}>
                            <li>
                                <Link href="/contact" className={styles.link}>
                                    Kontakt
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className={styles.link}>
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/rechtliches/Versand-Lieferung" className={styles.link}>
                                    Versand & Lieferung
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className={styles.linkSection}>
                        <h4 className={styles.sectionTitle}>Rechtliches</h4>
                        <ul className={styles.linkList}>
                            <li>
                                <Link href="/rechtliches/Impressum" className={styles.link}>
                                    Impressum
                                </Link>
                            </li>
                            <li>
                                <Link href="/rechtliches/Datenschutz" className={styles.link}>
                                    Datenschutzerklärung
                                </Link>
                            </li>
                            <li>
                                <Link href="/rechtliches/AGB" className={styles.link}>
                                    AGB
                                </Link>
                            </li>
                            <li>
                                <Link href="/rechtliches/Widerrufsbelehrung" className={styles.link}>
                                    Widerrufsbelehrung
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} 3DynamicX. Alle Rechte vorbehalten.
                    </p>

                    <div className={styles.quickLinks}>
                        <Link href="/rechtliches/Impressum" className={styles.bottomLink}>
                            Impressum
                        </Link>
                        <span className={styles.separator}>•</span>
                        <Link href="/rechtliches/Datenschutz" className={styles.bottomLink}>
                            Datenschutz
                        </Link>
                        <span className={styles.separator}>•</span>
                        <Link href="/rechtliches/AGB" className={styles.bottomLink}>
                            AGB
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}