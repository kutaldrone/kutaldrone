import type { Metadata } from "next";
import { Inter, Sora, Orbitron } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { generateMetadata, COMPANY } from "@/lib/metadata";
import Script from "next/script";

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
    title: "Profesyonel Drone Çekim ve Haritalama Hizmetleri",
    description: `${COMPANY.name} - Tekirdağ Süleymanpaşa merkezli profesyonel drone çekim, haritalama ve tanıtım filmi hizmetleri. 4K/6K çözünürlük, sinematik kalite.`,
    keywords: ["drone çekim", "hava çekimi", "tekirdağ drone", "profesyonel drone pilot", "drone haritalama", "kutal drone"],
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/logo.png" />
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
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
