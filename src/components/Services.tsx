import { Plus } from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ServiceCard from "./ServiceCard";

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
                            <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 mb-4 md:mb-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide pr-12 md:pr-0">
                                {firstRow.map((service, i) => (
                                    <div key={i} className="min-w-[85vw] md:min-w-0 snap-center">
                                        <ServiceCard
                                            title={service.title}
                                            description={service.description}
                                            image={service.image}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Central Icon Bridge (Desktop Only) */}
                        {secondRow.length > 0 && (
                            <div className="hidden md:flex justify-center my-8">
                                <div className="w-16 h-16 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400">
                                    <Plus className="w-8 h-8" />
                                </div>
                            </div>
                        )}

                        {/* Row 2 */}
                        {secondRow.length > 0 && (
                            <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide pr-12 md:pr-0">
                                {secondRow.map((service, i) => (
                                    <div key={i} className="min-w-[85vw] md:min-w-0 snap-center">
                                        <ServiceCard
                                            title={service.title}
                                            description={service.description}
                                            image={service.image}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}
