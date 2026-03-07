"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    className?: string;
}

export default function ServiceCard({ title, description, image, className = "" }: ServiceCardProps) {
    return (
        <div className={`group relative overflow-hidden rounded-3xl h-[420px] md:h-[450px] w-[85vw] sm:w-[350px] md:w-[400px] cursor-pointer shrink-0 border border-white/5 bg-[#0a0c10] shadow-2xl ${className}`}>
            
            {/* Background Image with Slow Zoom */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    priority={false}
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/40 transition-colors duration-500 z-10" />
            </div>

            {/* Corner Crosshairs (Micro-Interaction) */}
            <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#c9fd74] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
            <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#c9fd74] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-[#c9fd74] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

            {/* Content Area - Glassmorphic Bottom Panel */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end items-start text-white z-20 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="font-heading font-bold text-2xl md:text-3xl leading-tight mb-2 flex items-center gap-3">
                    {title}
                </h3>
                
                {/* Expandable Text */}
                <div className="overflow-hidden grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out w-full opacity-0 group-hover:opacity-100">
                    <div className="min-h-0">
                        <p className="font-sans text-sm md:text-base text-white/70 pt-2 pb-4 leading-relaxed line-clamp-3">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Animated Arrow */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-75 border border-white/20">
                    <ArrowRight className="w-5 h-5 text-[#c9fd74]" />
                </div>
            </div>
        </div>
    );
}
