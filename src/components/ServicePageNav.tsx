"use client";

import Link from "next/link";
import { Home, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
    { name: "Emlak Drone", href: "/emlak-drone-cekimi" },
    { name: "Düğün Drone", href: "/dugun-drone-cekimi" },
    { name: "İşletme Tanıtım", href: "/isletme-tanitim-filmi" },
    { name: "Etkinlik Drone", href: "/etkinlik-drone-cekimi" },
];

export default function ServicePageNav() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo + Home */}
                <Link
                    href="/"
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                    <img
                        src="/logo.png"
                        alt="Kutal Drone Logo"
                        className="h-10 w-auto object-contain"
                    />
                    <div className="flex items-center gap-2 text-aerialix-dark">
                        <Home className="w-5 h-5" />
                        <span className="font-semibold text-lg">Anasayfa</span>
                    </div>
                </Link>

                {/* Services Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                        className="flex items-center gap-2 px-4 py-2 bg-aerialix-dark text-white rounded-lg hover:bg-[#c5f536] hover:text-aerialix-dark transition-colors"
                    >
                        <span className="font-medium">Hizmetler</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden">
                            {services.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="block px-4 py-3 hover:bg-zinc-50 transition-colors border-b border-zinc-100 last:border-0"
                                >
                                    <span className="text-aerialix-dark font-medium">{service.name}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
