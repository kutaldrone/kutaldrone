// Company Information
export const COMPANY = {
    name: "Kutal Drone",
    legalName: "Kutal Drone",
    phone: "0552 950 13 67",
    phoneFormatted: "+90 552 950 13 67",
    address: {
        street: "Atlas Pasajı, Ortacami, Hükümet Cd. No:30 D:1. Kat, Dükkan No: 59",
        city: "Süleymanpaşa",
        state: "Tekirdağ",
        zip: "59100",
        country: "Türkiye",
    },
    coordinates: {
        lat: 40.97862142893125,
        lng: 27.512709254433055,
    },
    url: "https://kutaldrone.com.tr",
    social: {
        instagram: "https://instagram.com/kutaldrone",
        youtube: "https://youtube.com/@utaldrone",
        twitter: "https://twitter.com/kutaldrone",
    },
};

// SEO Metadata Generator
export function generateMetadata({
    title,
    description,
    keywords,
    ogImage = "/og-image.jpg",
    noIndex = false,
}: {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    noIndex?: boolean;
}) {
    const fullTitle = `${title} | ${COMPANY.name}`;
    const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${COMPANY.url}${ogImage}`;

    return {
        title: fullTitle,
        description,
        keywords: keywords?.join(", "),
        robots: noIndex ? "noindex, nofollow" : "index, follow",
        authors: [{ name: COMPANY.name }],
        creator: COMPANY.name,
        publisher: COMPANY.name,
        alternates: {
            canonical: COMPANY.url,
        },
        openGraph: {
            type: "website",
            locale: "tr_TR",
            url: COMPANY.url,
            siteName: COMPANY.name,
            title: fullTitle,
            description,
            images: [
                {
                    url: absoluteOgImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [absoluteOgImage],
            creator: "@kutaldrone",
        },
    };
}

// LocalBusiness Schema
export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: COMPANY.name,
        image: `${COMPANY.url}/logo.png`,
        "@id": COMPANY.url,
        url: COMPANY.url,
        telephone: COMPANY.phoneFormatted,
        address: {
            "@type": "PostalAddress",
            streetAddress: COMPANY.address.street,
            addressLocality: COMPANY.address.city,
            addressRegion: COMPANY.address.state,
            postalCode: COMPANY.address.zip,
            addressCountry: COMPANY.address.country,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: COMPANY.coordinates.lat,
            longitude: COMPANY.coordinates.lng,
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
        },
        sameAs: Object.values(COMPANY.social),
    };
}
