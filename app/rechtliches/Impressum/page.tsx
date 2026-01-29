import styles from './Impressum.module.css';


export default function ImpressumPage() {
    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.pageTitle}>Impressum</h1>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Angaben gemäß § 5 TMG</h2>
                        <div className={styles.infoBlock}>
                            <p className={styles.text}>
                                <strong>3DynamicX</strong><br />
                                Finn Schulze / 3DynamicX<br />
                                Am M&uuml;llerweg 11<br />
                                61440 Oberursel<br />
                                Deutschland
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Kontakt</h2>
                        <div className={styles.contactGrid}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>Telefon:</span>
                                <span className={styles.contactValue}>0176 55249499</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>E-Mail:</span>
                                <span className={styles.contactValue}>threedynamicx@gmail.com</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>Website:</span>
                                <span className={styles.contactValue}>www.3dynamicx.com</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Vertreten durch</h2>
                        <p className={styles.text}>
                            Finn Schulze
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Umsatzsteuer-ID</h2>
                        <p className={styles.text}>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                            <strong>DE 459177850</strong>
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Wirtschafts-ID</h2>
                        <p className={styles.text}>
                            Wirtschafts-Identifikationsnummer gemäß § 139c AO:<br />
                            <strong>DE 459177850</strong>
                        </p>
                    </section>


                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Verantwortlich f&uuml;r den Inhalt nach § 55 Abs. 2 RStV</h2>
                        <p className={styles.text}>
                            Finn Schulze<br />
                            Am M&uuml;llerweg 11
                        </p>
                    </section>

                    <section className={styles.disclaimerSection}>
                        <h2 className={styles.sectionTitle}>Haftungsausschluss</h2>

                        <h3 className={styles.subTitle}>Haftung f&uuml;r Inhalte</h3>
                        <p className={styles.text}>
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den
                            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                            verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umständen
                            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                        <p className={styles.text}>
                            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                            Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt
                            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        </p>

                        <h3 className={styles.subTitle}>Haftung f&uuml;r Links</h3>
                        <p className={styles.text}>
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                            Deshalb können wir f&uuml;r diese fremden Inhalte auch keine Gewähr &uuml;bernehmen. F&uuml;r die Inhalte der
                            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                            verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße &uuml;berpr&uuml;ft.
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
                            Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.
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