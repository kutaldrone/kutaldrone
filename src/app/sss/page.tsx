"use client";

import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import ServicePageNav from "@/components/ServicePageNav";

// Note: metadata export doesn't work in client components

export default function FAQPage() {
    const faqs = [
        {
            question: "Hangi bölgelere hizmet veriyorsunuz?",
            answer: "Tekirdağ Süleymanpaşa merkezli olmakla birlikte, Trakya'nın tamamına ve İstanbul'a hizmet veriyoruz. Diğer bölgeler için lütfen bizimle iletişime geçin.",
        },
        {
            question: "Fiyatlandırma nasıl çalışıyor?",
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
            question: "Hava koşulları çekimi etkiler mi?",
            answer: "Evet, güvenlik ve görüntü kalitesi için uygun hava koşullarında uçuş yapıyoruz. Olumsuz hava durumunda çekimi yeniden planlıyoruz.",
        },
        {
            question: "İzin belgesi gerekli mi?",
            answer: "Bazı bölgelerde uçuş izni gerekebilir. Gerekli tüm izin işlemlerini sizin adınıza hallederiz.",
        },
        {
            question: "Revizyon hakkım var mı?",
            answer: "Evet! Standart ve Premium paketlerimizde sınırsız revizyon hakkı bulunmaktadır. Temel pakette 2 revizyon hakkı vardır.",
        },
        {
            question: "Ödeme nasıl yapılır?",
            answer: "Projenin %50'si peşin, kalan %50'si teslimat öncesi ödenir. Havale/EFT veya kredi kartı ile ödeme kabul ediyoruz.",
        },
    ];

    return (
        <>
            <ServicePageNav />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero */}
                <section className="bg-gradient-to-br from-aerialix-dark to-zinc-800 text-white py-24">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                            Sık Sorulan Sorular
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
                            {faqs.map((faq, index) => (
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
                            ))}
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
