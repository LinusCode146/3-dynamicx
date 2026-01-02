import gStyles from '../public/globalStyles.module.css'
import ProductPreview from "@/components/ProductPreview";
import {VaseData} from "@/data/vaseInfo";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import styles from "@/app/userInfo/[userId]/userInfo.module.css";
import {useEffect, useState} from "react";


export default function Vases() {
    const [stockItems, setStockItems] = useState<VaseData[]>();

    const { data, error, isLoading } = useQuery<VaseData[]>({
        queryFn: getStockProducts,
        queryKey: ['stock'],
    });

    useEffect(() => {
        if(data) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setStockItems(data);
        }
    }, [data])

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
        <div className={gStyles.grid}>
            {stockItems?.map((item, index) => <ProductPreview key={index} {...item} />  )}
        </div>
    );
}

async function getStockProducts() {
    const res = await axios.get('/api/cart/getStockProducts');
    return res.data;
}