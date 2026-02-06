import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { Check, Home, Camera, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ServicePageNav from "@/components/ServicePageNav";

export const metadata: Metadata = generateMetadata({
    title: "Emlak Drone Çekimi - Tekirdağ Profesyonel Hava Fotoğrafçılığı",
    description:
        "Tekirdağ, Çorlu, Çerkezköy'de emlak satışı için profesyonel drone çekimi. Villa, arsa, daire hava fotoğrafları. 4K video, 360° görüntü. Satışınızı %40 hızlandırın!",
    keywords: [
        "tekirdağ emlak drone",
        "emlak hava fotoğrafı tekirdağ",
        "villa drone çekimi tekirdağ",
        "arsa drone fotoğraf",
        "çorlu emlak drone",
        "çerkezköy gayrimenkul fotoğraf",
        "emlak satış fotoğrafı",
        "drone ile ev çekimi",
    ],
});

export default function EmlakDronePage() {
    return (
        <>
            <ServicePageNav />
            <main className="min-h-screen bg-white pt-20">{/* pt-20 for fixed nav */}
                {/* Hero */}
                <section className="relative bg-aerialix-dark text-white py-32 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">
                            Emlak Drone Çekimi
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 mb-8">
                            Tekirdağ'da Gayrimenkul Satışını Hızlandıran Hava Fotoğrafçılığı
                        </p>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto">
                            Villa, arsa, daire ve ticari gayrimenkulleriniz için profesyonel drone çekimi.
                            Çorlu, Çerkezköy, Süleymanpaşa ve çevresinde hizmet.
                        </p>
                    </div>
                </section>

                {/* Problem & Solution */}
                <section className="py-20 px-6 bg-zinc-50">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-heading font-bold text-3xl text-aerialix-dark mb-6">
                                Neden Drone ile Emlak Çekimi?
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Satış süresi %40 azalır",
                                    "Potansiyel alıcı sayısı 3x artar",
                                    "Çevre ve konumu vurgular",
                                    "Profesyonel imaj",
                                    "Sosyal medyada daha fazla ilgi",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-6 h-6 text-[#c5f536] flex-shrink-0 mt-1" />
                                        <span className="text-lg text-zinc-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="font-heading font-bold text-2xl text-aerialix-dark mb-6">
                                Paket İçeriği
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Camera className="w-5 h-5 text-zinc-400" />
                                    <span>20-40 yüksek çözünürlüklü fotoğraf</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Camera className="w-5 h-5 text-zinc-400" />
                                    <span>1-2 dakika tanıtım videosu (4K)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-zinc-400" />
                                    <span>360° panoramik görüntü</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-zinc-400" />
                                    <span>24-48 saat teslimat</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-zinc-200">
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-4xl font-bold text-aerialix-dark">₺3,500</span>
                                    <span className="text-zinc-500">/proje</span>
                                </div>
                                <Link
                                    href="/#contact"
                                    className="block text-center bg-aerialix-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-[#c5f536] hover:text-aerialix-dark transition-all"
                                >
                                    Ücretsiz Teklif Al
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hizmet Verdiğimiz İlan Türleri */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-heading font-bold text-4xl text-center text-aerialix-dark mb-12">
                            Hangi Gayrimenkulleri Çekiyoruz?
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: "🏠", title: "Villa & Müstakil Ev", desc: "Bahçe ve çevre görünümü" },
                                { icon: "🏗️", title: "Arsa & Tarla", desc: "Alan ölçümü ve sınırlar" },
                                { icon: "🏢", title: "Daire & Rezidans", desc: "Bina ve konum vurgusu" },
                                { icon: "🏭", title: "Ticari Gayrimenkul", desc: "İşyeri, depo, fabrika" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white border-2 border-zinc-200 rounded-2xl p-6 text-center hover:border-[#c5f536] transition-colors">
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                    <h3 className="font-bold text-xl text-aerialix-dark mb-2">{item.title}</h3>
                                    <p className="text-zinc-600">{item.desc}</p>
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
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#c5f536] to-[#a8d42e] rounded-3xl p-12">
                        <h2 className="font-heading font-bold text-4xl text-aerialix-dark mb-6">
                            Emlak İlanınızı Bir Üst Seviyeye Taşıyın
                        </h2>
                        <p className="text-xl text-aerialix-dark/80 mb-8">
                            Ücretsiz ön görüşme için hemen iletişime geçin
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-block bg-aerialix-dark text-white px-12 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                        >
                            Teklif İste
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
