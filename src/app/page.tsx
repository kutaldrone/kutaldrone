import Header from "../components/Header";
import { Hero } from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process"; // Replaces Testimonials
import RecentFlights from "../components/RecentFlights"; // Replaces Projects
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Services />
            <Process />
            <RecentFlights />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
