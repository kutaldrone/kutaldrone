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
                const totalWidth = scrollRef.current.scrollWidth;
                const myscreen = window.innerWidth;
                // Sağa doğru akarken, son kartın sağ kenarı ekranın sağına geldiğinde dursun
                setScrollRange(totalWidth - myscreen + 100); // 100px padding
            }
        };

        updateScrollRange();
        window.addEventListener("resize", updateScrollRange);
        return () => window.removeEventListener("resize", updateScrollRange);
    }, [projects]);

    const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);

    return (
        <section id="projects" ref={targetRef} className="relative h-[200vh] bg-neutral-50">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Header */}
                <div className="absolute top-24 left-4 md:left-24 z-10 max-w-md pointer-events-none pr-4">
                    <h2 className="font-heading font-bold text-4xl md:text-6xl text-aerialix-dark mb-4 md:mb-6">Son uçuşlar</h2>
                    <p className="font-sans text-base md:text-xl text-zinc-500 bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                        Farklı ortam ve sektörlerde gerçekleştirilen güncel hava projelerinden bir seçki.
                    </p>
                </div>

                <motion.div ref={scrollRef} style={{ x }} className="flex gap-4 md:gap-8 pl-4 md:pl-24 pr-24 items-center">
                    {/* Spacer for the header text */}
                    <div className="w-[85vw] md:w-[400px] flex-shrink-0" />

                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}

                    {/* End Spacer */}
                    <div className="w-24 flex-shrink-0" />
                </motion.div>
            </div>
        </section>
    );
}
