'use client';

import { useParams } from 'next/navigation';
import {AnimatePresence, motion} from "motion/react"
import Image from 'next/image';
import { useState } from 'react';
import gStyles from "@/public/globalStyles.module.css";
import styles from './pd.module.css';
import {CartProductData, productList, VaseData} from "@/data/vaseInfo";
import {useMutation} from "@tanstack/react-query";
import axios, {AxiosError} from "axios";
import toast from "react-hot-toast";
import useImageRoller from "@/customHooks/ImageRoller";

// Swipe Animation Varianten
const swipeVariants = {
    enter: (direction: string) => ({
        x: direction === 'right' ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        x: 0,
        opacity: 1
    },
    exit: (direction: string) => ({
        x: direction === 'right' ? -1000 : 1000,
        opacity: 0
    })
};

export default function ProductDetails() {
    const params = useParams();
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState<'S' | 'M' | 'L'>('M');

    const createCartProduct = useMutation({
        mutationFn: (data: CartProductData) => {
            return axios.post('/api/cart/addProduct', data);
        },
        onSuccess: () => {
            toast.success("Produkt(e) wurde dem Warenkorb hinzugefügt");
        },
        onError: error => {
            if (error instanceof AxiosError) toast.error(error?.response?.data.message);
        }
    });

    const productId = parseInt(params?.id as string);
    const product: Omit<VaseData, "productId"> = productList[productId - 1];


    const images =  [{ src: product.image, alt: product?.name }, { src: '/productImages/blumentopf.jpg', alt: product?.name }];
    const { currentImage, currentIndex, direction, nextImage, prevImage } = useImageRoller(images);



    if (!product) {
        return (
            <>
                <div className={gStyles.filler}></div>
                <div className={styles.container}>
                    <div className={styles.notFound}>
                        <h1>Produkt nicht gefunden</h1>
                        <p>Das gewünschte Produkt existiert leider nicht.</p>
                    </div>
                </div>
            </>
        );
    }

    const handleAddToCart = () => {
        const data: CartProductData = {
            quantity: quantity,
            productId: productId.toString(),
            name: product.name,
            price: product.price,
            description: product.description,
            size: size
        }

        createCartProduct.mutate(data);
    };

    const incrementQuantity = () => setQuantity(prev => prev < 10 ? prev + 1 : 10);
    const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.productDetails}>
                    {/* Bild-Bereich */}
                    <div className={styles.imageSection}>
                        <div className={styles.imageWrapper}>
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={swipeVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        top: 0,
                                        left: 0
                                    }}
                                >
                                    <Image
                                        src={currentImage.src}
                                        alt={currentImage.alt}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        fill
                                        className={styles.productImage}
                                        loading="eager"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Buttons (falls mehrere Bilder) */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className={styles.imageNavBtn}
                                        aria-label="Vorheriges Bild"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className={styles.imageNavBtn}
                                        aria-label="Nächstes Bild"
                                    >
                                        ›
                                    </button>
                                    <div className={styles.imageIndicator}>
                                        {currentIndex + 1} / {images.length}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Info-Bereich */}
                    <div className={styles.infoSection}>
                        <h1 className={styles.productName}>{product.name}</h1>

                        <div className={styles.priceSection}>
                            <span className={styles.price}>{product.price}</span>
                            <span className={styles.vatInfo}>inkl. MwSt.</span>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.descriptionSection}>
                            <h3>Beschreibung</h3>
                            <p className={styles.description}>{product.description}</p>
                        </div>

                        <div className={styles.divider}></div>

                        {/* Größenauswahl */}
                        <div className={styles.sizeSection}>
                            <label className={styles.sizeLabel}>Größe:</label>
                            <div className={styles.sizeOptions}>
                                <button
                                    onClick={() => setSize('S')}
                                    className={`${styles.sizeBtn} ${size === 'S' ? styles.sizeBtnActive : ''}`}
                                    aria-label="Größe S auswählen"
                                >
                                    S
                                </button>
                                <button
                                    onClick={() => setSize('M')}
                                    className={`${styles.sizeBtn} ${size === 'M' ? styles.sizeBtnActive : ''}`}
                                    aria-label="Größe M auswählen"
                                >
                                    M
                                </button>
                                <button
                                    onClick={() => setSize('L')}
                                    className={`${styles.sizeBtn} ${size === 'L' ? styles.sizeBtnActive : ''}`}
                                    aria-label="Größe L auswählen"
                                >
                                    L
                                </button>
                            </div>
                        </div>

                        {/* Menge und Warenkorb */}
                        <div className={styles.actionSection}>
                            <div className={styles.quantitySelector}>
                                <label htmlFor="quantity">Menge:</label>
                                <div className={styles.quantityControls}>
                                    <button
                                        onClick={decrementQuantity}
                                        className={styles.quantityBtn}
                                        aria-label="Menge verringern"
                                    >
                                        −
                                    </button>
                                    <input
                                        id="quantity"
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className={styles.quantityInput}
                                    />
                                    <button
                                        onClick={incrementQuantity}
                                        className={styles.quantityBtn}
                                        aria-label="Menge erhöhen"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className={styles.addToCartBtn}
                            >
                                In den Warenkorb
                            </button>
                        </div>

                        {/* Zusätzliche Infos */}
                        <div className={styles.additionalInfo}>
                            <div className={styles.infoItem}>
                                <span className={styles.infoIcon}>✓</span>
                                <span>3D-Gedruckt - für einen Einkauf von Vasen im Wert von 6€ wird 1€ an <b>The Ocean Cleanup</b> gespendet.</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoIcon}>✓</span>
                                <span>Versandfertig in 2-3 Werktagen</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoIcon}>✓</span>
                                <span>Kostenloser Versand ab 30€</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}