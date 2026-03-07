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
        youtube: "https://youtube.com/@kutaldrone",
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
        icons: {
            icon: [
                { url: "/favicon.ico", sizes: "any" },
                { url: "/icon.png", type: "image/png" },
            ],
            apple: [
                { url: "/apple-icon.png" },
            ],
        },
    };
}

// Organization Schema (For Logo in Google Search)
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: COMPANY.name,
        url: COMPANY.url,
        logo: `${COMPANY.url}/logo.png`,
        contactPoint: {
            "@type": "ContactPoint",
            telephone: COMPANY.phoneFormatted,
            contactType: "customer service",
            areaServed: "TR",
            availableLanguage: "Turkish"
        },
        sameAs: Object.values(COMPANY.social),
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
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
        },
        sameAs: Object.values(COMPANY.social),
        areaServed: [
            { "@type": "City", "name": "Tekirdağ" },
            { "@type": "City", "name": "Süleymanpaşa" },
            { "@type": "City", "name": "Çorlu" },
            { "@type": "City", "name": "Çerkezköy" },
            { "@type": "City", "name": "Kapaklı" },
            { "@type": "City", "name": "Ergene" },
            { "@type": "City", "name": "Marmaraereğlisi" },
            { "@type": "City", "name": "Muratlı" },
            { "@type": "City", "name": "Saray" },
            { "@type": "City", "name": "Hayrabolu" },
            { "@type": "City", "name": "Malkara" },
            { "@type": "City", "name": "Şarköy" },
            { "@type": "City", "name": "Kırklareli" },
            { "@type": "City", "name": "Edirne" }
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Drone Hizmetleri",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Emlak Drone Çekimi"
                    }
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Düğün ve Etkinlik Hava Çekimi"
                    }
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Tanıtım Filmi Çekimi"
                    }
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "3D Haritalama ve Modelleme"
                    }
                }
            ]
        },
    };
}

// Service Schema
export function generateServiceSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Drone Photography and Videography",
        provider: {
            "@type": "LocalBusiness",
            name: COMPANY.name
        },
        areaServed: {
            "@type": "State",
            name: "Tekirdağ"
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Aerial Photography Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "4K/6K Video Çekimi"
                    }
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "360 Derece Panorama"
                    }
                }
            ]
        }
    };
}
