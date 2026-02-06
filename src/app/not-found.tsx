"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 flex items-center justify-center px-6">
            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Number */}
                <div className="relative mb-8">
                    <h1 className="font-heading font-bold text-[180px] md:text-[240px] leading-none text-zinc-100 select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-[#c5f536] rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Message */}
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-aerialix-dark mb-6">
                    Sayfa Bulunamadı
                </h2>
                <p className="text-xl text-zinc-600 mb-12 max-w-md mx-auto">
                    Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-aerialix-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-[#c5f536] hover:text-aerialix-dark transition-all duration-300 group"
                    >
                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Ana Sayfaya Dön
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-zinc-200 text-aerialix-dark px-8 py-4 rounded-xl font-bold hover:border-aerialix-dark transition-all duration-300 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Geri Dön
                    </button>
                </div>

                {/* Quick Links */}
                <div className="mt-16 pt-8 border-t border-zinc-200">
                    <p className="text-sm text-zinc-500 mb-4">Popüler Sayfalar:</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link
                            href="/hakkimizda"
                            className="text-sm text-zinc-600 hover:text-aerialix-dark underline"
                        >
                            Hakkımızda
                        </Link>
                        <span className="text-zinc-300">•</span>
                        <Link
                            href="/fiyatlandirma"
                            className="text-sm text-zinc-600 hover:text-aerialix-dark underline"
                        >
                            Fiyatlandırma
                        </Link>
                        <span className="text-zinc-300">•</span>
                        <Link href="/sss" className="text-sm text-zinc-600 hover:text-aerialix-dark underline">
                            SSS
                        </Link>
                        <span className="text-zinc-300">•</span>
                        <Link href="/#contact" className="text-sm text-zinc-600 hover:text-aerialix-dark underline">
                            İletişim
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
