import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrakyaMap } from "./TrakyaMap";

const LOCATIONS = [
    { name: "Tekirdağ Merkez", slug: "/bolge/tekirdag-drone-cekimi" },
    { name: "Süleymanpaşa", slug: "/bolge/suleymanpasa-drone-cekimi" },
    { name: "Çorlu", slug: "/bolge/corlu-drone-cekimi" },
    { name: "Çerkezköy", slug: "/bolge/cerkezkoy-drone" },
    { name: "Yeniçiftlik", slug: "/bolge/yeniciftlik-drone" },
    { name: "Marmaraereğlisi", slug: "/bolge/marmaraereglisi-drone" },
    { name: "Muratlı", slug: "/bolge/muratli-drone" },
    { name: "Malkara", slug: "/bolge/malkara-drone" },
    { name: "Trakya Genel", slug: "/bolge/trakya-drone-cekimi" },
];

export default function LocationsSection() {
    return (
        <section className="py-24 bg-[#0a0c10] border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5f536]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-[#c5f536] font-bold tracking-wider uppercase text-sm block mb-2">HİZMET AĞIMIZ</span>
                        <h2 className="font-heading font-bold text-3xl md:text-5xl text-white">
                            Trakya'nın Her Noktasında<br />Profesyonel Çözüm
                        </h2>
                    </div>
                    <p className="text-white/60 max-w-md text-lg">
                        Tekirdağ merkezli ekibimizle tüm Trakya bölgesine en hızlı şekilde ulaşıyor, projeniz için en uygun zamanda uçuş yapıyoruz.
                    </p>
                </div>

                {/* Interactive Map */}
                <div className="mb-16">
                    <TrakyaMap />
                </div>

                {/* List View (SEO & Mobile Fallback) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {LOCATIONS.map((location, index) => (
                        <Link
                            key={index}
                            href={location.slug}
                            className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
                        >
                            <span className="text-white font-medium group-hover:text-[#c5f536] transition-colors">
                                {location.name}
                            </span>
                            <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#c5f536] transition-colors" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
