"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    className?: string;
}

export default function ServiceCard({ title, description, image, className }: ServiceCardProps) {
    return (
        <div className={`group relative overflow-hidden rounded-[2rem] h-[600px] w-full cursor-pointer ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={false}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 z-10" />
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
}
