import { Metadata } from "next";
import { generateMetadata, COMPANY, generateLocalBusinessSchema } from "@/lib/metadata";
import { MapPin, Phone, Users, Award } from "lucide-react";

export const metadata: Metadata = generateMetadata({
    title: "Hakkımızda",
    description: `${COMPANY.name} - Tekirdağ Süleymanpaşa merkezli profesyonel drone hizmetleri. Ekibimiz, ekipmanlarımız ve deneyimimiz hakkında bilgi edinin.`,
    keywords: ["kutal drone hakkında", "drone ekibi", "tekirdağ drone", "profesyonel drone pilot"],
});

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateLocalBusinessSchema()),
                }}
            />

            <main className="min-h-screen bg-white">
                {/* Hero */}
                <section className="relative bg-aerialix-dark text-white py-32">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                            Hakkımızda
                        </h1>
                        <p className="text-xl text-white/80">
                            Gökyüzünden İnovasyon: Tekirdağ'ın Drone Çözüm Ortağı
                        </p>
                    </div>
                </section>

                {/* Story */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-heading font-bold text-3xl text-aerialix-dark mb-6">
                                Hikayemiz
                            </h2>
                            <p className="text-zinc-600 leading-relaxed mb-4">
                                Kutal Drone, Tekirdağ Süleymanpaşa merkezinden Trakya'nın tamamına profesyonel drone hizmetleri sunan önde gelen bir teknoloji firmasıdır. Havacılığa olan tutkumuz ve teknolojiye olan inancımızla, müşterilerimize en kaliteli hava çekim ve haritalama çözümlerini sunuyoruz.
                            </p>
                            <p className="text-zinc-600 leading-relaxed mb-4">
                                Deneyimli pilot kadromuz ve son teknoloji ekipmanlarımızla, sinematik reklam filmlerinden endüstriyel haritalama projelerine kadar geniş bir yelpazede hizmet veriyoruz.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 bg-zinc-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-aerialix-dark rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-heading font-bold text-xl mb-2">Deneyim</h3>
                                <p className="text-zinc-600">100+ başarılı proje</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-aerialix-dark rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-heading font-bold text-xl mb-2">Uzman Ekip</h3>
                                <p className="text-zinc-600">Sertifikalı pilotlar</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-aerialix-dark rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-heading font-bold text-xl mb-2">Yerel</h3>
                                <p className="text-zinc-600">Tekirdağ merkezli</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-aerialix-dark rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-heading font-bold text-xl mb-2">7/24 Destek</h3>
                                <p className="text-zinc-600">Her zaman ulaşılabilir</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Info */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="font-heading font-bold text-3xl text-aerialix-dark mb-8 text-center">
                            İletişim Bilgilerimiz
                        </h2>
                        <div className="bg-zinc-50 rounded-2xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Adres</h3>
                                    <p className="text-zinc-600 text-sm">
                                        {COMPANY.address.street}<br />
                                        {COMPANY.address.zip} {COMPANY.address.city}/{COMPANY.address.state}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Telefon</h3>
                                    <a href={`tel:${COMPANY.phone}`} className="text-zinc-600 hover:text-aerialix-dark">
                                        {COMPANY.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Google Maps */}
                            <div className="mt-6">
                                <iframe
                                    src={`https://www.google.com/maps?q=${COMPANY.coordinates.lat},${COMPANY.coordinates.lng}&hl=tr&z=15&output=embed`}
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
