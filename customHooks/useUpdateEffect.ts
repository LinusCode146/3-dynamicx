import { useEffect, useRef, DependencyList, EffectCallback } from "react";

/**
 * Custom hook that works like useEffect but skips the first render
 * @param callback - The effect callback to run on updates (not on mount)
 * @param dependencies - Dependency array for the effect
 */
export default function useUpdateEffect(
    callback: EffectCallback,
    dependencies: DependencyList
): void {
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
    }, dependencies);
}