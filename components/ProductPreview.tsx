import gStyles from '../public/globalStyles.module.css'
import styles from './ProductPreview.module.css'
import { GoHeart } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa";
import {CartProductData, VaseData} from "@/data/vaseInfo";
import Image from "next/image";
import Link from "next/link";
import {useMutation} from "@tanstack/react-query";
import axios, {AxiosError} from "axios";
import toast from "react-hot-toast";



export default function  ProductPreview (props: Partial<VaseData>) {
    const {name, price, description, image, productId} = props;

    const createCartProduct = useMutation({
        mutationFn: (data: CartProductData) => {
            return axios.post('/api/cart/addProduct', data);
        },
        onSuccess: () => {
            toast.success("Produkt wurde dem Warenkorb hinzugefügt");
        },
        onError: error => {
            if (error instanceof AxiosError) toast.error(error?.response?.data.message);
        }
    });

    const createHeart = useMutation({
        mutationFn: (data: {productId: string}) => {
            return axios.post('/api/cart/addHeart', data);
        },
        onSuccess: () => {
            toast.success("Produkt wurde in deinen Favorites getoggled");
        },
        onError: error => {
            if (error instanceof AxiosError) toast.error(error?.response?.data.message);
        }
    });

    const handelAddHeart = () => {

        const data = {
            productId: productId as string,
        }

        createHeart.mutate(data);
    };

    const handleAddToCart = () => {

        const data: CartProductData = {
            quantity: 1,
            productId: productId as string,
            name: name as string,
            price: price as string,
            description: description as string
        }

        createCartProduct.mutate(data);
    };
    return (
        <div className={`${gStyles.stack} ${styles.container}`}>
            <Link href={`/productDetails/${productId}`} className={styles.imgBox}>
                <Image loading="lazy" src={image as string} alt={name || "Product"} width={200} height={400}  />
                <div className={styles.imageOverlay}>
                    <span className={styles.viewDetails}>Details ansehen</span>
                </div>
            </Link>
            <div className={styles.contentWrapper}>
                <Link href={`/productDetails/${productId}`} className={styles.nameLink}>
                    <h3 className={styles.name}>{name}</h3>
                </Link>
                <p className={styles.description}>{description}</p>
                <div className={styles.footer}>
                    <h4 className={styles.price}>{price}</h4>
                    <div className={styles.icons}>
                        <button className={styles.iconButton} aria-label="Zu Favoriten hinzufügen">
                            <GoHeart onClick={handelAddHeart} />
                        </button>
                        <button
                            className={`${styles.iconButton} ${styles.cartButton}`}
                            onClick={handleAddToCart}
                            aria-label="In den Warenkorb"
                        >
                            <FaCartPlus/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}