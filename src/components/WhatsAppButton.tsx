"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);

    const phoneNumber = "905529501367"; // Remove spaces and dashes
    const message = "Merhaba, drone çekim hizmetleriniz hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="WhatsApp ile iletişime geç"
        >
            {/* Floating Button */}
            <div className="relative">
                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />

                {/* Main Button */}
                <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]">
                    <MessageCircle className="w-7 h-7" />
                </div>

                {/* Tooltip */}
                <div
                    className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-aerialix-dark text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
                        }`}
                >
                    WhatsApp ile mesaj gönderin
                    {/* Arrow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                        <div className="border-8 border-transparent border-l-aerialix-dark" />
                    </div>
                </div>
            </div>
        </a>
    );
}
