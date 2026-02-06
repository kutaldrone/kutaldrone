import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { Check, Building2, Camera, Film, MapPin, Star } from "lucide-react";
import Link from "next/link";
import ServicePageNav from "@/components/ServicePageNav";

export const metadata: Metadata = generateMetadata({
    title: "İşletme Tanıtım Filmi - Tekirdağ Drone Çekimi",
    description:
        "Tekirdağ'da işletmeniz için profesyonel tanıtım filmi. Restoran, otel, fabrika, kafe için hava çekimi ile lokasyon ve çevre tanıtımı. Çorlu, Çerkezköy kurumsal drone video.",
    keywords: [
        "tekirdağ tanıtım filmi",
        "işletme tanıtım videosu",
        "restoran drone çekimi",
        "otel tanıtım filmi tekirdağ",
        "fabrika hava çekimi",
        "kurumsal drone video",
        "lokasyon tanıtımı drone",
        "çorlu tanıtım filmi",
    ],
});

export default function IsletmeTanitimPage() {
    return (
        <>
            <ServicePageNav />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero */}
                <section className="relative bg-gradient-to-br from-orange-600 to-red-600 text-white py-32 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Building2 className="w-16 h-16 mx-auto mb-6" />
                        <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">
                            İşletme Tanıtım Filmi
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8">
                            Tekirdağ'da İşletmenizi Gökyüzünden Tanıtın
                        </p>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Restoran, otel, fabrika, kafe ve tüm işletmeler için profesyonel drone çekimi ile
                            lokasyon, çevre ve tesislerinizi etkili tanıtım filmleri. Müşterilerinize farklı bir
                            perspektif sunun!
                        </p>
                    </div>
                </section>

                {/* Neden Drone ile Tanıtım? */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-heading font-bold text-4xl text-center text-aerialix-dark mb-12">
                            Neden Hava Çekimi ile Tanıtım?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <MapPin className="w-8 h-8" />,
                                    title: "Lokasyon Vurgusu",
                                    desc: "İşletmenizin konumu, çevresi ve ulaşım kolaylığını gösterin",
                                },
                                {
                                    icon: <Building2 className="w-8 h-8" />,
                                    title: "Tesis Büyüklüğü",
                                    desc: "Fabrika, otel, restoran alanınızın genişliğini etkileyici şekilde sunun",
                                },
                                {
                                    icon: <Star className="w-8 h-8" />,
                                    title: "Profesyonel İmaj",
                                    desc: "Rakiplerinizden ayrılın, premium marka imajı oluşturun",
                                },
                                {
                                    icon: <Camera className="w-8 h-8" />,
                                    title: "Sosyal Medya",
                                    desc: "Instagram, Facebook, YouTube için dikkat çeken içerik",
                                },
                                {
                                    icon: <Film className="w-8 h-8" />,
                                    title: "Web Sitesi Kullanımı",
                                    desc: "Ana sayfanızda ziyaretçileri etkileyin",
                                },
                                {
                                    icon: <Check className="w-8 h-8" />,
                                    title: "Çok Amaçlı",
                                    desc: "Reklam, katalog, sunum - her yerde kullanın",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-orange-600 mb-4">{item.icon}</div>
                                    <h3 className="font-bold text-xl text-aerialix-dark mb-2">{item.title}</h3>
                                    <p className="text-zinc-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Hangi İşletmelere? */}
                <section className="py-20 px-6 bg-zinc-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-heading font-bold text-4xl text-center text-aerialix-dark mb-12">
                            Hangi İşletmelere Hizmet Veriyoruz?
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { emoji: "🍽️", title: "Restoran & Kafe", desc: "Mekan atmosferi, teras, bahçe" },
                                { emoji: "🏨", title: "Otel & Tatil Köyü", desc: "Havuz, plaj, genel görünüm" },
                                { emoji: "🏭", title: "Fabrika & Üretim", desc: "Tesis büyüklüğü, modern teknoloji" },
                                { emoji: "🏢", title: "Ofis & Plaza", desc: "Kurumsal kimlik, modern bina" },
                                { emoji: "🏪", title: "AVM & Perakende", desc: "Otopark, erişim, iç mekan dış çekim" },
                                { emoji: "⚽", title: "Spor Tesisi", desc: "Saha, kort, açık alan" },
                                { emoji: "🏗️", title: "İnşaat Şirketi", desc: "Tamamlanan projeler" },
                                { emoji: "🌳", title: "Tarım & Çiftlik", desc: "Arazi, sera, hayvancılık" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white border-2 border-zinc-200 rounded-2xl p-6 text-center hover:border-orange-500 transition-colors"
                                >
                                    <div className="text-5xl mb-3">{item.emoji}</div>
                                    <h3 className="font-bold text-lg text-aerialix-dark mb-2">{item.title}</h3>
                                    <p className="text-sm text-zinc-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Paket & Fiyat */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading font-bold text-4xl text-aerialix-dark mb-6">
                                Tanıtım Filmi Paketi
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Lokasyon keşif uçuşu",
                                    "Dış mekan hava çekimleri",
                                    "Çevre ve konum vurgusu",
                                    "Giriş, otopark, bahçe detayları",
                                    "1-2 dakika kurumsal tanıtım videosu",
                                    "Profesyonel müzik + kurgu",
                                    "4K/6K sinematik kalite",
                                    "30-60 saniye sosyal medya versiyonu",
                                    "3-5 gün teslimat",
                                    "Ham görüntüler dahil",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-orange-200">
                            <div className="text-center mb-8">
                                <div className="flex items-baseline justify-center gap-2 mb-2">
                                    <span className="text-5xl font-bold text-aerialix-dark">₺6,500</span>
                                    <span className="text-zinc-500">/proje</span>
                                </div>
                                <p className="text-sm text-zinc-500">KDV Dahil</p>
                            </div>

                            <div className="space-y-6 mb-8">
                                <div className="bg-orange-50 rounded-xl p-4">
                                    <h4 className="font-bold text-aerialix-dark mb-2">📹 Uzun Versiyon</h4>
                                    <p className="text-sm text-zinc-700">3-5 dakika detaylı tanıtım +₺3,000</p>
                                </div>
                                <div className="bg-red-50 rounded-xl p-4">
                                    <h4 className="font-bold text-aerialix-dark mb-2">🎬 İç Mekan Eklentisi</h4>
                                    <p className="text-sm text-zinc-700">
                                        Drone ile iç mekan geçiş çekimleri +₺2,500
                                    </p>
                                </div>
                                <div className="bg-yellow-50 rounded-xl p-4">
                                    <h4 className="font-bold text-aerialix-dark mb-2">🌍 Çoklu Dil</h4>
                                    <p className="text-sm text-zinc-700">İngilizce, Almanca altyazı +₺1,500</p>
                                </div>
                            </div>

                            <Link
                                href="/#contact"
                                className="block text-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                            >
                                Ücretsiz Görüşme
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Örnek Kullanım Alanları */}
                <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-red-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-heading font-bold text-4xl text-center text-aerialix-dark mb-8">
                            Tanıtım Videonuzu Nerede Kullanabilirsiniz?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Dijital Pazarlama",
                                    items: [
                                        "Web sitesi ana sayfa",
                                        "Google My Business",
                                        "Instagram & Facebook reklamları",
                                        "YouTube kanalı",
                                    ],
                                },
                                {
                                    title: "Satış & Sunum",
                                    items: [
                                        "Müşteri sunumları",
                                        "Fuar standı ekranları",
                                        "E-posta kampanyaları",
                                        "Katalog & broşür QR kodu",
                                    ],
                                },
                                {
                                    title: "İşe Alım",
                                    items: [
                                        "Kariyer sayfası",
                                        "LinkedIn şirket sayfası",
                                        "İş ilanları",
                                        "Çalışan oryantasyonu",
                                    ],
                                },
                                {
                                    title: "Kurumsal İletişim",
                                    items: [
                                        "Yıllık raporlar",
                                        "Basın bültenleri",
                                        "Yatırımcı sunumları",
                                        "Şirket etkinlikleri",
                                    ],
                                },
                            ].map((section, i) => (
                                <div key={i} className="bg-white rounded-2xl p-8 shadow-md">
                                    <h3 className="font-bold text-2xl text-aerialix-dark mb-6">{section.title}</h3>
                                    <ul className="space-y-3">
                                        {section.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                                                <span className="text-zinc-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
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
                        <p className="text-white/70 mt-8">Tüm Türkiye'ye hizmet veriyoruz</p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-12">
                        <h2 className="font-heading font-bold text-4xl text-aerialix-dark mb-6">
                            İşletmenizi Farklılaştırın
                        </h2>
                        <p className="text-xl text-zinc-700 mb-8">
                            Profesyonel drone çekimi ile rakiplerinizden bir adım önde olun
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-block bg-aerialix-dark text-white px-12 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                        >
                            Ücretsiz Teklif Alın
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
