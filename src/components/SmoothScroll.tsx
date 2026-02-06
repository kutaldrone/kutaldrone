"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    // Mobile check: crude but effective for disabling heavy JS scroll on phones
    // We'll use CSS to ensure smooth scrolling natively on HTML
    return (
        <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 0.7, gestureOrientation: "vertical" }}>
            {children}
        </ReactLenis>
    );
}
