import styles from './Datenschutz.module.css';

export default function DatenschutzPage() {
    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.pageTitle}>Datenschutzerklärung</h1>

                    <div className={styles.introText}>
                        <p className={styles.text}>
                            Wir freuen uns über Ihr Interesse an unserem Online-Shop. Der Schutz Ihrer Privatsphäre ist für
                            uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
                        </p>
                    </div>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Verantwortlicher</h2>
                        <div className={styles.infoBox}>
                            <p className={styles.text}>
                                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                            </p>
                            <p className={styles.text}>
                                <strong>3DynamicX</strong><br />
                                Finn Schulze / 3DynamicX<br />
                                Am M&uuml;llerweg 11<br />
                                61440 Oberursel<br />
                                Deutschland
                            </p>
                            <p className={styles.text}>
                                <strong>Kontakt:</strong><br />
                                Telefon: 0176 55249499<br />
                                E-Mail: threedynamicx@gmail.com
                            </p>
                        </div>
                        <p className={styles.text}>
                            Der Verantwortliche ist die natürliche oder juristische Person, die allein oder gemeinsam mit
                            anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Speicherdauer</h2>
                        <p className={styles.text}>
                            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
                            verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                            Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung
                            widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
                            die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche
                            Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Allgemeine Hinweise zu den Rechtsgrundlagen</h2>
                        <p className={styles.text}>
                            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen
                            Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
                            besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden.
                        </p>
                        <p className={styles.text}>
                            Sofern wir Ihre personenbezogenen Daten zur Vertragserfüllung bzw. zur Durchführung
                            vorvertraglicher Maßnahmen verarbeiten, erfolgt dies auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
                        </p>
                        <p className={styles.text}>
                            Sofern wir Ihre personenbezogenen Daten verarbeiten, um einer rechtlichen Verpflichtung
                            nachzukommen, erfolgt dies auf Grundlage des Art. 6 Abs. 1 lit. c DSGVO.
                        </p>
                        <p className={styles.text}>
                            Die Verarbeitung kann auch auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
                            DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
                            Absätzen dieser Datenschutzerklärung informiert.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Ihre Rechte als betroffene Person</h2>
                        <p className={styles.text}>
                            Sie haben das Recht:
                        </p>
                        <div className={styles.rightsList}>
                            <div className={styles.rightItem}>
                                <strong>Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten
                                personenbezogenen Daten verlangen.
                            </div>
                            <div className={styles.rightItem}>
                                <strong>Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger oder
                                die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.
                            </div>
                            <div className={styles.rightItem}>
                                <strong>Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns gespeicherten
                                personenbezogenen Daten verlangen, soweit nicht die weitere Verarbeitung erforderlich ist.
                            </div>
                            <div className={styles.rightItem}>
                                <strong>Einschränkung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung
                                Ihrer personenbezogenen Daten verlangen.
                            </div>
                            <div className={styles.rightItem}>
                                <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können verlangen, dass wir Ihnen
                                Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format
                                übermitteln.
                            </div>
                            <div className={styles.rightItem}>
                                <strong>Widerspruch (Art. 21 DSGVO):</strong> Sie können der Verarbeitung Ihrer personenbezogenen
                                Daten aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen.
                            </div>
                            <div className={styles.rightItem}>
                                <strong>Widerruf (Art. 7 Abs. 3 DSGVO):</strong> Sie haben das Recht, eine einmal erteilte
                                Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.
                            </div>
                            <div className={styles.rightItem}>
                                <strong>Beschwerde (Art. 77 DSGVO):</strong> Sie können sich bei einer Aufsichtsbehörde
                                beschweren, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder
                                des Orts des mutmaßlichen Verstoßes.
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Datenerfassung auf dieser Website</h2>

                        <h3 className={styles.subTitle}>6.1 Server-Log-Dateien</h3>
                        <p className={styles.text}>
                            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                        </p>
                        <ul className={styles.list}>
                            <li>Browsertyp und Browserversion</li>
                            <li>Verwendetes Betriebssystem</li>
                            <li>Referrer URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                            <li>Uhrzeit der Serveranfrage</li>
                            <li>IP-Adresse</li>
                        </ul>
                        <p className={styles.text}>
                            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung
                            dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                            berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
                        </p>

                        <h3 className={styles.subTitle}>6.2 Kontaktformular</h3>
                        <p className={styles.text}>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                            Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
                            ohne Ihre Einwilligung weiter.
                        </p>
                        <p className={styles.text}>
                            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
                            Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                            Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem
                            berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
                            lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                        </p>

                        <h3 className={styles.subTitle}>6.3 Anfrage per E-Mail, Telefon oder Telefax</h3>
                        <p className={styles.text}>
                            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller
                            daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
                            Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung
                            weiter. Die Rechtsgrundlage ist dieselbe wie beim Kontaktformular.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. Verarbeitung von Kundendaten</h2>

                        <h3 className={styles.subTitle}>7.1 Vertragsabwicklung</h3>
                        <p className={styles.text}>
                            Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung,
                            inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten).
                            Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur
                            Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
                        </p>
                        <p className={styles.text}>
                            Personenbezogene Daten über die Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten
                            und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes
                            zu ermöglichen oder abzurechnen.
                        </p>

                        <h3 className={styles.subTitle}>7.2 Datenübermittlung bei Vertragsschluss</h3>
                        <p className={styles.text}>
                            Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der
                            Vertragsabwicklung notwendig ist, etwa an das mit der Lieferung der Ware beauftragte
                            Versandunternehmen oder das mit der Zahlungsabwicklung beauftragte Kreditinstitut.
                        </p>
                        <p className={styles.text}>
                            Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung
                            ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche
                            Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.
                        </p>
                        <p className={styles.text}>
                            Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten
                            zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. Zahlungsdienstleister</h2>

                        <h3 className={styles.subTitle}>8.1 PayPal</h3>
                        <p className={styles.text}>
                            Auf dieser Website bieten wir u.a. die Bezahlung via PayPal an. Anbieter dieses
                            Zahlungsdienstes ist die PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal,
                            L-2449 Luxembourg (im Folgenden "PayPal").
                        </p>
                        <p className={styles.text}>
                            Wenn Sie die Bezahlung via PayPal auswählen, werden die von Ihnen eingegebenen Zahlungsdaten an
                            PayPal übermittelt. Die Übermittlung Ihrer Daten an PayPal erfolgt auf Grundlage von Art. 6 Abs. 1
                            lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines
                            Vertrags).
                        </p>
                        <p className={styles.text}>
                            Details entnehmen Sie der Datenschutzerklärung von PayPal:
                            <a
                                href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                https://www.paypal.com/de/webapps/mpp/ua/privacy-full
                            </a>.
                        </p>

                        <h3 className={styles.subTitle}>8.2 Stripe</h3>
                        <p className={styles.text}>
                            Details entnehmen Sie der Datenschutzerklärung von Stripe:
                            <a target="_blank"
                               rel="noopener noreferrer"
                               className={styles.link}
                               href={"https://stripe.com/de/privacy"}>
                                https://stripe.com/de/privacy
                            </a>
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>9. Versanddienstleister</h2>
                        <p className={styles.text}>
                            Wir arbeiten mit folgenden Versanddienstleistern zusammen: [z.B. DHL, DPD, Hermes]. Zur
                            Abwicklung der Lieferung übermitteln wir folgende Daten an den Versanddienstleister:
                        </p>
                        <ul className={styles.list}>
                            <li>Name und Anschrift des Empfängers</li>
                            <li>E-Mail-Adresse (für Versandbenachrichtigungen)</li>
                            <li>Telefonnummer (falls für Zustellung erforderlich)</li>
                            <li>Bestellnummer</li>
                        </ul>
                        <p className={styles.text}>
                            Die Übermittlung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Erfüllung
                            des Vertrages.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>10. Cookies</h2>
                        <p className={styles.text}>
                            Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem
                            Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und
                            sicherer zu machen.
                        </p>
                        <p className={styles.text}>
                            Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung von
                            selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst
                            löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.
                        </p>
                        <p className={styles.text}>
                            Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder
                            unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des
                            Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte
                            Funktionalität unserer Website zur Folge haben.
                        </p>
                        <p className={styles.text}>
                            Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der
                            Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind,
                            erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein
                            berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen
                            Bereitstellung unserer Dienste.
                        </p>
                    </section>

                    <section className={styles.contactSection}>
                        <div className={styles.contactBox}>
                            <h3 className={styles.contactTitle}>Fragen zum Datenschutz?</h3>
                            <p className={styles.contactText}>
                                Wenn Sie Fragen zum Datenschutz haben oder Ihre Rechte als betroffene Person ausüben möchten,
                                kontaktieren Sie uns gerne.
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