'use client';

import { useParams } from 'next/navigation';
import {useState, useEffect, useMemo} from 'react';
import gStyles from "@/public/globalStyles.module.css";
import styles from './cart.module.css';
import {CartProductData, productList} from "@/data/vaseInfo";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios, {AxiosError} from "axios";
import Image from "next/image";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ShoppingCart() {
    const params = useParams();
    const [cartItems, setCartItems] = useState<CartProductData[]>([]);
    const [_, setTotal] = useState("");

    const { data, error, isLoading } = useQuery<CartProductData[]>({
        queryFn: getUserCartProducts,
        queryKey: ['user-cart'],
    });

    // Initialize cartItems when data is loaded
    useEffect(() => {
        if (data) {
            setCartItems(data);
        }
    }, [data]);

    useMemo(() => {
        // eslint-disable-next-line react-hooks/set-state-in-render
        setTotal(() => {
            return cartItems.reduce((total, item) => {
                const price = parseFloat(item.price.replace('€', ''));
                return total + (price * item.quantity);
            }, 0).toFixed(2);
        })
    }, [cartItems]);

    const delMutation = useMutation({
        mutationFn: (data: {productId: string}) => {
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
        mutationFn: (data: {productId: string, quantity: number}) => {
            return axios.put('/api/cart/updateQuantity', data);
        },
        onSuccess: () => {

        },
        onError: error => {
            if (error instanceof AxiosError) toast.error(error?.response?.data.error);
        }
    })

    const userId = params?.userId as string;

    const updateQuantity = (productId: string, change: number) => {
        setCartItems(prev =>
            prev.map(item => {
                if (item.productId === productId) {
                    const newQuantity = Math.max(1, item.quantity + change);
                    updateQuantityMutation.mutate({productId, quantity: newQuantity});
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const removeItem = (productId: string) => {
        setCartItems(prev => prev.filter(item => item.productId !== productId));
        delMutation.mutate({productId: productId})
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

    if (isLoading) {
        return (
            <>
                <div className={gStyles.filler}></div>
                <div className={gStyles.center}>
                    <div className={styles.loading}>Laden...</div>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <div className={gStyles.filler}></div>
                <div className={gStyles.center}>
                    <div className={styles.error}>Fehler beim Laden des Warenkorbs</div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className={gStyles.filler}></div>
            <div className={gStyles.center}>
                <div className={styles.cartContainer}>
                    <h1 className={styles.title}>Ihr Warenkorb</h1>
                    <div className={styles.userInfo}>
                        Benutzer: {decodeURIComponent(userId)}
                    </div>

                    {cartItems.length === 0 ? (
                        <div className={styles.emptyCart}>
                            <p>Ihr Warenkorb ist leer</p>
                        </div>
                    ) : (
                        <>
                            <div className={styles.cartItems}>
                                {cartItems.map((item, index) => (
                                    <div
                                        key={item.productId}
                                        className={styles.cartItem}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className={styles.itemImage}>
                                            <Image
                                                src={productList[parseInt(item.productId ) - 1].image}
                                                alt={item.name}
                                                width={100}
                                                height={100}
                                            />
                                        </div>

                                        <div className={styles.itemDetails}>
                                            <h3 className={styles.itemName}>{item.name}</h3>
                                            <p className={styles.itemDescription}>{item.description}</p>
                                            <p className={styles.itemPrice}>{item.price}</p>
                                        </div>

                                        <div className={styles.itemControls}>
                                            <div className={styles.quantityControl}>
                                                <button
                                                    onClick={() => updateQuantity(item.productId, -1)}
                                                    className={styles.quantityBtn}
                                                >
                                                    <FaMinus />
                                                </button>
                                                <span className={styles.quantity}>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.productId, 1)}
                                                    className={styles.quantityBtn}
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>

                                            <div className={styles.itemTotal}>
                                                {(parseFloat(item.price.replace('€', '')) * item.quantity).toFixed(2)}€
                                            </div>

                                            <button
                                                onClick={() => removeItem(item.productId)}
                                                className={styles.deleteBtn}
                                                aria-label="Artikel entfernen"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
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

                                <button className={styles.checkoutBtn}>
                                    Zur Kasse gehen
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

async function getUserCartProducts() {
    const res = await axios.get('/api/cart/getUserProducts');
    return res.data;
}