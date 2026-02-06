import { Metadata } from "next";
import { generateMetadata, COMPANY } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
    title: "Kullanım Şartları",
    description: "Kutal Drone web sitesi ve hizmetleri kullanım şartları.",
    noIndex: true,
});

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative bg-aerialix-dark text-white py-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                        Kullanım Şartları
                    </h1>
                    <p className="text-xl text-white/80">
                        Web sitesi ve hizmetlerimizin kullanım koşulları
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 prose prose-lg max-w-none">
                    <p className="text-sm text-zinc-500 mb-8">Son Güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">1. Genel Şartlar</h2>
                    <p className="text-zinc-600 mb-4">
                        Bu web sitesini kullanarak, aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız, lütfen siteyi kullanmayın.
                    </p>

                    <h2 className="font-heading font-bold text-2xl text-aerialix- dark mt-8 mb-4">2. Hizmetler</h2>
                    <p className="text-zinc-600 mb-4">
                        {COMPANY.name}, profesyonel drone çekim, haritalama ve video prodüksiyon hizmetleri sunmaktadır. Hizmet detayları ve fiyatlandırma, proje bazında değişiklik gösterebilir.
                    </p>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">3. Fikri Mülkiyet</h2>
                    <p className="text-zinc-600 mb-4">
                        Web sitesindeki tüm içerik, görseller ve videolar {COMPANY.name}'e aittir. İzin alınmadan kullanılamaz, kopyalanamaz veya dağıtılamaz.
                    </p>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">4. Teslimat ve İade</h2>
                    <p className="text-zinc-600 mb-4">
                        Dijital içerikler (video, fotoğraf) e-posta veya bulut depolama üzerinden teslim edilir. Hizmet tamamlandıktan sonra iade kabul edilmez.
                    </p>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">5. Sorumluluk Sınırı</h2>
                    <p className="text-zinc-600 mb-4">
                        {COMPANY.name}, teknik arızalar, hava koşulları veya mücbir sebepler nedeniyle oluşabilecek gecikmelerden sorumlu değildir.
                    </p>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">6. Yasal Uyum</h2>
                    <p className="text-zinc-600 mb-4">
                        Tüm drone operasyonları SHGM (Sivil Havacılık Genel Müdürlüğü) mevzuatına uygun olarak gerçekleştirilir.
                    </p>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">7. Değişiklikler</h2>
                    <p className="text-zinc-600 mb-4">
                        {COMPANY.name}, bu şartları önceden haber vermeksizin değiştirme hakkını saklı tutar.
                    </p>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">8. İletişim</h2>
                    <p className="text-zinc-600 mb-4">
                        Kullanım şartları hakkında sorularınız için:{" "}
                        <a href={`tel:${COMPANY.phone}`} className="text-aerialix-dark hover:underline">
                            {COMPANY.phone}
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
}
