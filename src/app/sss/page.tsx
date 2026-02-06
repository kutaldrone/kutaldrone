import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = generateMetadata({
    title: "Sık Sorulan Sorular",
    description: "Drone çekimleri, fiyatlandırma, hizmet bölgeleri ve teslimat süreleri hakkında merak edilenler.",
    keywords: ["drone çekim fiyatları", "drone hizmetleri sss", "tekirdağ drone faq"],
});

export default function FAQPage() {
    const faqs = [
        {
            question: "Hangi bölgelere hizmet veriyorsunuz?",
            answer: "Tekirdağ Süleymanpaşa merkezli olmakla birlikte, Trakya'nın tamamına ve İstanbul'a hizmet veriyoruz. Diğer bölgeler için lütfen bizimle iletişime geçin.",
        },
        {
            question: "Fiyatland ırma nasıl çalışıyor?",
            answer: "Fiyatlandırma, projenizin kapsamına, süresine ve özel gereksinimlerine göre değişir. Her proje için özelleştirilmiş teklif hazırlıyoruz. Ücretsiz ön görüşme için bizi arayın.",
        },
        {
            question: "Teslimat süresi ne kadar?",
            answer: "Standart çekimler için 3-5 iş günü içinde ham görüntüleri, 7-10 iş günü içinde edit edilmiş son halini teslim ediyoruz. Acil projeler için hızlandırılmış teslimat seçeneğimiz mevcuttur.",
        },
        {
            question: "Hangi ekipmanları kullanıyorsunuz?",
            answer: "Son teknoloji DJI drone'lar ve profesyonel kamera ekipmanları kullanıyoruz. 4K ve 6K çözünürlükte çekim yapabiliyoruz.",
        },
        {
            question: "Yasal izinler nasıl alınıyor?",
            answer: "Gerekli tüm SHGM (Sivil Havacılık Genel Müdürlüğü) izinlerini biz alıyoruz. Pilotlarımız sertifikalıdır ve tüm yasal gerekliliklere uygun çalışıyoruz.",
        },
        {
            question: "Hava koşulları çekimi etkiler mi?",
            answer: "Evet, güvenlik önceliğimizdir. Rüzgar, yağmur veya sis gibi olumsuz hava koşullarında çekim yapmıyoruz. Bu durumda çekim tarihi yeniden planlanır.",
        },
        {
            question: "Ham görüntüleri de teslim ediyor musunuz?",
            answer: "Evet, talep üzerine tüm ham görüntüleri de teslim ediyoruz. Paket fiyatlarımıza dahildir.",
        },
        {
            question: "Revizyon hakkım var mı?",
            answer: "Evet, edit sürecinde 2 revizyon hakkınız vardır. Ek revizyonlar için ayrı ücretlendirme yapılır.",
        },
        {
            question: "Gece çekimi yapıyor musunuz?",
            answer: "Evet, özel izinlerle gece çekimi yapıyoruz. Gece çekimleri için özel ekipman ve planlama gerektiğinden ek ücret uygulanır.",
        },
        {
            question: "Canlı yayın hizmeti veriyor musunuz?",
            answer: "Evet, etkinlikler ve özel organizasyonlar için havadan canlı yayın hizmeti sunuyoruz.",
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative bg-aerialix-dark text-white py-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                        Sık Sorulan Sorular
                    </h1>
                    <p className="text-xl text-white/80">
                        Merak ettiklerinizin cevapları burada
                    </p>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group bg-zinc-50 rounded-xl overflow-hidden"
                            >
                                <summary className="flex justify-between items-center cursor-pointer p-6 font-bold text-lg hover:bg-zinc-100 transition-colors">
                                    {faq.question}
                                    <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                                </summary>
                                <div className="px-6 pb-6 text-zinc-600">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center bg-aerialix-dark text-white rounded-2xl p-8">
                        <h3 className="font-heading font-bold text-2xl mb-4">
                            Sorunuz hala cevapsız kaldı mı?
                        </h3>
                        <p className="mb-6 text-white/80">
                            Bize ulaşın, size yardımcı olmaktan mutluluk duyarız.
                        </p>
                        <a
                            href="/#contact"
                            className="inline-block bg-white text-aerialix-dark px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                        >
                            İletişime Geç
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
