'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
    const searchParams = useSearchParams();
    const sessionId = searchParams?.get('session_id');
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        if (sessionId) {
            fetch(`/api/checkout-session?session_id=${sessionId}`)
                .then(res => res.json())
                .then(data => setOrderData(data));
        }
    }, [sessionId]);

    // ...

    return (
        <>
            <div>Zahlung erfolgreich!!</div>
            <div>Bestellnummer: {sessionId}</div>
        </>

    )
}