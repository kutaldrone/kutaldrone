import { Plus } from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ServiceCard from "./ServiceCard";
import TextReveal from "./TextReveal";

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

import ServicesCarouselClient from "./ServicesCarouselClient";

export default async function Services() {
    const services = await getServices();

    return <ServicesCarouselClient services={services} />;
}
