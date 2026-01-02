import gStyles from '../../public/globalStyles.module.css'
import styles from './team.module.css'

export default function Team() {
    return (
        <div className={gStyles.center}>
            <div className={gStyles.stackTeam}>
                <h1 className={styles.mainHeading}>Über 3DynamicX</h1>

                <section className={styles.section}>
                    <h2 className={styles.sectionHeading}>🚀 Unsere Geschichte</h2>
                    <p className={styles.text}>
                        3DynamicX wurde Mitte 2025 von Finn Schulze mit Unterstützung von Nico Schlesinger gegründet und ist ein junges, innovatives Startup-Unternehmen. Durch die zunehmende Relevanz des 3D-Drucks haben wir früh unser Interesse an dieser zukunftsweisenden Branche entdeckt und uns dazu entschieden, uns auf die Herstellung von Vasen und Blumenkübeln zu spezialisieren.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionHeading}>💡 Unsere Vision</h2>
                    <p className={styles.text}>
                        Unser Ziel ist es, uns klar von bestehenden Marktführern abzuheben. 3D-gedruckte Produkte sind insbesondere in europäischen Gesellschaften noch nicht ausreichend etabliert, häufig überteuert oder wirken wenig umweltgerecht. Genau diesen Herausforderungen stellen wir uns.
                    </p>
                    <p className={styles.highlight}>
                        3DynamicX steht für kreatives, zeitloses Design in Kombination mit fairen und transparenten Preisen.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionHeading}>🌱 Nachhaltigkeit</h2>
                    <p className={styles.text}>
                        Der Klimaschutz spielt für uns eine zentrale Rolle. Wir verwenden nachhaltige Materialien wie Kunststoffe auf Basis von Mais und Zuckerrohr. Gleichzeitig sind wir uns bewusst, dass auch diese Materialien die Umwelt belasten können. Um Verantwortung zu übernehmen, unterstützen wir daher Organisationen finanziell, die sich aktiv für die Beseitigung von Plastik aus den Meeren einsetzen.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionHeading}>🤝 Unsere Werte</h2>
                    <p className={styles.text}>
                        Unser Unternehmen wird bewusst menschlich, transparent und kundennah geführt. Auch wenn wir im Vergleich zu branchenführenden Unternehmen noch eine geringere Bekanntheit haben, sehen wir darin einen klaren Vorteil: Wir können individuell auf unsere Kundinnen und Kunden eingehen und ihre Zufriedenheit in den Mittelpunkt unseres Handelns stellen.
                    </p>
                </section>
            </div>
        </div>
    );
}