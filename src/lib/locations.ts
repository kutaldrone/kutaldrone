import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Location {
    title: string;
    slug: string;
    image: string;
    heroTitle: string;
    heroSubtitle: string;
    introText: string;
    mapEmbed?: string;
    seoTitle: string;
    seoDescription: string;
}

const locationsDirectory = path.join(process.cwd(), "content/locations");

export function getLocations(): Location[] {
    if (!fs.existsSync(locationsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(locationsDirectory);
    const locations = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(locationsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title,
                image: data.image,
                heroTitle: data.heroTitle,
                heroSubtitle: data.heroSubtitle,
                introText: content, // accessing the markdown body
                mapEmbed: data.mapEmbed,
                seoTitle: data.seoTitle,
                seoDescription: data.seoDescription,
            } as Location;
        });

    return locations;
}

export function getLocationBySlug(slug: string): Location | null {
    try {
        const fullPath = path.join(locationsDirectory, `${slug}.md`);
        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            image: data.image,
            heroTitle: data.heroTitle,
            heroSubtitle: data.heroSubtitle,
            introText: content,
            mapEmbed: data.mapEmbed,
            seoTitle: data.seoTitle,
            seoDescription: data.seoDescription,
        } as Location;
    } catch (error) {
        return null;
    }
}
