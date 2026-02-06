import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { Check, Cuboid, Map, Ruler, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ServicePageNav from "@/components/ServicePageNav";

export const metadata: Metadata = generateMetadata({
    title: "3D Haritalama ve Modelleme - Tekirdağ Profesyonel Drone Hizmeti",
    description:
        "Tekirdağ, Çorlu, Çerkezköy'de 3D haritalama ve modelleme hizmeti. İnşaat, arazi ölçümü, harita çıkarma. Ortofoto, hacim hesaplama, topoğrafik harita.",
    keywords: [
        "3d haritalama tekirdağ",
        "drone ile harita çıkarma",
        "ortofoto tekirdağ",
        "arazi ölçümü drone",
        "topoğrafik harita",
        "3d modelleme drone",
        "hacim hesaplama",
        "fotogrametri tekirdağ",
    ],
});

export default function ThreeDHaritalamaPage() {
    return (
        <>
            <ServicePageNav />
            <main className="min-h-screen bg-white pt-20">{/* pt-20 for fixed nav */}
                {/* Hero */}
                <section className="relative bg-aerialix-dark text-white py-32 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">
                            3D Haritalama & Modelleme
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 mb-8">
                            Tekirdağ'da Profesyonel Drone ile Arazi Ölçümü ve Fotogrametri
                        </p>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto">
                            İnşaat, tarım ve planlama projeleri için hassas ortofoto haritalar, 3D modeller ve hacim hesaplamaları.
                        </p>
                    </div>
                </section>

                {/* Problem & Solution */}
                <section className="py-20 px-6 bg-zinc-50">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-heading font-bold text-3xl text-aerialix-dark mb-6">
                                Neden 3D Haritalama?
                            </h2>
                            <p className="text-zinc-600 mb-4 leading-relaxed">
                                Geleneksel arazi ölçümü zaman alıcı, pahalı ve bazen tehlikelidir. Drone ile fotogrametri sayesinde:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Geniş arazileri hızlıca haritalayın",
                                    "Santimetre hassasiyetle ölçüm alın",
                                    "3D model oluşturun",
                                    "Hacim ve mesafe hesaplama yapın",
                                    "Projenizi görselleştirin",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#c5f536] mt-1 flex-shrink-0" />
                                        <span className="text-zinc-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-heading font-bold text-3xl text-aerialix-dark mb-6">
                                Nasıl Kullanılır?
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { icon: Camera, title: "Hava Çekimi", desc: "Drone ile alanın yüksek çözünürlüklü fotoğrafları çekilir" },
                                    { icon: Cuboid, title: "İşleme", desc: "Özel yazılımlarla fotoğraflar birleştirilerek 3D model oluşturulur" },
                                    { icon: Map, title: "Harita Üretimi", desc: "Ortofoto, DEM, DSM haritalar ve teknik çizimler hazırlanır" },
                                    { icon: Ruler, title: "Analiz", desc: "Hacim, mesafe, alan hesaplamaları yapılır" },
                                ].map((step, i) => {
                                    const Icon = step.icon;
                                    return (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-12 h-12 rounded-full bg-[#c5f536]/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6 text-[#c5f536]" />
                                            </div>
                                            <div>
                                                <h3 className="font-heading font-bold text-lg text-aerialix-dark mb-1">{step.title}</h3>
                                                <p className="text-zinc-600">{step.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-heading font-bold text-4xl text-aerialix-dark mb-12 text-center">
                            Hangi Alanlarda Kullanılır?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "İnşaat & Mühendislik",
                                    items: ["Kazı hacmi hesaplama", "İlerleme takibi", "As-built dokümantasyon", "Proje planlama"]
                                },
                                {
                                    title: "Tarım & Arazi",
                                    items: ["Arazi ölçümü", "Sulama planlaması", "Bitki sağlığı analizi", "Verimlilik haritaları"]
                                },
                                {
                                    title: "Madencilik & Taş Ocakları",
                                    items: ["Stok hacim ölçümü", "Güvenlik denetimi", "Planlama ve optimizasyon", "Çevresel izleme"]
                                },
                            ].map((useCase, i) => (
                                <div key={i} className="bg-zinc-50 p-8 rounded-2xl">
                                    <h3 className="font-heading font-bold text-xl text-aerialix-dark mb-4">{useCase.title}</h3>
                                    <ul className="space-y-2">
                                        {useCase.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                                <Check className="w-4 h-4 text-[#c5f536] mt-1 flex-shrink-0" />
                                                <span className="text-zinc-600 text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="py-20 px-6 bg-aerialix-dark text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-heading font-bold text-4xl mb-6">
                            3D Haritalama Fiyatları
                        </h2>
                        <p className="text-white/70 mb-12 text-lg">
                            Proje büyüklüğü ve ihtiyaçlarınıza göre özel fiyat teklifi alın
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
                            <div className="grid md:grid-cols-3 gap-6 text-left">
                                <div>
                                    <p className="text-white/60 text-sm mb-2">Küçük Arazi (0-10 hektar)</p>
                                    <p className="text-2xl font-bold">₺3,500+</p>
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm mb-2">Orta Arazi (10-50 hektar)</p>
                                    <p className="text-2xl font-bold">₺7,500+</p>
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm mb-2">Büyük Proje (50+ hektar)</p>
                                    <p className="text-2xl font-bold">Özel Teklif</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm mb-8">
                            * Fiyatlar temel ortofoto harita içindir. 3D model, DEM/DSM, CAD çizim gibi ek çıktılar için ayrı ücretlendirme yapılır.
                        </p>
                        <Link href="/#contact">
                            <button className="bg-[#c5f536] text-aerialix-dark px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                                Teklif Al
                            </button>
                        </Link>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-aerialix-dark to-zinc-800 rounded-3xl p-12 text-center text-white">
                        <h2 className="font-heading font-bold text-4xl mb-6">
                            Projeniz İçin Hassas Harita ve Ölçüm
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                            Tekirdağ, Çorlu, Çerkezköy ve çevresinde profesyonel 3D haritalama hizmeti.
                            Size özel teklif almak için hemen iletişime geçin.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#contact">
                                <button className="bg-[#c5f536] text-aerialix-dark px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                                    Hemen Teklif Al
                                </button>
                            </Link>
                            <Link href="/">
                                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors border border-white/20">
                                    Ana Sayfaya Dön
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
