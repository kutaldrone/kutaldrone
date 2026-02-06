import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { Check, Heart, Video, Camera, Clock } from "lucide-react";
import Link from "next/link";
import ServicePageNav from "@/components/ServicePageNav";

export const metadata: Metadata = generateMetadata({
    title: "Düğün Drone Çekimi - Tekirdağ Profesyonel Hava Videografi",
    description:
        "Tekirdağ düğünleri için sinematik drone çekimi. Gelin arabası, düğün salonu hava çekimi, drone ile düğün videosu. Çorlu, Çerkezköy, Marmara Ereğlisi. Unutulmaz anılar!",
    keywords: [
        "tekirdağ düğün drone",
        "düğün hava çekimi tekirdağ",
        "gelin arabası drone",
        "çorlu düğün drone",
        "düğün videosu drone",
        "tekirdağ düğün fotoğrafçısı",
        "drone ile düğün çekimi",
        "süleymanpaşa düğün drone",
    ],
});

export default function DugunDronePage() {
    return (
        <>
            <ServicePageNav />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero */}
                <section className="relative bg-gradient-to-br from-pink-600 to-rose-700 text-white py-32 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Heart className="w-16 h-16 mx-auto mb-6" />
                        <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">
                            Düğün Drone Çekimi
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8">
                            Tekirdağ Düğünleri İçin Sinematik Hava Görüntüleri
                        </p>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            En özel gününüzü gökyüzünden ölümsüzleştirin. Çorlu, Çerkezköy ve Tekirdağ'ın tüm düğün salonlarına hizmet.
                        </p>
                    </div>
                </section>

                {/* Öne Çıkan Anlar */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-heading font-bold text-4xl text-center text-aerialix-dark mb-12">
                            Drone ile Yakalanan Özel Anlar
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Gelin Arabası Çekimi",
                                    desc: "Konvoy takibi, dinamik açılar",
                                    icon: "🚗",
                                },
                                {
                                    title: "Düğün Salonu Dış Çekim",
                                    desc: "Salon girişi, misafir kalabalığı",
                                    icon: "🏛️",
                                },
                                {
                                    title: "Çift Çekimleri",
                                    desc: "Romantik hava çekimleri",
                                    icon: "💑",
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center">
                                    <div className="text-6xl mb-4">{item.icon}</div>
                                    <h3 className="font-bold text-2xl text-aerialix-dark mb-3">{item.title}</h3>
                                    <p className="text-zinc-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Paket & Fiyat */}
                <section className="py-20 px-6 bg-zinc-50">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading font-bold text-4xl text-aerialix-dark mb-6">
                                Düğün Drone Paketi
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Gelin arabası takibi (10-15 dk)",
                                    "Düğün salonu dış görüntü",
                                    "Çift pozları (özel mekanlar)",
                                    "1-2 dakika düzenlenmiş klip",
                                    "Tüm ham görüntüler",
                                    "4K sinematik kalite",
                                    "Müzik + renk düzeltme",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl p-10">
                            <div className="text-center mb-8">
                                <div className="flex items-baseline justify-center gap-2 mb-2">
                                    <span className="text-5xl font-bold text-aerialix-dark">₺4,500</span>
                                    <span className="text-zinc-500">/düğün</span>
                                </div>
                                <p className="text-sm text-zinc-500">Mesafe ek ücretsiz (Tekirdağ içi)</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-zinc-700">
                                    <Video className="w-5 h-5 text-zinc-400" />
                                    <span>Sinematik 4K video</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-700">
                                    <Camera className="w-5 h-5 text-zinc-400" />
                                    <span>Profesyonel drone pilotu</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-700">
                                    <Clock className="w-5 h-5 text-zinc-400" />
                                    <span>3-5 gün teslimat</span>
                                </div>
                            </div>

                            <Link
                                href="/#contact"
                                className="block text-center bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                            >
                                Rezervasyon Yap
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Bölgeler */}
                <section className="py-20 px-6 bg-aerialix-dark text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-heading font-bold text-4xl mb-8">Hizmet Verdiğimiz Bölgeler</h2>
                        <p className="text-white/70 mb-8">Tekirdağ ve çevresindeki tüm düğün mekanlarına geliyoruz</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
                            {["Tekirdağ Merkez", "Süleymanpaşa", "Çorlu", "Çerkezköy", "Marmara Ereğlisi", "Saray", "Hayrabolu", "Malkara"].map(
                                (bolge, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg py-3">
                                        {bolge}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-12">
                        <h2 className="font-heading font-bold text-4xl text-aerialix-dark mb-6">
                            Düğününüzü Gökyüzünden Ölümsüzleştirin
                        </h2>
                        <p className="text-xl text-zinc-700 mb-8">
                            Erken rezervasyon için %10 indirim!
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-block bg-aerialix-dark text-white px-12 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                        >
                            Hemen İletişime Geç
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
