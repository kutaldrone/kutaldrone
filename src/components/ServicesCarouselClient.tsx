"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import TextReveal from "./TextReveal";

interface Service {
    title: string;
    description: string;
    image: string;
}

export default function ServicesCarouselClient({ services }: { services: Service[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 400 : window.innerWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
            setTimeout(checkScroll, 400); // Check again after animation
        }
    };

    return (
        <section id="services" className="bg-[#020305] py-32 px-4 md:px-8 scroll-mt-20 overflow-hidden text-white relative">
            <div className="max-w-[100rem] mx-auto">
                {/* Header & Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 px-2 md:px-0">
                    <div className="max-w-2xl">
                        <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                            Hava Hizmetleri
                        </h2>
                        <TextReveal 
                            text="Profesyonel drone çekimlerinden 3D haritalamaya, her proje için gökyüzünden özel çözümler sunuyoruz." 
                            className="font-sans text-lg md:text-xl text-white/50"
                        />
                    </div>
                    
                    {/* Desktop Navigation Buttons */}
                    <div className="hidden md:flex gap-4 pb-2">
                        <button 
                            onClick={() => scroll("left")} 
                            disabled={!canScrollLeft}
                            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#020305] transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={() => scroll("right")} 
                            disabled={!canScrollRight}
                            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#c9fd74] hover:text-[#020305] hover:border-[#c9fd74] transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div className="relative -mx-4 md:mx-0">
                    <div 
                        ref={scrollRef}
                        onScroll={checkScroll}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 md:px-0 pb-10"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {services.map((service, i) => (
                            <div key={i} className="snap-center shrink-0">
                                <ServiceCard
                                    title={service.title}
                                    description={service.description}
                                    image={service.image}
                                />
                            </div>
                        ))}
                        {/* Fake element for padding at the end on mobile */}
                        <div className="w-4 md:hidden shrink-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
