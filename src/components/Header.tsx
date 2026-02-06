"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 3250);
    });

    const navLinks = [
        { href: "/hakkimizda", label: "Hakkımızda" },
        { href: "#services", label: "Hizmetler" },
        { href: "/fiyatlandirma", label: "Fiyatlandırma" },
        { href: "#projects", label: "Projeler" },
        { href: "/sss", label: "SSS" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
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
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
