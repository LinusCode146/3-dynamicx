import styles from './Impressum.module.css';
import gStyles from '../../../public/globalStyles.module.css'


export default function ImpressumPage() {
    return (
        <>
            <div className={gStyles.filler}></div>
            <div className={styles.pageContainer}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.pageTitle}>Impressum</h1>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Angaben gemäß § 5 TMG</h2>
                        <div className={styles.infoBlock}>
                            <p className={styles.text}>
                                <strong>3DynamicX</strong><br />
                                [Vorname Nachname / Firmenname]<br />
                                [Straße und Hausnummer]<br />
                                [PLZ und Ort]<br />
                                Deutschland
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Kontakt</h2>
                        <div className={styles.contactGrid}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>Telefon:</span>
                                <span className={styles.contactValue}>[Ihre Telefonnummer]</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>E-Mail:</span>
                                <span className={styles.contactValue}>[Ihre E-Mail-Adresse]</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>Website:</span>
                                <span className={styles.contactValue}>www.3dynamicx.de</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Vertreten durch</h2>
                        <p className={styles.text}>
                            [Name des Geschäftsführers / Inhabers]
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Registereintrag</h2>
                        <p className={styles.text}>
                            <strong>Eintragung im Handelsregister:</strong><br />
                            Registergericht: [z.B. Amtsgericht Frankfurt am Main]<br />
                            Registernummer: [HRB XXXXX]
                        </p>
                        <p className={styles.noteText}>
                            <strong>Hinweis:</strong> Falls Sie als Kleinunternehmer oder Einzelunternehmer ohne
                            Handelsregistereintrag tätig sind, können Sie diesen Abschnitt durch &#34;Inhabergeführtes Intergovernmental&#34;
                            ersetzen oder ganz weglassen.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Umsatzsteuer-ID</h2>
                        <p className={styles.text}>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                            <strong>DE [Ihre USt-IdNr.]</strong>
                        </p>
                        <p className={styles.smallText}>
                            Falls Sie als Kleinunternehmer nach § 19 UStG keine Umsatzsteuer-ID haben, geben Sie stattdessen
                            Ihre Steuernummer an oder vermerken Sie: &#34;Kleinunternehmer gemäß § 19 UStG. Es wird keine
                            Umsatzsteuer ausgewiesen.&#34;
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Wirtschafts-ID</h2>
                        <p className={styles.text}>
                            Wirtschafts-Identifikationsnummer gemäß § 139c AO:<br />
                            <strong>[Ihre Wirtschafts-ID]</strong>
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Aufsichtsbehörde</h2>
                        <p className={styles.text}>
                            [Name der zuständigen Aufsichtsbehörde]<br />
                            [Adresse der Behörde]
                        </p>
                        <p className={styles.smallText}>
                            Hinweis: Nur relevant bei erlaubnispflichtigen Tätigkeiten. Für den reinen Verkauf von
                            3D-gedruckten Produkten ist dies normalerweise nicht erforderlich.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                        <p className={styles.text}>
                            Berufsbezeichnung: [z.B. Designer, Händler]<br />
                            Zuständige Kammer: [falls zutreffend]<br />
                            Verliehen in: Deutschland
                        </p>
                        <p className={styles.smallText}>
                            Hinweis: Nur relevant für reglementierte Berufe.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>EU-Streitschlichtung</h2>
                        <p className={styles.text}>
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
                            <a
                                href="https://ec.europa.eu/consumers/odr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                https://ec.europa.eu/consumers/odr/
                            </a>
                        </p>
                        <p className={styles.text}>
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Verbraucherstreitbeilegung / Universalschlichtungsstelle
                        </h2>
                        <p className={styles.text}>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                        <p className={styles.smallText}>
                            Hinweis: Falls Sie zur Teilnahme an einem Streitbeilegungsverfahren verpflichtet sind oder
                            freiwillig daran teilnehmen möchten, passen Sie diesen Text entsprechend an und geben Sie die
                            zuständige Schlichtungsstelle an.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                        <p className={styles.text}>
                            [Name des Verantwortlichen]<br />
                            [Adresse]
                        </p>
                    </section>

                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>Haftungsausschluss</h2>

                        <h3 className={styles.subTitle}>Haftung für Inhalte</h3>
                        <p className={styles.text}>
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                        <p className={styles.text}>
                            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
                            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        </p>

                        <h3 className={styles.subTitle}>Haftung für Links</h3>
                        <p className={styles.text}>
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                            verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                        </p>
                        <p className={styles.text}>
                            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                            einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                            Links umgehend entfernen.
                        </p>

                        <h3 className={styles.subTitle}>Urheberrecht</h3>
                        <p className={styles.text}>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                        </p>
                        <p className={styles.text}>
                            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                            auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                            Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>
                    </section>

                    <section className={styles.designSection}>
                        <div className={styles.designBox}>
                            <h3 className={styles.designTitle}>Design & Bildmaterial</h3>
                            <p className={styles.designText}>
                                Alle Produktbilder und Designs sind Eigentum von 3DynamicX und unterliegen dem Urheberrecht.
                            </p>
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