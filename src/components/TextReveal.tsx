"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export default function TextReveal({ text, className = "" }: { text: string; className?: string }) {
    const container = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 85%", "end 50%"]
    });

    const words = text.split(" ");

    return (
        <p ref={container} className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                    <Word key={i} range={[start, end]} progress={scrollYProgress}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: number[] }) => {
    const opacity = useTransform(progress, range, [0.15, 1]);
    return (
        <span className="relative inline-block">
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};
