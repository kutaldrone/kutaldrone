import { getLocationBySlug, getLocations } from "@/lib/locations";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReactMarkdown from "react-markdown";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateStaticParams() {
    const locations = getLocations();
    return locations.map((location) => ({
        slug: location.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const location = getLocationBySlug(slug);

    if (!location) {
        return {
            title: "Bölge Bulunamadı",
        };
    }

    return {
        title: location.seoTitle || `${location.title} Drone Çekimi | Kutal Drone`,
        description: location.seoDescription || `${location.title} bölgesinde profesyonel drone çekimi, hava fotoğrafçılığı ve haritalama hizmetleri.`,
        openGraph: {
            title: location.seoTitle,
            description: location.seoDescription,
            images: [location.image],
        },
    };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const location = getLocationBySlug(slug);

    if (!location) {
        notFound();
    }

    return (
        <main className="bg-[#020305]">
            <Header />

            <div className="max-w-7xl mx-auto px-6 pt-24 pb-4">
                <Breadcrumbs title={location.title} />
            </div>

            {/* HERO SECTION */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={location.image}
                        alt={location.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-[#020305]/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
                    <span className="text-[#c5f536] font-bold tracking-wider uppercase text-sm mb-4 block">
                        Kutal Drone • {location.title}
                    </span>
                    <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6">
                        {location.heroTitle}
                    </h1>
                    <p className="font-sans text-xl text-white/80 max-w-2xl mx-auto">
                        {location.heroSubtitle}
                    </p>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Text Content */}
                    <article className="prose prose-xl prose-invert max-w-none">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-gray-200">
                            <ReactMarkdown
                                components={{
                                    h1: ({ node, ...props }) => <h1 className="text-white mb-6" {...props} />,
                                    h2: ({ node, ...props }) => <h2 className="text-[#c5f536] mt-8 mb-4 border-b border-white/10 pb-2" {...props} />,
                                    h3: ({ node, ...props }) => <h3 className="text-white mt-6 mb-3" {...props} />,
                                    p: ({ node, ...props }) => <p className="text-gray-300 leading-relaxed mb-4" {...props} />,
                                    ul: ({ node, ...props }) => <ul className="list-disc pl-6 space-y-2 mb-6" {...props} />,
                                    li: ({ node, ...props }) => <li className="text-gray-300" {...props} />,
                                }}
                            >
                                {location.introText}
                            </ReactMarkdown>
                        </div>
                    </article>

                    {/* Map / Contact Card */}
                    <div className="space-y-8">
                        {location.mapEmbed && (
                            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-[300px]">
                                <iframe
                                    src={location.mapEmbed}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        )}
                        <div className="bg-[#c5f536] text-[#020305] rounded-2xl p-8">
                            <h3 className="font-heading font-bold text-2xl mb-4">
                                {location.title} Drone Hizmeti mi Arıyorsunuz?
                            </h3>
                            <p className="mb-6 font-medium">
                                Hemen ücretsiz keşif ve fiyat teklifi için bize ulaşın. Bölgeye özel indirimli fiyatlarımızdan yararlanın.
                            </p>
                            <a
                                href="#contact"
                                className="inline-block bg-[#020305] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
                            >
                                Hemen Teklif Al
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* SERVICES PREVIEW */}
            <Services />

            <div id="contact">
                <Contact />
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
