'use client';

import {useEffect, useMemo, useState} from 'react';
// loadStripe wird nicht mehr benötigt!
// import {loadStripe} from '@stripe/stripe-js';
import gStyles from "@/public/globalStyles.module.css";
import styles from './cart.module.css';
import {CartProductData, productList} from "@/data/vaseInfo";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios, {AxiosError} from "axios";
import Image from "next/image";
import {FaMinus, FaPlus, FaTrash} from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";
import LoadingSpinner from "@/components/LoadingSpinner";
import {AnimatePresence, motion} from "motion/react"

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState<CartProductData[]>([]);
    const [_, setTotal] = useState("");
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

    const {data, error, isLoading} = useQuery<CartProductData[]>({
        queryFn: getUserCartProducts,
        queryKey: ['user-cart'],
    });

    useEffect(() => {
        console.log(data)
        if (data) {
            setCartItems(data);
        }
    }, [data]);

    useMemo(() => {
        setTotal(() => {
            return cartItems.reduce((total, item) => {
                const price = parseFloat(item.price.replace('€', ''));
                return total + (price * item.quantity);
            }, 0).toFixed(2);
        })
    }, [cartItems]);

    const delMutation = useMutation({
        mutationFn: (data: { productId: string, size: string }) => {
            return axios.delete('/api/cart/deleteUserProduct', {data});
        },
        onSuccess: () => {
            toast.success("Deleted the Product")
        },
        onError: error => {
            if (error instanceof AxiosError) toast.error(error?.response?.data.error);
        }
    })

    const updateQuantityMutation = useMutation({
        mutationFn: (data: { productId: string, quantity: number, size: string }) => {
            return axios.put('/api/cart/updateQuantity', data);
        },
        onSuccess: () => {

        },
        onError: error => {
            if (error instanceof AxiosError) toast.error(error?.response?.data.error);
        }
    })

    const updateQuantity = (productId: string, change: number, size: string) => {
        setCartItems(prev =>
            prev.map(item => {
                if (item.productId === productId && item.size === size) {
                    const newQuantity = Math.max(1, item.quantity + change);
                    updateQuantityMutation.mutate({productId, quantity: newQuantity, size: size});
                    return {...item, quantity: newQuantity};
                }
                return item;
            })
        );
    };

    const removeItem = (productId: string, size: string) => {
        setCartItems(prev => prev.filter(item => !(item.productId === productId && item.size === size)));
        delMutation.mutate({productId: productId, size: size})
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('€', ''));
            return total + (price * item.quantity);
        }, 0).toFixed(2);
    };

    const calculateShipping = () => {
        const subtotal = parseFloat(calculateTotal());
        return subtotal >= 50 ? 0 : 4.90;
    };

    const calculateFinalTotal = () => {
        const subtotal = parseFloat(calculateTotal());
        const shipping = calculateShipping();
        return (subtotal + shipping).toFixed(2);
    };

    // Moderne Checkout-Funktion
    const handleCheckout = async () => {
        setIsCheckoutLoading(true);

        try {
            // Produktdaten für Stripe vorbereiten
            const checkoutItems = cartItems.map(item => ({
                productId: item.productId,
                name: item.name,
                description: item.description,
                size: item.size,
                price: item.price,
                quantity: item.quantity,
                image: `${window.location.origin}${productList[parseInt(item.productId) - 1].image}`,
            }));

            // Checkout Session vom Backend erstellen
            const response = await axios.post('/api/checkout', {
                items: checkoutItems,
            });

            const { url } = response.data;

            if (!url) {
                toast.error('Fehler beim Erstellen der Checkout-Session');
                return;
            }

            // Direkte Weiterleitung zur Stripe Checkout-Seite
            window.location.href = url;

        } catch (error) {
            console.error('Checkout error:', error);
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.error || 'Fehler beim Checkout');
            } else {
                toast.error('Fehler beim Checkout');
            }
            setIsCheckoutLoading(false);
        }
        // Loading bleibt true während der Weiterleitung
    };

    if (isLoading) {
        return (
            <div className={gStyles.center}>
                <LoadingSpinner
                    size="large"
                    message="Produkte werden geladen..."
                />
            </div>
        );
    }

    if (error) {
        return (
            <>
                <div className={gStyles.center}>
                    <div className={styles.error}>Fehler beim Laden des Warenkorbs</div>
                </div>
            </>
        );
    }

    return (
        <AnimatePresence>
            <div className={gStyles.center}>
                <div className={styles.cartContainer}>
                    <h1 className={styles.title}>Ihr Warenkorb</h1>

                    {cartItems.length === 0 ? (
                        <div className={styles.emptyCart}>
                            <p>Ihr Warenkorb ist leer</p>
                        </div>
                    ) : (
                        <>
                            <div className={styles.cartItems}>
                                {cartItems.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        className={styles.cartItem}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className={styles.itemImage}>
                                            <Image
                                                src={productList[parseInt(item.productId) - 1].image}
                                                alt={item.name}
                                                width={100}
                                                height={100}
                                            />
                                        </div>

                                        <div className={styles.itemDetails}>
                                            <h3 className={styles.itemName}>{item.name}</h3>
                                            <p className={styles.itemDescription}>{item.description} - {item.size}</p>
                                            <p className={styles.itemPrice}>{item.price}</p>
                                        </div>

                                        <div className={styles.itemControls}>
                                            <div className={styles.quantityControl}>
                                                <button
                                                    onClick={() => updateQuantity(item.productId, -1, item.size as string)}
                                                    className={styles.quantityBtn}
                                                >
                                                    <FaMinus/>
                                                </button>
                                                <span className={styles.quantity}>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.productId, 1, item.size as string)}
                                                    className={styles.quantityBtn}
                                                >
                                                    <FaPlus/>
                                                </button>
                                            </div>

                                            <div className={styles.itemTotal}>
                                                {(parseFloat(item.price.replace('€', '')) * item.quantity).toFixed(2)}€
                                            </div>

                                            <button
                                                onClick={() => removeItem(item.productId, item.size as string)}
                                                className={styles.deleteBtn}
                                                aria-label="Artikel entfernen"
                                            >
                                                <FaTrash/>
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className={styles.cartSummary}>
                                <div className={styles.summaryRow}>
                                    <span>Zwischensumme:</span>
                                    <span>{calculateTotal()}€</span>
                                </div>
                                <div className={styles.summaryRow}>
                                    <span>Versand:</span>
                                    <span>{calculateShipping() === 0 ? "Kostenlos" : `${calculateShipping().toFixed(2)}€`}</span>
                                </div>
                                <div className={`${styles.summaryRow} ${styles.total}`}>
                                    <span>Gesamt:</span>
                                    <span>{calculateFinalTotal()}€</span>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className={styles.checkoutBtn}
                                    disabled={isCheckoutLoading}
                                >
                                    {isCheckoutLoading ? 'Weiterleitung zu Stripe...' : 'Zur Kasse gehen'}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </AnimatePresence>
    );
}

async function getUserCartProducts() {
    const res = await axios.get('/api/cart/getUserProducts');
    return res.data;
}