'use client'

import Vases from "@/components/Vases";
import gStyles from '../public/globalStyles.module.css'


export default function Home() {
  return (
      <div className={gStyles.center}>
        <div className={gStyles.filler}></div>
        <Vases />
      </div>

  );
}
