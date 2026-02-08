"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useState, useEffect } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    // Simplified mobile transition (Fade only) vs Complex desktop transition (Slide Up)
    const variants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const mobileVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                variants={isMobile ? mobileVariants : variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
