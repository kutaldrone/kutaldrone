"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, ShieldCheck, Camera, Heart, Zap } from "lucide-react";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth progress for transitions
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // --- PHASE 1: INTRO (0% - 20%) ---
    const opacity1 = useTransform(smoothProgress, [0, 0.15, 0.2], [1, 1, 0]);
    const scale1 = useTransform(smoothProgress, [0, 0.2], [1, 0.9]);

    // --- PHASE 2: FEATURES (20% - 50%) ---
    const opacity2 = useTransform(smoothProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
    const scale2 = useTransform(smoothProgress, [0.2, 0.5], [0.95, 1]);

    // --- PHASE 3: FLIGHT TO RESULTS (50% - 75%) ---
    const opacity3 = useTransform(smoothProgress, [0.5, 0.55, 0.7, 0.75], [0, 1, 1, 0]);

    // --- PHASE 4: CLEAR VIEW (75% - 100%) ---
    const opacity4 = useTransform(smoothProgress, [0.75, 0.8, 1], [0, 1, 1]);

    // --- MOUSE PARALLAX LOGIC ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse movement
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            // Calculate distance from center
            const x = -(e.clientX - innerWidth / 2) / 25; // Inverted direction
            const y = -(e.clientY - innerHeight / 2) / 25;

            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Drone Animation: Stays relatively fixed but moves slightly to feel alive
    const droneY = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
    const droneScale = useTransform(smoothProgress, [0, 0.5], [1, 0.9]);

    // LONG SCROLL LOGIC:
    // The background image is very tall. We want to traverse it from top (0%) to bottom (approx -60% to -80% depending on aspect ratio).
    // The container is 400vh.
    const bgY = useTransform(smoothProgress, [0, 1], ["0%", "-65%"]); // Adjust -65% based on actual image aspect ratio vs viewport
    const bgScale = useTransform(smoothProgress, [0, 1], [1, 1]); // No zoom needed, let the vertical travel happen

    // --- SEAMLESS SKY LOGIC ---
    // We pick a vibrant sky blue to force consistency
    const SKY_COLOR = "#43baf5";

    // Slide the solid overlay UP to reveal the image underneath, simulating descent
    const skyOverlayY = useTransform(smoothProgress, [0, 0.3], ["0%", "-100%"]);

    // 2. Drone Z-Index: Front to Back
    const droneZIndex = useTransform(smoothProgress, (v) => v < 0.15 ? 50 : 10);

    // Text Move Up Animation (Simulating natural scroll)
    const textY = useTransform(smoothProgress, [0, 0.3], ["0%", "-200%"]);

    return (
        <section ref={containerRef} className="relative h-[175vh] md:h-[400vh] bg-[#020305]">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#020305]">
                {/* 1. Realistic Background */}
                <motion.div style={{ y: bgY, scale: bgScale }} className="absolute top-0 left-0 w-full h-[100vh] md:h-[400vh] z-0">
                    <Image
                        src="/arkaplan.avif"
                        alt="Background"
                        fill
                        className="object-cover md:object-contain object-top"
                        priority
                        quality={90}
                    />
                </motion.div>

                {/* 1.5 Gradient Blend */}
                <motion.div
                    style={{ y: bgY, background: `linear-gradient(to bottom, ${SKY_COLOR} 20%, rgba(67, 186, 245, 0) 100%)` }}
                    className="absolute top-0 left-0 w-full h-[150vh] z-[2] pointer-events-none"
                />

                {/* 2. Solid Sky Intro */}
                <motion.div
                    style={{ y: skyOverlayY, background: `linear-gradient(to bottom, ${SKY_COLOR} 85%, transparent)` }}
                    className="absolute inset-0 h-[120vh] z-[5] origin-top"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-aerialix-dark/90 z-[6]" />

                {/* --- FIXED DRONE --- */}
                {/* Outer: Scroll & Z-Index Position */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ y: droneY, scale: droneScale, zIndex: droneZIndex }}
                >
                    {/* Middle: Mouse Parallax (Inverted) */}
                    <motion.div style={{ x: smoothMouseX, y: smoothMouseY }}>
                        {/* Inner: Continuous Float (Hover) */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-[43.75rem] max-w-[90vw] aspect-[14/3]"
                        >
                            <img
                                src="https://ext.same-assets.com/1370035257/1928263438.avif"
                                alt="Professional drone"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* --- SCROLL CONTENT SECTIONS --- */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">

                    {/* SECTION 1: HERO TITLE */}
                    <motion.div style={{ opacity: opacity1, scale: scale1, y: textY }} className="absolute text-center flex flex-col items-center gap-4 md:gap-6 select-none w-full px-4">
                        {/* KUTAL DRONE TEXT */}
                        <div className="flex flex-col items-center leading-[0.85]">
                            <h1 className="font-display font-bold text-white tracking-tight"
                                style={{ fontSize: "clamp(3.5rem, 15vw, 16rem)" }}>
                                Kutal
                            </h1>
                            <h1 className="font-display font-bold text-white/90 tracking-tight"
                                style={{
                                    fontSize: "clamp(3rem, 12vw, 13rem)",
                                    background: "linear-gradient(to bottom, #ffffff 30%, rgba(255,255,255,0.5))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}>
                                Drone
                            </h1>
                            <p className="text-white/70 text-lg md:text-2xl mt-4 tracking-wide font-sans max-w-2xl text-center px-4">
                                Sıradan görüntülerin ötesine geçin; dünyanızı gökyüzünden sinematik bir başyapıta dönüştürüyoruz.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 pointer-events-auto w-full sm:w-auto px-6 sm:px-0">
                            <Link href="/#contact" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto bg-aerialix-dark text-[#c9fd74] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 border border-[#c9fd74]/20">
                                    Teklif Al
                                    <span className="bg-[#c9fd74] text-aerialix-dark p-1 rounded-full"><ArrowRight className="w-3 h-3" /></span>
                                </button>
                            </Link>
                            <Link href="/#projects" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto bg-white text-aerialix-dark px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                    İşleri Gör
                                    <span className="bg-aerialix-dark/10 p-1 rounded-full"><ArrowRight className="w-3 h-3" /></span>
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* SECTION 2: FEATURES GRID */}
                    <motion.div style={{ opacity: opacity2, scale: scale2 }} className="absolute w-full max-w-6xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, text: "Lisanslı & onaylı pilot" },
                            { icon: Camera, text: "Ultra Yüksek Çözünürlük" },
                            { icon: Heart, text: "%100 Müşteri Memnuniyeti" },
                            { icon: Zap, text: "Hızlı teslimat" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-[#c5f536] w-12 h-12 bg-[#c5f536]/10 rounded-full flex items-center justify-center">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <p className="text-white font-sans font-medium">{item.text}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* SECTION 3: FROM FLIGHT TO RESULTS */}
                    <motion.div style={{ opacity: opacity3 }} className="absolute text-center max-w-3xl px-6">
                        <h2 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6">Gökyüzündeki İmzanız</h2>
                        <p className="font-sans text-xl text-white/80">Sizin vizyonunuz, bizim uzmanlığımızla buluşuyor.</p>
                    </motion.div>

                    {/* SECTION 4: CLEAR VIEW */}
                    <motion.div style={{ opacity: opacity4 }} className="absolute text-center max-w-3xl px-6">
                        <h2 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6">En İyi Fiyat Garantisi</h2>
                        <p className="font-sans text-xl text-white/80">Profesyonel hava çekimlerinde, kaliteden ödün vermeden en rekabetçi fiyatları sunuyoruz.</p>
                    </motion.div>

                </div>

                {/* SCROLL INDICATOR (Visual Cue) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 2, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
                    style={{ opacity: opacity1 }} // Only show in Phase 1
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white/50 text-xs tracking-widest uppercase font-sans">Kaydır</span>
                        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7-7-7" />
                        </svg>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
