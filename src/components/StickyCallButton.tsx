"use client";

import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/metadata";
import useHaptic from "@/hooks/useHaptic";

export default function StickyCallButton() {
    const { trigger: haptic } = useHaptic();

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
            {/* Glassmorphism Container */}
            <div className="bg-white/90 backdrop-blur-lg border-t border-zinc-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                <div className="grid grid-cols-2 gap-4">
                    {/* Call Button */}
                    <a
                        href={`tel:${COMPANY.phone}`}
                        onClick={haptic}
                        className="flex items-center justify-center gap-2 bg-aerialix-dark text-white py-3.5 rounded-xl font-bold active:scale-95 transition-transform"
                    >
                        <Phone className="w-5 h-5 text-[#c5f536]" />
                        <span>Hemen Ara</span>
                    </a>

                    {/* WhatsApp/Contact Button */}
                    <a
                        href="https://wa.me/905529501367"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={haptic}
                        className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold active:scale-95 transition-transform"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
