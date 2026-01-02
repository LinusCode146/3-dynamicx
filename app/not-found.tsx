'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [glitchActive, setGlitchActive] = useState(false)

    useEffect(() => {

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)

        // Random glitch effect
        const glitchInterval = setInterval(() => {
            setGlitchActive(true)
            setTimeout(() => setGlitchActive(false), 200)
        }, 3000)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            clearInterval(glitchInterval)
        }
    }, [])

    return (
        <div className={styles.container}>
            {/* Animated background gradient */}
            <div className={styles.backgroundGradient}></div>

            {/* Mouse follower spotlight */}
            <div
                className={styles.spotlight}
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`
                }}
            ></div>

            <main className={styles.content}>
                {/* Large 404 text */}
                <div className={`${styles.errorCode} ${glitchActive ? styles.glitch : ''}`} data-text="404">
                    404
                </div>

                {/* Subtitle */}
                <h1 className={styles.title}>
                    Lost in the <span className={styles.highlight}>void</span>
                </h1>

                <p className={styles.description}>
                    The page you&#39;re searching for has drifted into the digital abyss.
                    <br />
                    Let&#39;s navigate you back to familiar territory.
                </p>

                {/* Action buttons */}
                <div className={styles.actions}>
                    <Link href="/" className={styles.primaryButton}>
                        <span className={styles.buttonText}>Return Home</span>
                        <span className={styles.buttonIcon}>→</span>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className={styles.secondaryButton}
                    >
                        <span className={styles.buttonIcon}>←</span>
                        <span className={styles.buttonText}>Go Back</span>
                    </button>
                </div>

                {/* Decorative elements */}
                <div className={styles.decorativeGrid}>
                    {[...Array(9)].map((_, i) => (
                        <div
                            key={i}
                            className={styles.gridCell}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                    ))}
                </div>
            </main>

            {/* Bottom decorative line */}
            <div className={styles.bottomLine}></div>
        </div>
    )
}