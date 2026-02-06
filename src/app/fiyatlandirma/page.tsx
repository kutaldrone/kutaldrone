"use client";

import { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";
import ServicePageNav from "@/components/ServicePageNav";

// Note: metadata export doesn't work in client components, moving to parent layout if needed

export default function PricingPage() {
    // Hardcoded pricing packages (can be replaced with CMS data later)
    const packages = [
        {
            name: "Temel",
            price: "₺3,500",
            priceDescription: "/proje",
            highlighted: false,
            features: [
                "30 dakika uçuş süresi",
                "20-30 fotoğraf",
                "1 dakika video (4K)",
                "Temel renk düzeltme",
                "3-5 gün teslimat",
                "Online galeri paylaşımı",
            ],
            buttonText: "Teklif Al",
            order: 1,
            color: "white" as const,
        },
        {
            name: "Standart",
            price: "₺5,500",
            priceDescription: "/proje",
            highlighted: true,
            features: [
                "1 saat uçuş süresi",
                "40+ fotoğraf + 2 dakika video",
                "Profesyonel renk derecelendirme",
                "4K video kalitesi",
                "Müzik ve kurgu dahil",
                "48 saat hızlı teslimat",
                "Sınırsız revizyon",
                "Online galeri + USB teslimat",
            ],
            buttonText: "En Popüler",
            order: 2,
            color: "lime" as const,
        },
        {
            name: "Premium",
            price: "₺8,500",
            priceDescription: "/proje",
            highlighted: false,
            features: [
                "2+ saat uçuş süğresi",
                "60+ fotoğraf + 3-5 dakika video",
                "6K sinematik görüntü",
                "Profesyonel kurgu ve müzik",
                "360° panorama dahil",
                "24 saat acil teslimat",
                "Sınırsız revizyon",
                "Tüm dosyalar + USB + Online galeri",
            ],
            buttonText: "Premium Teklif",
            order: 3,
            color: "dark" as const,
        },
    ];

    return (
        <>
            <ServicePageNav />
            <main className="min-h-screen bg-white pt-20">
                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-20">
                            <h1 className="font-heading font-bold text-6xl md:text-7xl text-aerialix-dark mb-6">
                                Şeffaf Fiyatlandırma
                            </h1>
                            <p className="font-sans text-xl text-zinc-500 max-w-2xl mx-auto">
                                İhtiyacınıza uygun paketi seçin. Gizli ücret yok, net fiyatlar.
                            </p>
                        </div>

                        {/* Pricing Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {packages.map((pkg, index) => {
                                const isHighlighted = pkg.highlighted;
                                const bgColor =
                                    pkg.color === "lime"
                                        ? "bg-[#c5f536]"
                                        : pkg.color === "dark"
                                            ? "bg-aerialix-dark"
                                            : "bg-white";
                                const textColor =
                                    pkg.color === "white" ? "text-aerialix-dark" : "text-white";
                                const borderColor =
                                    pkg.color === "white" ? "border-zinc-200" : "border-transparent";

                                return (
                                    <div
                                        key={index}
                                        className={`relative rounded-3xl p-8 border-2 ${borderColor} ${isHighlighted ? "scale-105 shadow-2xl" : "shadow-lg"
                                            } transition-all hover:scale-105`}
                                        style={{
                                            backgroundColor:
                                                pkg.color === "lime"
                                                    ? "#c5f536"
                                                    : pkg.color === "dark"
                                                        ? "#122122"
                                                        : "white",
                                            color: pkg.color === "white" ? "#122122" : "white",
                                        }}
                                    >
                                        {isHighlighted && (
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-aerialix-dark text-white px-4 py-1 rounded-full text-sm font-bold">
                                                ⭐ En Popüler
                                            </div>
                                        )}

                                        <h3 className="font-heading font-bold text-3xl mb-2">
                                            {pkg.name}
                                        </h3>
                                        <div className="flex items-baseline gap-2 mb-6">
                                            <span className="text-5xl font-bold">{pkg.price}</span>
                                            <span className="text-lg opacity-70">{pkg.priceDescription}</span>
                                        </div>

                                        <ul className="space-y-3 mb-8">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <Check
                                                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.color === "white"
                                                            ? "text-[#c5f536]"
                                                            : pkg.color === "lime"
                                                                ? "text-aerialix-dark"
                                                                : "text-[#c5f536]"
                                                            }`}
                                                    />
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href="/#contact"
                                            className={`block text-center py-4 rounded-xl font-bold transition-all ${pkg.color === "white"
                                                ? "bg-aerialix-dark text-white hover:bg-[#c5f536] hover:text-aerialix-dark"
                                                : pkg.color === "lime"
                                                    ? "bg-aerialix-dark text-white hover:bg-white hover:text-aerialix-dark"
                                                    : "bg-[#c5f536] text-aerialix-dark hover:bg-white"
                                                }`}
                                        >
                                            {pkg.buttonText}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="text-center bg-zinc-50 rounded-3xl p-12">
                            <h2 className="font-heading font-bold text-4xl text-aerialix-dark mb-4">
                                Özel Projeniz İçin Teklif Alın
                            </h2>
                            <p className="text-xl text-zinc-600 mb-8">
                                Standart paketlere uymayan özel projeler için bizimle iletişime geçin
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-block bg-aerialix-dark text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-[#c5f536] hover:text-aerialix-dark transition-all"
                            >
                                Özel Teklif İsteyin
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
