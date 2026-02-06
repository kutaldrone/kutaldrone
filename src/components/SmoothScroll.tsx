"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 0.7, gestureOrientation: "vertical" }}>
            {children}
        </ReactLenis>
    );
}
