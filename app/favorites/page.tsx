'use client'

import gStyles from '../../public/globalStyles.module.css'
import LikedVases from "@/components/LikedVases";


export default function Favorites() {
    return (
        <div className={gStyles.center}>
            <LikedVases />
        </div>

    );
}
