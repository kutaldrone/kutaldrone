import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LocationsSection from "@/components/LocationsSection";
import PageTransition from "@/components/PageTransition";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Hizmet Bölgeleri | Kutal Drone",
    description: "Tekirdağ, Süleymanpaşa, Çorlu, Çerkezköy ve tüm Trakya bölgesinde profesyonel drone çekimi hizmet ağımız.",
};

export default function ServiceAreasPage() {
    return (
        <main className="bg-[#0a0c10] min-h-screen text-white">
            <Header />
            <PageTransition>
                <div className="pt-24 pb-8 max-w-7xl mx-auto px-6">
                    <Breadcrumbs />
                </div>

                {/* Re-using the LocationsSection component but effectively full-page context */}
                <div className="min-h-[60vh] flex flex-col justify-center">
                    <LocationsSection />
                </div>
            </PageTransition>
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
