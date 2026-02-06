"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
    {
        quote: "Baştan sona çok profesyonel. Net iletişim, güvenli operasyon ve harika hava sonuçları.",
        name: "Daniel Wong",
        role: "Proje Müdürü, Horizon Developments",
        image: "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/6968a930d6732d4ddbb8b1f5_client%204.avif"
    },
    {
        quote: "Profesyonel yaklaşım ve detaylara büyük özen. Hava görüntüleri sunumumuza gerçek değer kattı.",
        name: "Amelia Carter",
        role: "Pazarlama Lideri, Coastline Realty",
        image: "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/6968a930a420d9f418e30e93_client%203.avif"
    },
    {
        quote: "Görüntüler temizdi ve zamanında teslim edildi. Birlikte çalışmak kolay ve stressizdi.",
        name: "Sarah Nguyen",
        role: "Yaratıcı Yapımcı, Field & Frame Studio",
        image: "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/6968a930c8c9f189e86459ab_client%206.avif"
    }
];

const LOGOS = [
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e4288b6b85205eddaa48e_865c327d064e37d3c16e7808f196e2a9_Company%20logo%2001.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e4288d2936a701929cf74_78d7850b271d0752316f88443583d761_Company%20logo%2002.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e4288cb7a5f569e75b064_ffc90cca55b2e35b0ee51c49928e4bc2_Company%20logo%2003.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e42888983b8fddb8fdabe_71219adfa92c08c756702fb7064fd701_Company%20logo%2004.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e42882066c087f4d08772_274cb2c51af3a3dce5e555cfee9ccddf_Company%20logo%2005.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e42880cd8676409f1e22a_75a86b64d3f9536dec1b3f855041bfb5_Company%20logo%2006.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e4288c09f3051429862c8_ba48e8a052d0f2817353fd3cb0078339_Company%20logo%2007.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e428884ca808c6da22446_f5dd97a93d471c221efd76bd7e88903c_Company%20logo%2008.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e42880d1176af12ddee69_683b3840d7969c1183610b10bf33738a_Company%20logo%2009.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e428856fd9f06dc87e740_9be75d646f46490719e1e953611ddb27_Company%20logo%2010.png"
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-aerialix-dark text-white py-32 px-4 md:px-8">
            <div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Left Column: Header & Slider */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="font-heading font-bold text-5xl md:text-6xl mb-8">
                            Sektörlerin güvenilir tercihi
                        </h2>
                        <p className="font-sans text-xl text-zinc-400 max-w-md mb-20">
                            Netlik, güvenlik ve güvenilirlik gerektiren projeler için profesyonel hava hizmetleri.
                        </p>
                    </div>

                    <div className="relative min-h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-8"
                            >
                                <blockquote className="font-heading text-2xl md:text-3xl leading-relaxed">
                                    ❝{TESTIMONIALS[current].quote}❞
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={TESTIMONIALS[current].image}
                                        alt={TESTIMONIALS[current].name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-bold text-lg">{TESTIMONIALS[current].name}</p>
                                        <p className="text-zinc-500 text-sm">{TESTIMONIALS[current].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Button */}
                        <button
                            onClick={nextSlide}
                            className="absolute bottom-0 right-0 w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-aerialix-green hover:text-aerialix-dark hover:border-aerialix-green transition-all mt-8"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>

                {/* Right Column: Logo Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4">
                        {LOGOS.slice(0, 5).map((logo, i) => (
                            <div key={i} className="bg-white/5 rounded-xl p-8 flex items-center justify-center aspect-[4/3] hover:bg-white/10 transition-colors">
                                <img src={logo} alt="Client Logo" className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 max-w-[80%]" />
                            </div>
                        ))}
                    </div>
                    {/* Column 2 - Offset */}
                    <div className="flex flex-col gap-4 pt-12">
                        {LOGOS.slice(5, 10).map((logo, i) => (
                            <div key={i} className="bg-white/5 rounded-xl p-8 flex items-center justify-center aspect-[4/3] hover:bg-white/10 transition-colors">
                                <img src={logo} alt="Client Logo" className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 max-w-[80%]" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
