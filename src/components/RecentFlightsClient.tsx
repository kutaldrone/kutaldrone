"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { RecentFlight } from "./RecentFlights";

const ProjectCard = ({ project }: { project: RecentFlight }) => {
    return (
        <div className="group relative h-[400px] md:h-[450px] w-[85vw] md:w-[600px] rounded-3xl overflow-hidden flex-shrink-0 cursor-pointer">
            <div className="absolute inset-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>

            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                    <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs md:text-sm font-medium border border-white/10">
                        {project.category}
                    </span>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>

                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2">{project.title}</h3>
                    <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2 text-sm md:text-base">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function RecentFlightsClient({ projects }: { projects: RecentFlight[] }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    useEffect(() => {
        const updateScrollRange = () => {
            if (scrollRef.current) {
                const isMobile = window.innerWidth < 768;

                if (isMobile) {
                    setScrollRange(0); // Disable scroll animation on mobile
                } else {
                    const totalWidth = scrollRef.current.scrollWidth;
                    const myscreen = window.innerWidth;
                    setScrollRange(totalWidth - myscreen + 100);
                }
            }
        };

        updateScrollRange();
        window.addEventListener("resize", updateScrollRange);
        return () => window.removeEventListener("resize", updateScrollRange);
    }, [projects]);

    const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);

    return (
        <section id="projects" ref={targetRef} className="relative h-auto md:h-[200vh] bg-neutral-50">
            <div className="relative md:sticky md:top-0 flex flex-col md:flex-row h-auto md:h-screen items-start md:items-center overflow-hidden">

                {/* Header */}
                <div className="relative md:absolute top-auto md:top-24 left-auto md:left-24 z-10 max-w-md pointer-events-auto md:pointer-events-none px-6 pt-12 md:pt-0 mb-8 md:mb-0">
                    <h2 className="font-heading font-bold text-4xl md:text-6xl text-aerialix-dark mb-4 md:mb-6">Son uçuşlar</h2>
                    <p className="font-sans text-base md:text-xl text-zinc-500 bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                        Farklı ortam ve sektörlerde gerçekleştirilen güncel hava projelerinden bir seçki.
                    </p>
                </div>

                <motion.div
                    ref={scrollRef}
                    style={{ x }}
                    className="flex gap-4 md:gap-8 pl-6 md:pl-24 pr-6 md:pr-24 items-center w-full md:w-auto overflow-x-auto md:overflow-visible pb-12 md:pb-0 snap-x snap-mandatory"
                >
                    {/* Spacer for the header text (Desktop only) */}
                    <div className="hidden md:block w-[85vw] md:w-[400px] flex-shrink-0" />

                    {projects.map((project, i) => (
                        <div key={i} className="snap-center">
                            <ProjectCard project={project} />
                        </div>
                    ))}

                    {/* End Spacer */}
                    <div className="w-6 md:w-24 flex-shrink-0" />
                </motion.div>
            </div>
        </section>
    );
}
