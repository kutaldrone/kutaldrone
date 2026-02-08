"use client";

import { useCallback } from "react";

const useHaptic = () => {
    const trigger = useCallback(() => {
        if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
            // Short, sharp vibration for UI feedback
            window.navigator.vibrate(10);
        }
    }, []);

    return { trigger };
};

export default useHaptic;
