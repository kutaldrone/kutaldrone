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
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.0117 2.0166C6.5057 2.0166 2.02344 6.4988 2.02344 12.0049C2.02344 13.7656 2.48438 15.4853 3.37695 17.0312L2.01172 22.0166L7.14355 20.6709C8.63672 21.4883 10.3125 21.9932 12.0117 21.9932C17.5176 21.9932 22 17.5109 22 12.0049C22 6.4988 17.5176 2.0166 12.0117 2.0166ZM12.0117 20.3174C10.5186 20.3174 9.08301 19.9209 7.82227 19.1602L7.52441 18.9834L4.47852 19.7822L5.29199 16.8096L5.09375 16.4941C4.24609 15.1504 3.78418 13.6016 3.78418 12.0049C3.78418 7.46973 7.47656 3.77734 12.0117 3.77734C16.5469 3.77734 20.2393 7.46973 20.2393 12.0049C20.2393 16.5401 16.5469 20.3174 12.0117 20.3174ZM16.4883 14.4453C16.2441 14.3223 15.0449 13.7324 14.8223 13.6514C14.6006 13.5693 14.4375 13.5283 14.2754 13.7725C14.1133 14.0166 13.6465 14.5645 13.5049 14.7275C13.3633 14.8906 13.2217 14.9092 12.9775 14.7871C12.7334 14.665 11.9482 14.4063 11.0166 13.5762C10.2861 12.9258 9.79199 12.1221 9.64941 11.8779C9.50781 11.6338 9.63477 11.503 9.75684 11.3818C9.86621 11.2725 10.001 11.0977 10.123 10.9541C10.2451 10.8115 10.2852 10.709 10.3662 10.5479C10.4473 10.3848 10.4063 10.2422 10.3457 10.1211C10.2842 9.99805 9.79688 8.80078 9.59375 8.3125C9.39063 7.84473 9.18652 7.90723 9.03516 7.90723C8.89355 7.90723 8.73047 7.90723 8.56738 7.90723C8.4043 7.90723 8.14063 7.96777 7.91797 8.21289C7.69434 8.45703 7.0625 9.04785 7.0625 10.248C7.0625 11.4502 7.93555 12.6104 8.05859 12.7725C8.18066 12.9355 9.86035 15.5234 12.4336 16.6357C13.0459 16.9004 13.5234 17.0586 13.8994 17.1777C14.5059 17.3701 15.0615 17.3428 15.501 17.2773C15.9863 17.2051 16.9922 16.6699 17.2012 16.0791C17.4102 15.4883 17.4102 14.9795 17.3496 14.8789C17.2891 14.7764 17.126 14.7158 16.8818 14.5947H16.4883V14.4453Z" /></svg>
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
