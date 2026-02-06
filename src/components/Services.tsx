"use client";

import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";

const ServiceCard = ({ title, description, image, className }: { title: string, description: string, image: string, className?: string }) => {
    return (
        <div className={`group relative overflow-hidden rounded-[2rem] h-[600px] w-full cursor-pointer ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end items-start text-white">
                <h3 className="font-heading font-bold text-4xl leading-tight mb-2 relative z-10 w-full">
                    {title.split(" ").map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </h3>

                {/* Hidden Content Reveal */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out w-full">
                    <p className="font-sans text-lg text-white/95 pt-4 pb-8 max-w-[90%] leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Arrow Icon - Absolute Bottom Right */}
                <div className="absolute bottom-10 right-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <ArrowRight className="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
    );
};

export default function Services() {
    return (
        <section id="services" className="bg-white py-32 px-4 md:px-8 scroll-mt-20">
            <div className="max-w-[100rem] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                    <h2 className="font-heading font-bold text-6xl text-aerialix-dark max-w-xl">
                        Hava Hizmetleri
                    </h2>
                    <p className="font-sans text-xl text-zinc-500 max-w-sm">
                        Profesyonel drone çekimlerinden 3D haritalamaya, her proje için özel çözümler sunuyoruz.
                    </p>
                </div>

                {/* Grid Layout - Split Group */}
                <div className="flex flex-col gap-8 relative">

                    {/* Width Constrained Container for the Grid */}
                    <div className="w-full">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <ServiceCard
                                title="Hava Fotoğrafçılığı"
                                description="Emlak, turizm ve pazarlama için yüksek çözünürlüklü hava fotoğrafları. Profesyonel ekipman ile 4K kalitesinde çekimler."
                                image="https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e0c37274d6e234b5f5a2f_Services%202.avif"
                            />
                            <ServiceCard
                                title="Hava Videografisi"
                                description="Reklam, tanıtım ve etkinlikler için sinematik 4K/6K drone videoları. Smooth gimbal hareketleri ve profesyonel renk derecelendirme."
                                image="https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e0c37e985fc6b9a71b797_Services%201.avif"
                            />
                        </div>

                        {/* Central Icon Bridge */}
                        <div className="flex justify-center my-8">
                            <div className="w-16 h-16 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400">
                                <Plus className="w-8 h-8" />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ServiceCard
                                title="Teftiş & Denetim"
                                description="Bina, baca, güneş paneli ve altyapı denetimi için güvenli hava incelemesi. Erişilmesi zor alanlarda maliyet etkin çözüm."
                                image="https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e0c37a44a663bba076d68_Services%203.avif"
                            />
                            <ServiceCard
                                title="Haritalama & 3D Modelleme"
                                description="İnşaat, tarım ve planlama için ortofoto haritalar ve hassas 3D modeller. Arazi ölçümü ve hacim hesaplamaları."
                                image="https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e0c3734e413ca727e1fec_Services%204.avif"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
