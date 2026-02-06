import Header from "../components/Header";
import { Hero } from "../components/Hero";
// import Features from "../components/Features";
// import Mission from "../components/Mission";
// import Parallax from "../components/Parallax";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials"; // Replaces Industries
import RecentFlights from "../components/RecentFlights"; // Replaces Projects
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            {/* <Features /> */}
            {/* <Mission /> */}
            {/* <Parallax /> */}
            <Services />
            <Testimonials />
            <RecentFlights />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
