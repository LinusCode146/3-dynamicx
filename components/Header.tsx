'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import AuthButtons from "@/components/AuthButtons";
import Image from "next/image";


export default function Header({userId, image, mail}: {userId: string, image: string | null | undefined, mail: string | null | undefined}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    {/* Left Navigation */}
                    <nav className={styles.navLeft}>
                        <Link href={"/contact"}>Kontakt</Link>
                        <Link href={"/team"}>Team</Link>
                        <Link href={"/products"}>Vasen</Link>
                        <Link href={"/favorites"}>Favorites</Link>
                    </nav>

                    {/* Centered Logo */}
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoText}>3DynamicX</span>
                    </Link>

                    {/* Right Navigation */}
                    <div className={styles.navRight}>
                        <AuthButtons />
                        {mail && <Link className={styles.signUp} href={`/userInfo/${userId}`}>Cart</Link>}
                        {image && <Image  className={styles.cartButton} priority width={16} height={16} src={image} alt={"Profile Pic"} />  }
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Sidebar for Mobile */}
            <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
                <ul className={styles.sidebarLinks}>
                    <li><Link href={"/contact"} onClick={closeMenu}>Kontakt</Link></li>
                    <li><Link href={"/team"} onClick={closeMenu}>Team</Link></li>
                    <li><Link href={"/products"} onClick={closeMenu}>Vasen</Link></li>
                    <li><Link href={"/favorites"} onClick={closeMenu}>Favorites</Link></li>

                    <li className={styles.divider}></li>
                    {!mail && (
                        <>
                            <li><Link href="/" onClick={closeMenu}>Sign up</Link></li>
                            <li><Link href="/" onClick={closeMenu}>Sign in</Link></li>
                        </>
                    )}
                    {image && (
                        <>
                            <li><Link href={`/userInfo/${userId}`} onClick={closeMenu}>Cart</Link></li>
                            <li>
                                    <Link href={`/userInfo/${userId}`}>Profile</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className={styles.overlay}
                    onClick={closeMenu}
                ></div>
            )}
        </>
    )
}