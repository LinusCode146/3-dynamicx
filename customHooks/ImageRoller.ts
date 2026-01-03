'use client'

import { useState } from "react";
import useUpdateEffect from "@/customHooks/useUpdateEffect";

interface ImageData {
    src: string;
    alt: string;
}

export type SwipeDirection = 'left' | 'right' | 'none';

export default function useImageRoller(images: ImageData[]) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<SwipeDirection>('none');

    useUpdateEffect(() => {
        // Reset direction nach Animation
        const timeout = setTimeout(() => setDirection('none'), 300);
        return () => clearTimeout(timeout);
    }, [index]);

    const nextImage = () => {
        setDirection('right');
        setIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
    };

    const prevImage = () => {
        setDirection('left');
        setIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
    };

    const currentImage = images[index];

    return {
        currentImage,
        currentIndex: index,
        direction,
        nextImage,
        prevImage
    };
}