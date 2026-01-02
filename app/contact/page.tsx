'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('sent');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <>
            <div className={styles.contactWrapper}>
                <div className={styles.contactContainer}>
                    {/* Header Section */}
                    <div className={styles.header}>
                        <h1 className={styles.title}>Nehmen Sie Kontakt zu uns auf</h1>
                        <p className={styles.subtitle}>
                            Haben Sie eine Frage zu unseren 3D-gedruckten Vasen? Wir freuen uns, von ihnen zu hören!
                        </p>
                    </div>

                    <div className={styles.content}>
                        {/* Contact Form */}
                        <div className={styles.formSection}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>
                                        Ihr Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                        placeholder="Max Mustermann"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>
                                        Email Addresse
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                        placeholder="max.mustermann@gmail.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="subject" className={styles.label}>
                                        Betreff
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                        placeholder="Wie können wir helfen?"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>
                                        Nachricht
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                        required
                                        placeholder="Bitte erzählen Sie uns mehr über ihr Anliegen"
                                        rows={6}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Sending...' :
                                        status === 'sent' ? '✓ Message Sent!' :
                                            status === 'error' ? '✗ Failed to Send' :
                                                'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className={styles.infoSection}>
                            <div className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <h3 className={styles.infoTitle}>Email</h3>
                                <p className={styles.infoText}>threedynamicx@gmail.com</p>
                                <p className={styles.infoSubtext}>Wir antworten so schnell wie möglich!</p>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                </div>
                                <h3 className={styles.infoTitle}>Ort</h3>
                                <p className={styles.infoText}>Oberursel</p>
                                <p className={styles.infoSubtext}>Hessen, Germany</p>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12 6 12 12 16 14"/>
                                    </svg>
                                </div>
                                <h3 className={styles.infoTitle}>Business Hours</h3>
                                <p className={styles.infoText}>Montag - Freitag</p>
                                <p className={styles.infoSubtext}>9:00 Uhr - 18 Uhr</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}