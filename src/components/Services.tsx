"use client";

import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Service {
    title: string;
    description: string;
    image: string;
    order: number;
    active: boolean;
}

// This runs server-side to fetch services
async function getServices(): Promise<Service[]> {
    const servicesDirectory = path.join(process.cwd(), "content/services");

    // Check if directory exists
    if (!fs.existsSync(servicesDirectory)) {
        return [];
    }

    const filenames = fs.readdirSync(servicesDirectory);
    const services = filenames
        .filter(filename => filename.endsWith(".md"))
        .map(filename => {
            const filePath = path.join(servicesDirectory, filename);
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data } = matter(fileContents);

            return {
                title: data.title || "",
                description: data.description || "",
                image: data.image || "",
                order: data.order || 0,
                active: data.active !== false,
            };
        })
        .filter(service => service.active)
        .sort((a, b) => a.order - b.order);

    return services;
}

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

export default async function Services() {
    const services = await getServices();

    // Split into two rows
    const firstRow = services.slice(0, 2);
    const secondRow = services.slice(2, 4);

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

                {/* Grid Layout - Dynamic from CMS */}
                <div className="flex flex-col gap-8 relative">
                    <div className="w-full">
                        {/* Row 1 */}
                        {firstRow.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {firstRow.map((service, i) => (
                                    <ServiceCard
                                        key={i}
                                        title={service.title}
                                        description={service.description}
                                        image={service.image}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Central Icon Bridge */}
                        {secondRow.length > 0 && (
                            <div className="flex justify-center my-8">
                                <div className="w-16 h-16 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400">
                                    <Plus className="w-8 h-8" />
                                </div>
                            </div>
                        )}

                        {/* Row 2 */}
                        {secondRow.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {secondRow.map((service, i) => (
                                    <ServiceCard
                                        key={i}
                                        title={service.title}
                                        description={service.description}
                                        image={service.image}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}
