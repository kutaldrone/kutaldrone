import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { Check, Calendar, Users, Trophy, Music } from "lucide-react";
import Link from "next/link";
import ServicePageNav from "@/components/ServicePageNav";

export const metadata: Metadata = generateMetadata({
    title: "Etkinlik Drone Çekimi - Tekirdağ Profesyonel Hava Görüntüleme",
    description:
        "Tekirdağ etkinlikleri için profesyonel drone çekimi. Festival, konser, spor, açılış töreni hava fotoğrafları. Çorlu, Çerkezköy etkinlik drone videosu. 4K canlı yayın.",
    keywords: [
        "tekirdağ etkinlik drone",
        "festival hava çekimi",
        "konser drone videosu",
        "çorlu etkinlik drone",
        "spor drone çekimi",
        "açılış töreni drone",
        "canlı yayın drone",
        "etkinlik hava fotoğrafı",
    ],
});

export default function EtkinlikDronePage() {
    return (
        <>
            <ServicePageNav />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero */}
                <section className="relative bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-32 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Calendar className="w-16 h-16 mx-auto mb-6" />
                        <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">
                            Etkinlik Drone Çekimi
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8">
                            Tekirdağ Etkinliklerini Gökyüzünden Belgeleyin
                        </p>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Festival, konser, açılış töreni, spor, kurumsal ve özel etkinlikleriniz için dinamik hava çekimleri. Çorlu, Çerkezköy ve tüm Tekirdağ'da.
                        </p>
                    </div>
                </section>

                {/* Etkinlik Türleri */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-heading font-bold text-4xl text-center text-aerialix-dark mb-12">
                            Hangi Etkinlikleri Çekiyoruz?
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: <Music className="w-10 h-10" />, title: "Festival & Konser", desc: "Sahne ve kalabalık görüntüsü" },
                                { icon: <Trophy className="w-10 h-10" />, title: "Spor Etkinlikleri", desc: "Maraton, maç, yarış çekimleri" },
                                { icon: <Users className="w-10 h-10" />, title: "Kurumsal", desc: "Açılış töreni, lansman" },
                                { icon: <Calendar className="w-10 h-10" />, title: "Özel Etkinlikler", desc: "Şenlik, fuar, kampanya" },
                            ].map((item, i) => (
                                <div key={i} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                                    <div className="text-purple-600 mb-4 flex justify-center">{item.icon}</div>
                                    <h3 className="font-bold text-xl text-aerialix-dark mb-2">{item.title}</h3>
                                    <p className="text-zinc-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Paket & Özellikler */}
                <section className="py-20 px-6 bg-zinc-50">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading font-bold text-4xl text-aerialix-dark mb-6">
                                Etkinlik Drone Paketi
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Etkinlik öncesi keşif uçuşu",
                                    "Canlı drone yayını (opsiyonel)",
                                    "Geniş açı kalabalık çekimleri",
                                    "Dinamik geçiş sahneleri",
                                    "1-3 dakika highlight videosu",
                                    "50+ fotoğraf",
                                    "4K/6K video kalitesi",
                                    "2-3 gün teslimat",
                                    "Sosyal medya formatları",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl p-10">
                            <div className="text-center mb-8">
                                <div className="flex items-baseline justify-center gap-2 mb-2">
                                    <span className="text-5xl font-bold text-aerialix-dark">₺5,000</span>
                                    <span className="text-zinc-500">/gün</span>
                                </div>
                                <p className="text-sm text-zinc-500">Yarım gün: ₺3,000</p>
                            </div>

                            <div className="space-y-6 mb-8">
                                <div className="bg-purple-50 rounded-xl p-4">
                                    <h4 className="font-bold text-aerialix-dark mb-2">🎥 Canlı Yayın</h4>
                                    <p className="text-sm text-zinc-700">YouTube, Facebook, sosyal medya canlı drone yayını +₺2,000</p>
                                </div>
                                <div className="bg-indigo-50 rounded-xl p-4">
                                    <h4 className="font-bold text-aerialix-dark mb-2">📹 Kurumsal Video</h4>
                                    <p className="text-sm text-zinc-700">3-5 dakika profesyonel kurgu +₺3,000</p>
                                </div>
                            </div>

                            <Link
                                href="/#contact"
                                className="block text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                            >
                                Etkinliğiniz İçin Teklif Alın
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Referanslar */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="font-heading font-bold text-4xl text-aerialix-dark mb-8">
                            Önceki Etkinliklerimiz
                        </h2>
                        <p className="text-xl text-zinc-600 mb-12">
                            Festival, konser, kurumsal ve spor etkinliklerinde deneyimimiz var
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {["50+ Etkinlik", "100,000+ İzleyici", "4K Yayın", "7/24 Destek"].map((stat, i) => (
                                <div key={i} className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-6">
                                    <p className="text-3xl font-bold text-purple-600 mb-2">{stat.split(" ")[0]}</p>
                                    <p className="text-zinc-700">{stat.split(" ").slice(1).join(" ")}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bölgeler */}
                <section className="py-20 px-6 bg-aerialix-dark text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-heading font-bold text-4xl mb-8">Hizmet Verdiğimiz Bölgeler</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
                            {["Tekirdağ Merkez", "Süleymanpaşa", "Çorlu", "Çerkezköy", "Marmara Ereğlisi", "Saray"].map(
                                (bolge, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg py-3">
                                        {bolge}
                                    </div>
                                )
                            )}
                        </div>
                        <p className="text-white/70 mt-8">Tüm Türkiye'deki büyük etkinlikler için özel teklif</p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl p-12">
                        <h2 className="font-heading font-bold text-4xl text-aerialix-dark mb-6">
                            Etkinliğinizi Farklılaştırın
                        </h2>
                        <p className="text-xl text-zinc-700 mb-8">
                            Profesyonel drone çekimi ile etkinliğinizi kayıt altına alın
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-block bg-aerialix-dark text-white px-12 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                        >
                            Hemen Görüşelim
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
