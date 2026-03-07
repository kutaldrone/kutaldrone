"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import useHaptic from "@/hooks/useHaptic";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 3250);
    });

    const { trigger: haptic } = useHaptic();

    // Mobile Menu Scroll Lock
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: "/hakkimizda", label: "Hakkımızda" },
        { href: "/#services", label: "Hizmetler" },
        { href: "/hizmet-bolgeleri", label: "Hizmet Bölgeleri" },
        { href: "/fiyatlandirma", label: "Fiyatlandırma" },
        { href: "/blog", label: "Blog" },
        { href: "/#projects", label: "Projeler" },
        { href: "/sss", label: "SSS" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-500 ${isScrolled ? "bg-[#0a0c10]/70 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <img
                        src="/logo.png"
                        alt="Kutal Drone Logo"
                        className={`h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${!isScrolled ? "brightness-0 invert" : ""}`}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white/80 hover:text-white transition-all text-sm font-medium relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c5f536] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}

                    <a
                        href="https://wa.me/905529501367"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="WhatsApp"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.0117 2.0166C6.5057 2.0166 2.02344 6.4988 2.02344 12.0049C2.02344 13.7656 2.48438 15.4853 3.37695 17.0312L2.01172 22.0166L7.14355 20.6709C8.63672 21.4883 10.3125 21.9932 12.0117 21.9932C17.5176 21.9932 22 17.5109 22 12.0049C22 6.4988 17.5176 2.0166 12.0117 2.0166ZM12.0117 20.3174C10.5186 20.3174 9.08301 19.9209 7.82227 19.1602L7.52441 18.9834L4.47852 19.7822L5.29199 16.8096L5.09375 16.4941C4.24609 15.1504 3.78418 13.6016 3.78418 12.0049C3.78418 7.46973 7.47656 3.77734 12.0117 3.77734C16.5469 3.77734 20.2393 7.46973 20.2393 12.0049C20.2393 16.5401 16.5469 20.3174 12.0117 20.3174ZM16.4883 14.4453C16.2441 14.3223 15.0449 13.7324 14.8223 13.6514C14.6006 13.5693 14.4375 13.5283 14.2754 13.7725C14.1133 14.0166 13.6465 14.5645 13.5049 14.7275C13.3633 14.8906 13.2217 14.9092 12.9775 14.7871C12.7334 14.665 11.9482 14.4063 11.0166 13.5762C10.2861 12.9258 9.79199 12.1221 9.64941 11.8779C9.50781 11.6338 9.63477 11.503 9.75684 11.3818C9.86621 11.2725 10.001 11.0977 10.123 10.9541C10.2451 10.8115 10.2852 10.709 10.3662 10.5479C10.4473 10.3848 10.4063 10.2422 10.3457 10.1211C10.2842 9.99805 9.79688 8.80078 9.59375 8.3125C9.39063 7.84473 9.18652 7.90723 9.03516 7.90723C8.89355 7.90723 8.73047 7.90723 8.56738 7.90723C8.4043 7.90723 8.14063 7.96777 7.91797 8.21289C7.69434 8.45703 7.0625 9.04785 7.0625 10.248C7.0625 11.4502 7.93555 12.6104 8.05859 12.7725C8.18066 12.9355 9.86035 15.5234 12.4336 16.6357C13.0459 16.9004 13.5234 17.0586 13.8994 17.1777C14.5059 17.3701 15.0615 17.3428 15.501 17.2773C15.9863 17.2051 16.9922 16.6699 17.2012 16.0791C17.4102 15.4883 17.4102 14.9795 17.3496 14.8789C17.2891 14.7764 17.126 14.7158 16.8818 14.5947H16.4883V14.4453Z" />
                        </svg>
                    </a>

                    <Link
                        href="#contact"
                        className="bg-[#c5f536] text-[#122122] px-5 py-2.5 rounded-full text-sm font-medium hover:shadow-[0_0_20px_rgba(197,245,54,0.3)] hover:scale-105 transition-all duration-300 active:scale-95"
                    >
                        Teklif Al
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="md:hidden text-white p-2 z-50 relative"
                    onClick={() => {
                        haptic();
                        setMobileMenuOpen(!mobileMenuOpen);
                    }}
                >
                    <svg
                        className="w-6 h-6 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ transform: mobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
                    >
                        {mobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-full left-0 right-0 bg-[#122122]/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
                    >
                        <nav className="flex flex-col gap-2 p-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium py-3 px-4 rounded-xl block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="pt-2"
                            >
                                <Link
                                    href="#contact"
                                    className="bg-[#c5f536] text-[#122122] px-5 py-3 rounded-xl text-sm font-medium text-center block"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Teklif Al
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
