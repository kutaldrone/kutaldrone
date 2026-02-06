import { Metadata } from "next";
import { generateMetadata, COMPANY } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
    title: "Gizlilik Politikası",
    description: "Kutal Drone gizlilik politikası, KVKK uyumlu veri koruma ve kullanım şartları.",
    noIndex: true,
});

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative bg-aerialix-dark text-white py-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                        Gizlilik Politikası
                    </h1>
                    <p className="text-xl text-white/80">
                        Verilerinizin güvenliği önceliğimizdir
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 prose prose-lg max-w-none">
                    <p className="text-sm text-zinc-500 mb-8">Son Güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">1. Genel Bilgiler</h2>
                    <p className="text-zinc-600 mb-4">
                        {COMPANY.name} olarak, kişisel verilerinizin güvenliğine önem veriyor ve 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında sorumluluklarımızın bilincindeyiz.
                    </p>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">2. Toplanan Veriler</h2>
                    <p className="text-zinc-600 mb-2">Web sitemiz üzerinden aşağıdaki veriler toplanabilir:</p>
                    <ul className="list-disc ml-6 text-zinc-600 mb-4">
                        <li>İsim ve iletişim bilgileri (telefon, e-posta)</li>
                        <li>Proje detayları ve hizmet talepleri</li>
                        <li>Çerez verileri</li>
                        <li>IP adresi ve tarayıcı bilgileri</li>
                    </ul>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">3. Verilerin Kullanım Amaçları</h2>
                    <p className="text-zinc-600 mb-2">Toplanan veriler:</p>
                    <ul className="list-disc ml-6 text-zinc-600 mb-4">
                        <li>Size en iyi hizmeti sunmak</li>
                        <li>Proje tekliflerini hazırlamak</li>
                        <li>İletişim kurmak</li>
                        <li>Yasal yükümlülükleri yerine getirmek</li>
                    </ul>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">4. Çerezler (Cookies)</h2>
                    <p className="text-zinc-600 mb-4">
                        Web sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için çerezler kullanmaktadır. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
                    </p>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">5. Veri Güvenliği</h2>
                    <p className="text-zinc-600 mb-4">
                        Kişisel verileriniz, yetkisiz erişim ve kullanıma karşı endüstri standardı güvenlik önlemleriyle korunmaktadır.
                    </p>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">6. KVKK Hakl arınız</h2>
                    <p className="text-zinc-600 mb-2">KVKK kapsamında şu haklara sahipsiniz:</p>
                    <ul className="list-disc ml-6 text-zinc-600 mb-4">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                        <li>Kişisel verilerinize erişme</li>
                        <li>işlenme amacını öğrenme</li>
                        <li>Düzeltilmesini veya silinmesini talep etme</li>
                    </ul>

                    <h2 className="font-heading font-bold text-2xl text-aerialix-dark mt-8 mb-4">7. İletişim</h2>
                    <p className="text-zinc-600 mb-4">
                        Gizlilik politikamız hakkında sorularınız için:{" "}
                        <a href={`tel:${COMPANY.phone}`} className="text-aerialix-dark hover:underline">
                            {COMPANY.phone}
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
}
