import styles from './Widerrufsbelehrung.module.css';
import gStyles from '../../../public/globalStyles.module.css'


export default function WiderrufsbelehrungPage() {
    return (
        <>
            <div className={gStyles.filler}></div>
            <div className={styles.pageContainer}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.pageTitle}>Widerrufsbelehrung</h1>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Widerrufsrecht</h2>
                        <p className={styles.text}>
                            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
                        </p>
                        <p className={styles.text}>
                            Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter,
                            der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
                        </p>
                        <p className={styles.text}>
                            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
                        </p>
                        <div className={styles.contactBox}>
                            <p className={styles.contactText}>
                                <strong>3DynamicX</strong><br />
                                61440 Oberursel Hessen<br />
                                Am Müllerweg 11, <br />
                                E-Mail: threedynamicx@gmail.com <br />
                                Telefon: +49 176 55249499
                            </p>
                        </div>
                        <p className={styles.text}>
                            mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren
                            Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte
                            Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
                        </p>
                        <p className={styles.text}>
                            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des
                            Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Folgen des Widerrufs</h2>
                        <p className={styles.text}>
                            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben,
                            einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass
                            Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben),
                            unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
                            Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
                        </p>
                        <p className={styles.text}>
                            Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion
                            eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden
                            Ihnen wegen dieser Rückzahlung Entgelte berechnet.
                        </p>
                        <p className={styles.text}>
                            Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den
                            Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
                        </p>
                        <p className={styles.text}>
                            Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie
                            uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist
                            gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.
                        </p>
                        <p className={styles.text}>
                            Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
                        </p>
                        <p className={styles.text}>
                            Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur
                            Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen
                            zurückzuführen ist.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts</h2>
                        <p className={styles.text}>
                            Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nach Kundenspezifikation
                            angefertigt werden oder eindeutig auf die persönlichen Bedürfnisse zugeschnitten sind.
                        </p>
                        <p className={styles.noteText}>
                            <strong>Hinweis:</strong> Sollten Sie individuell angepasste oder personalisierte Produkte bei 3DynamicX
                            bestellen, entfällt das Widerrufsrecht gemäß § 312g Abs. 2 Nr. 1 BGB.
                        </p>
                    </section>

                    <section className={styles.formSection}>
                        <h2 className={styles.sectionTitle}>Muster-Widerrufsformular</h2>
                        <p className={styles.text}>
                            Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück:
                        </p>
                        <div className={styles.formBox}>
                            <p className={styles.formText}>
                                An<br />
                                <strong>3DynamicX</strong><br />
                                [Ihre vollständige Adresse]<br />
                                [Straße und Hausnummer]<br />
                                [PLZ und Ort]<br />
                                E-Mail: [Ihre E-Mail-Adresse]
                            </p>
                            <div className={styles.formDivider}></div>
                            <p className={styles.formText}>
                                Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der
                                folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*)
                            </p>
                            <p className={styles.formText}>
                                Bestellt am (*) / erhalten am (*)
                            </p>
                            <p className={styles.formText}>
                                Name des/der Verbraucher(s)
                            </p>
                            <p className={styles.formText}>
                                Anschrift des/der Verbraucher(s)
                            </p>
                            <p className={styles.formText}>
                                Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
                            </p>
                            <p className={styles.formText}>
                                Datum
                            </p>
                            <p className={styles.formFootnote}>
                                (*) Unzutreffendes streichen
                            </p>
                        </div>
                    </section>

                    <section className={styles.infoSection}>
                        <div className={styles.infoBox}>
                            <h3 className={styles.infoTitle}>Noch Fragen?</h3>
                            <p className={styles.infoText}>
                                Bei Fragen zur Widerrufsbelehrung oder zur Rücksendung können Sie uns gerne kontaktieren.
                                Wir helfen Ihnen gerne weiter.
                            </p>
                            <a href="/contact" className={styles.contactButton}>
                                Kontakt aufnehmen
                            </a>
                        </div>
                    </section>

                    <p className={styles.lastUpdated}>
                        Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
                    </p>
                </div>
            </div>
        </>

    );
}