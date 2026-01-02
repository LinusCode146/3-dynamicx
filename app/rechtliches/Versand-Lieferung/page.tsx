import styles from './Versand.module.css';
import gStyles from '../../../public/globalStyles.module.css'


export default function VersandPage() {
    return (
        <>
            <div className={gStyles.filler}></div>
            <div className={styles.pageContainer}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.pageTitle}>Versand & Lieferung</h1>

                    <div className={styles.introText}>
                        <p className={styles.text}>
                            Wir versenden Ihre bestellten Produkte schnell und zuverlässig. Hier finden Sie alle wichtigen
                            Informationen zu Versandkosten, Lieferzeiten und Versandoptionen.
                        </p>
                    </div>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Versandkosten</h2>

                        <div className={styles.shippingGrid}>
                            <div className={styles.shippingCard}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>Deutschland</h3>
                                    <span className={styles.cardBadge}>Standard</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.priceRow}>
                                        <span className={styles.priceLabel}>Bestellwert bis 50€</span>
                                        <span className={styles.priceValue}>4,90 €</span>
                                    </div>
                                    <div className={styles.priceRow}>
                                        <span className={styles.priceLabel}>Ab 50€ Bestellwert</span>
                                        <span className={styles.priceValue}>Kostenlos</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.shippingCard}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>EU-Ausland</h3>
                                    <span className={styles.cardBadge}>Standard</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.priceRow}>
                                        <span className={styles.priceLabel}>Alle Bestellungen</span>
                                        <span className={styles.priceValue}>9,90 €</span>
                                    </div>
                                    <div className={styles.priceRow}>
                                        <span className={styles.priceLabel}>Ab 100€ Bestellwert</span>
                                        <span className={styles.priceValue}>Kostenlos</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.shippingCard}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>Österreich & Schweiz</h3>
                                    <span className={styles.cardBadge}>Standard</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.priceRow}>
                                        <span className={styles.priceLabel}>Alle Bestellungen</span>
                                        <span className={styles.priceValue}>7,90 €</span>
                                    </div>
                                    <div className={styles.priceRow}>
                                        <span className={styles.priceLabel}>Ab 75€ Bestellwert</span>
                                        <span className={styles.priceValue}>Kostenlos</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.noteBox}>
                            <p className={styles.noteText}>
                                <strong>Hinweis:</strong> Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
                                Die Versandkosten werden Ihnen während des Bestellvorgangs vor Abschluss der Bestellung angezeigt.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Lieferzeiten</h2>

                        <div className={styles.timelineContainer}>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineIcon}>
                                    <span className={styles.iconNumber}>1</span>
                                </div>
                                <div className={styles.timelineContent}>
                                    <h3 className={styles.timelineTitle}>Bestellbestätigung</h3>
                                    <p className={styles.timelineText}>
                                        Nach Ihrer Bestellung erhalten Sie umgehend eine Bestellbestätigung per E-Mail mit allen
                                        wichtigen Details.
                                    </p>
                                    <span className={styles.timelineBadge}>Sofort</span>
                                </div>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.timelineIcon}>
                                    <span className={styles.iconNumber}>2</span>
                                </div>
                                <div className={styles.timelineContent}>
                                    <h3 className={styles.timelineTitle}>Produktion & Verpackung</h3>
                                    <p className={styles.timelineText}>
                                        Ihre 3D-gedruckten Produkte werden individuell für Sie gefertigt und sorgfältig verpackt.
                                    </p>
                                    <span className={styles.timelineBadge}>1-3 Werktage</span>
                                </div>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.timelineIcon}>
                                    <span className={styles.iconNumber}>3</span>
                                </div>
                                <div className={styles.timelineContent}>
                                    <h3 className={styles.timelineTitle}>Versand & Tracking</h3>
                                    <p className={styles.timelineText}>
                                        Sobald Ihr Paket versendet wurde, erhalten Sie eine Versandbestätigung mit Tracking-Link
                                        per E-Mail.
                                    </p>
                                    <span className={styles.timelineBadge}>2-4 Werktage</span>
                                </div>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.timelineIcon}>
                                    <span className={styles.iconNumber}>4</span>
                                </div>
                                <div className={styles.timelineContent}>
                                    <h3 className={styles.timelineTitle}>Zustellung</h3>
                                    <p className={styles.timelineText}>
                                        Ihr Paket wird bequem an Ihre Wunschadresse geliefert.
                                    </p>
                                    <span className={styles.timelineBadge}>Fertig!</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.deliveryInfo}>
                            <h3 className={styles.deliveryInfoTitle}>Gesamte Lieferzeit</h3>
                            <div className={styles.deliveryInfoGrid}>
                                <div className={styles.deliveryInfoItem}>
                                    <span className={styles.deliveryLabel}>Deutschland:</span>
                                    <span className={styles.deliveryValue}>3-7 Werktage</span>
                                </div>
                                <div className={styles.deliveryInfoItem}>
                                    <span className={styles.deliveryLabel}>EU-Ausland:</span>
                                    <span className={styles.deliveryValue}>5-10 Werktage</span>
                                </div>
                                <div className={styles.deliveryInfoItem}>
                                    <span className={styles.deliveryLabel}>Schweiz:</span>
                                    <span className={styles.deliveryValue}>7-14 Werktage</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Versandpartner</h2>
                        <p className={styles.text}>
                            Wir arbeiten mit zuverlässigen und renommierten Versanddienstleistern zusammen:
                        </p>
                        <div className={styles.partnerGrid}>
                            <div className={styles.partnerCard}>
                                <div className={styles.partnerIcon}>📦</div>
                                <h3 className={styles.partnerName}>DHL</h3>
                                <p className={styles.partnerText}>
                                    Unser Hauptversandpartner für schnelle und zuverlässige Lieferungen innerhalb Deutschlands.
                                </p>
                            </div>
                            <div className={styles.partnerCard}>
                                <div className={styles.partnerIcon}>🚚</div>
                                <h3 className={styles.partnerName}>DPD</h3>
                                <p className={styles.partnerText}>
                                    Für größere Pakete und Expresslieferungen setzen wir auf DPD.
                                </p>
                            </div>
                            <div className={styles.partnerCard}>
                                <div className={styles.partnerIcon}>✈️</div>
                                <h3 className={styles.partnerName}>Deutsche Post</h3>
                                <p className={styles.partnerText}>
                                    Kleinere Sendungen werden auch mit der Deutschen Post versendet.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Sendungsverfolgung</h2>
                        <p className={styles.text}>
                            Sie erhalten automatisch eine Versandbestätigung per E-Mail, sobald Ihre Bestellung versendet wurde.
                            Diese E-Mail enthält:
                        </p>
                        <ul className={styles.featureList}>
                            <li>Ihre Sendungsnummer (Tracking-Nummer)</li>
                            <li>Einen direkten Link zur Sendungsverfolgung</li>
                            <li>Voraussichtliches Zustelldatum</li>
                            <li>Name des Versanddienstleisters</li>
                        </ul>
                        <div className={styles.trackingBox}>
                            <h3 className={styles.trackingTitle}>Paket verfolgen</h3>
                            <p className={styles.trackingText}>
                                Sie können Ihr Paket jederzeit online verfolgen. Geben Sie einfach Ihre Sendungsnummer auf
                                der Website des jeweiligen Versanddienstleisters ein.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Lieferadressen</h2>
                        <p className={styles.text}>
                            Wir liefern an folgende Adresstypen:
                        </p>
                        <div className={styles.addressGrid}>
                            <div className={styles.addressCard}>
                                <div className={styles.addressIcon}>🏠</div>
                                <h3 className={styles.addressTitle}>Privatadresse</h3>
                                <p className={styles.addressText}>
                                    Lieferung direkt zu Ihnen nach Hause. Bitte stellen Sie sicher, dass jemand das Paket
                                    entgegennehmen kann.
                                </p>
                            </div>
                            <div className={styles.addressCard}>
                                <div className={styles.addressIcon}>🏢</div>
                                <h3 className={styles.addressTitle}>Geschäftsadresse</h3>
                                <p className={styles.addressText}>
                                    Lieferung an Ihre Firmenadresse oder Büro während der üblichen Geschäftszeiten.
                                </p>
                            </div>
                            <div className={styles.addressCard}>
                                <div className={styles.addressIcon}>📮</div>
                                <h3 className={styles.addressTitle}>Packstation</h3>
                                <p className={styles.addressText}>
                                    Lieferung an eine DHL Packstation für flexible Abholung rund um die Uhr.
                                </p>
                            </div>
                        </div>
                        <div className={styles.noteBox}>
                            <p className={styles.noteText}>
                                <strong>Wichtig:</strong> Bitte geben Sie eine vollständige und korrekte Lieferadresse an.
                                Bei falschen Angaben können zusätzliche Kosten für Nachsendungen entstehen.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Verpackung</h2>
                        <p className={styles.text}>
                            Wir legen großen Wert auf nachhaltige und sichere Verpackung:
                        </p>
                        <div className={styles.packagingGrid}>
                            <div className={styles.packagingItem}>
                                <div className={styles.packagingIcon}>♻️</div>
                                <h3 className={styles.packagingTitle}>Umweltfreundlich</h3>
                                <p className={styles.packagingText}>
                                    Wir verwenden recycelte und recycelbare Verpackungsmaterialien, wann immer möglich.
                                </p>
                            </div>
                            <div className={styles.packagingItem}>
                                <div className={styles.packagingIcon}>🛡️</div>
                                <h3 className={styles.packagingTitle}>Sicher</h3>
                                <p className={styles.packagingText}>
                                    Ihre Produkte werden sorgfältig verpackt, um Beschädigungen während des Transports zu vermeiden.
                                </p>
                            </div>
                            <div className={styles.packagingItem}>
                                <div className={styles.packagingIcon}>📏</div>
                                <h3 className={styles.packagingTitle}>Passgenau</h3>
                                <p className={styles.packagingText}>
                                    Wir verwenden optimal dimensionierte Verpackungen, um Materialverschwendung zu minimieren.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. Lieferprobleme & Rückfragen</h2>
                        <p className={styles.text}>
                            Was tun, wenn Probleme bei der Lieferung auftreten?
                        </p>

                        <div className={styles.problemList}>
                            <div className={styles.problemItem}>
                                <h3 className={styles.problemTitle}>Paket kommt nicht an</h3>
                                <p className={styles.problemText}>
                                    Wenn Ihr Paket nach der angegebenen Lieferzeit nicht angekommen ist, überprüfen Sie zunächst
                                    den Sendungsstatus online. Kontaktieren Sie uns, wenn das Paket als zugestellt markiert ist,
                                    Sie es aber nicht erhalten haben.
                                </p>
                            </div>
                            <div className={styles.problemItem}>
                                <h3 className={styles.problemTitle}>Beschädigtes Paket</h3>
                                <p className={styles.problemText}>
                                    Sollte Ihr Paket beschädigt ankommen, nehmen Sie es dennoch an und dokumentieren Sie den
                                    Schaden mit Fotos. Kontaktieren Sie uns umgehend – wir kümmern uns um eine schnelle Lösung.
                                </p>
                            </div>
                            <div className={styles.problemItem}>
                                <h3 className={styles.problemTitle}>Falsche Lieferadresse</h3>
                                <p className={styles.problemText}>
                                    Bei einer falschen Lieferadresse kontaktieren Sie uns bitte sofort. Solange das Paket noch
                                    nicht versendet wurde, können wir die Adresse ändern.
                                </p>
                            </div>
                            <div className={styles.problemItem}>
                                <h3 className={styles.problemTitle}>Paket nicht abgeholt</h3>
                                <p className={styles.problemText}>
                                    Wenn Sie nicht zu Hause waren, hinterlässt der Versanddienstleister eine Benachrichtigung.
                                    Sie können das Paket in der Regel in einer Filiale abholen oder einen neuen Zustelltermin
                                    vereinbaren.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. Individualisierte Produkte</h2>
                        <div className={styles.customBox}>
                            <h3 className={styles.customTitle}>Besondere Hinweise für personalisierte Artikel</h3>
                            <p className={styles.text}>
                                Da wir viele unserer Produkte individuell für Sie 3D-drucken, kann die Produktionszeit bei
                                personalisierten oder nach Kundenwunsch gefertigten Artikeln länger sein. Die voraussichtliche
                                Lieferzeit wird Ihnen vor der Bestellung angezeigt.
                            </p>
                            <p className={styles.text}>
                                <strong>Wichtig:</strong> Für individualisierte Produkte besteht kein Widerrufsrecht gemäß
                                § 312g Abs. 2 Nr. 1 BGB.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>9. Zollbestimmungen (Schweiz & Nicht-EU-Länder)</h2>
                        <p className={styles.text}>
                            Bei Lieferungen in die Schweiz oder andere Nicht-EU-Länder können Zollgebühren und
                            Einfuhrabgaben anfallen. Diese Kosten sind vom Empfänger zu tragen und nicht in unseren
                            Versandkosten enthalten.
                        </p>
                        <p className={styles.text}>
                            Wir deklarieren alle Sendungen korrekt und wahrheitsgemäß. Bitte informieren Sie sich bei Ihrer
                            örtlichen Zollbehörde über eventuelle Einfuhrbestimmungen und Kosten.
                        </p>
                    </section>

                    <section className={styles.highlightSection}>
                        <div className={styles.highlightBox}>
                            <h3 className={styles.highlightTitle}>Expressversand verfügbar</h3>
                            <p className={styles.highlightText}>
                                Benötigen Sie Ihre Bestellung besonders schnell? Kontaktieren Sie uns für Express-Versandoptionen.
                                Wir prüfen gerne, ob eine schnellere Lieferung möglich ist.
                            </p>
                            <a href="/contact" className={styles.highlightButton}>
                                Express-Versand anfragen
                            </a>
                        </div>
                    </section>

                    <section className={styles.contactSection}>
                        <div className={styles.contactBox}>
                            <h3 className={styles.contactTitle}>Fragen zum Versand?</h3>
                            <p className={styles.contactText}>
                                Haben Sie Fragen zu Ihrer Lieferung oder benötigen Sie Unterstützung? Unser Kundenservice
                                hilft Ihnen gerne weiter.
                            </p>
                            <a href="/contact" className={styles.contactButton}>
                                Kontakt aufnehmen
                            </a>
                        </div>
                    </section>

                    <p className={styles.lastUpdated}>
                        Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>
        </>
    );
}