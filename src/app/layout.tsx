import type { Metadata } from "next";
import { Inter, Sora, Orbitron } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { generateMetadata, COMPANY, generateLocalBusinessSchema } from "@/lib/metadata";
import Script from "next/script";
import PageTransition from "@/components/PageTransition";
import StickyCallButton from "@/components/StickyCallButton";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    display: "swap",
});

const orbitron = Orbitron({
    subsets: ["latin"],
    variable: "--font-orbitron",
    display: "swap",
});

export const metadata: Metadata = generateMetadata({
    title: "Tekirdağ Drone Çekimi - Profesyonel Hava Fotoğrafçılığı",
    description: `Tekirdağ, Süleymanpaşa, Çorlu ve Çerkezköy'de profesyonel drone çekimi. Emlak fotoğrafçılığı, düğün ve etkinlik hava çekimi. ✓ 4K/6K video ✓ Hızlı teslimat ✓ Uygun fiyat. ${COMPANY.phone}`,
    keywords: [
        "tekirdağ drone çekimi",
        "tekirdağ hava fotoğrafçılığı",
        "süleymanpaşa drone",
        "çorlu drone çekimi",
        "çerkezköy drone",
        "tekirdağ emlak fotoğrafçısı",
        "tekirdağ düğün drone",
        "tekirdağ drone kiralama",
        "hava fotoğrafı tekirdağ",
        "drone videografi tekirdağ",
        "profesyonel drone pilot tekirdağ",
        "tekirdağ etkinlik drone",
        "sinematik drone çekim",
    ],
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const businessSchema = generateLocalBusinessSchema();

    return (
        <html lang="tr">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="google-site-verification" content="YdXAS-VWZpmO_qbglgoTBJzxLi6yoHPBV14P2HMDjuU" />
                <meta name="geo.region" content="TR-59" />
                <meta name="geo.placename" content="Tekirdağ" />
                <meta name="geo.position" content="40.978621;27.512709" />
                <meta name="ICBM" content="40.978621, 27.512709" />

                <Script
                    id="org-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
                />

                {GA_MEASUREMENT_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_MEASUREMENT_ID}');
                            `}
                        </Script>
                    </>
                )}
            </head>
            <body className={`${inter.variable} ${sora.variable} ${orbitron.variable} antialiased`}>
                <SmoothScroll>
                    <PageTransition>{children}</PageTransition>
                </SmoothScroll>
                <StickyCallButton />
            </body>
        </html>
    );
}
