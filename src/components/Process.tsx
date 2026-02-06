"use client";

import { motion } from "framer-motion";
import { ClipboardList, Camera, Film, ArrowRight } from "lucide-react";

const STEPS = [
    {
        icon: ClipboardList,
        title: "1. Planlama & Keşif",
        description: "İhtiyaçlarınızı dinliyor, uçuş sahasını analiz ediyor ve gerekli yasal izin süreçlerini sizin adınıza yönetiyoruz.",
    },
    {
        icon: Camera,
        title: "2. Profesyonel Uçuş",
        description: "Lisanslı pilotumuz, belirlenen gün ve saatte, güvenlik protokollerine tam uyarak yüksek çözünürlüklü çekimi gerçekleştirir.",
    },
    {
        icon: Film,
        title: "3. Teslimat",
        description: "Ham görüntüler renk düzenlemesi ve kurgu işleminden geçirilerek, sinematik kalitede ve kullanıma hazır formatta teslim edilir.",
    },
];

export default function Process() {
    return (
        <section className="bg-aerialix-dark text-white py-16 md:py-32 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5f536] opacity-5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#c5f536] font-medium tracking-wider uppercase text-sm"
                    >
                        Çalışma Sürecimiz
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading font-bold text-4xl md:text-5xl mt-4 max-w-2xl"
                    >
                        Fikirden teslimata, profesyonel süreç yönetimi.
                    </motion.h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            {/* Connector Line (Desktop only) */}
                            {index !== STEPS.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-[3.5rem] w-[calc(100%-1rem)] h-[2px] bg-white/10" />
                            )}

                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 h-full">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-aerialix-dark border border-white/20 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-[#c5f536] transition-colors">
                                    <step.icon className="w-8 h-8 text-white group-hover:text-[#c5f536] transition-colors" />
                                </div>

                                {/* Content */}
                                <h3 className="font-heading font-bold text-2xl mb-4 group-hover:text-[#c5f536] transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
