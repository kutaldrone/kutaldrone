"use client";

import React, { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => void;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallButton() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e as BeforeInstallPromptEvent);
            // Update UI notify the user they can install the PWA
            setIsVisible(true);
        });
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }

        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null);
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-8 md:pb-4 flex justify-center"
                >
                    <div className="bg-[#020305] border border-white/10 rounded-2xl shadow-2xl p-4 flex items-center gap-4 max-w-sm w-full mx-4 backdrop-blur-lg bg-opacity-90">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                            <img src="/logo.png" alt="App Icon" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="flex-grow">
                            <h4 className="text-white font-bold text-sm">Kutal Drone Uygulaması</h4>
                            <p className="text-white/60 text-xs">Hızlı erişim için ana ekrana ekle.</p>
                        </div>
                        <button
                            onClick={handleInstallClick}
                            className="bg-[#c5f536] text-[#020305] px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            <Download className="w-4 h-4" />
                            Yükle
                        </button>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-white/40 hover:text-white p-1"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
