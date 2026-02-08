import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import ServicePageNav from "@/components/ServicePageNav";
import { getFAQs } from "@/lib/faq";

export const metadata: Metadata = {
    title: "Sıkça Sorulan Sorular | Kutal Drone",
    description: "Drone çekimi, fiyatlandırma, teslimat süreleri ve yasal izinler hakkında en çok merak edilen soruların cevapları.",
};

export default function FAQPage() {
    const faqs = getFAQs();

    // FAQ Schema Markup
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <ServicePageNav />
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main className="min-h-screen bg-white pt-20">
                {/* Hero */}
                <section className="bg-gradient-to-br from-aerialix-dark to-zinc-800 text-white py-24">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                            Sıkça Sorulan Sorular
                        </h1>
                        <p className="text-xl text-white/80">
                            Merak ettiklerinizin yanıtları burada. Sorunuz yoksa{" "}
                            <Link href="/#contact" className="underline hover:text-[#c5f536]">
                                bize ulaşın
                            </Link>
                            .
                        </p>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-20">
                    <div className="max-w-3xl mx-auto px-6">
                        <div className="space-y-4">
                            {faqs.length > 0 ? (
                                faqs.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-zinc-50 rounded-xl overflow-hidden"
                                    >
                                        <summary className="flex justify-between items-center cursor-pointer p-6 font-bold text-lg hover:bg-zinc-100 transition-colors">
                                            {faq.question}
                                            <ChevronDown className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <div className="px-6 pb-6 text-zinc-600">
                                            {faq.answer}
                                        </div>
                                    </details>
                                ))
                            ) : (
                                <p className="text-center text-zinc-500">
                                    Henüz SSS eklenmemiş. Lütfen daha sonra tekrar deneyin veya bizimle iletişime geçin.
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-zinc-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="font-heading font-bold text-4xl text-aerialix-dark mb-4">
                            Sorunuzun Cevabını Bulamadınız mı?
                        </h2>
                        <p className="text-xl text-zinc-600 mb-8">
                            Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız!
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-block bg-aerialix-dark text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-[#c5f536] hover:text-aerialix-dark transition-all"
                        >
                            İletişime Geçin
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
