"use client";

import { motion, useInView, useAnimation, type Variant } from "framer-motion";
import { useRef, useEffect } from "react";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    className?: string;
    variant?: "fade" | "slide-up" | "slide-left" | "slide-right" | "zoom";
    overflowVisible?: boolean;
}

export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0.25,
    duration = 0.5,
    className = "",
    variant = "slide-up",
    overflowVisible = false,
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants: Record<string, { hidden: Variant; visible: Variant }> = {
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        "slide-up": {
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
        },
        "slide-left": {
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
        },
        "slide-right": {
            hidden: { opacity: 0, x: 75 },

            visible: { opacity: 1, x: 0 },
        },
        zoom: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        },
    };

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                width,
                overflow: overflowVisible ? "visible" : "hidden"
            }}
            className={className}
        >
            <motion.div
                variants={variants[variant]}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
