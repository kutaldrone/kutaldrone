import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kutaldrone.com.tr';

    // Static Routes
    const routes = [
        '',
        '/hakkimizda',
        '/fiyatlandirma',
        '/emlak-drone-cekimi',
        '/isletme-tanitim-filmi',
        '/etkinlik-drone-cekimi',
        '/dugun-drone-cekimi',
        '/3d-haritalama',
        '/hizmet-bolgeleri',
        '/sss',
        '/gizlilik',
        '/kullanim-sartlari',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Blog Routes
    let blogRoutes: MetadataRoute.Sitemap = [];
    try {
        const blogDir = path.join(process.cwd(), 'content/blog');
        if (fs.existsSync(blogDir)) {
            const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
            blogRoutes = blogFiles.map(file => ({
                url: `${baseUrl}/blog/${file.replace('.md', '')}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            }));
        }
    } catch (e) {
        console.error("Sitemap generation error (blog):", e);
    }

    // Dynamic Location Routes
    let locationRoutes: MetadataRoute.Sitemap = [];
    try {
        const locationsDir = path.join(process.cwd(), 'content/locations');
        if (fs.existsSync(locationsDir)) {
            const locationFiles = fs.readdirSync(locationsDir).filter(file => file.endsWith('.md'));
            locationRoutes = locationFiles.map(file => ({
                url: `${baseUrl}/bolge/${file.replace('.md', '')}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.9, // High priority for local SEO
            }));
        }
    } catch (e) {
        console.error("Sitemap generation error (locations):", e);
    }

    return [...routes, ...blogRoutes, ...locationRoutes];
}
