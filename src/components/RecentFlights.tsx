"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
    {
        title: "Altyapı Saha Denetimi",
        category: "Denetim",
        image: "https://cdn.prod.website-files.com/69686d3155b1f650efcc4e1b/69689fe339213887f7bb9ca3_Works%209.png",
        description: "Ulaşılması zor alanların görsel denetimi için yüksek çözünürlüklü hava görüntüleri."
    },
    {
        title: "Etkinlik Alanı Hava Çekimi",
        category: "Etkinlik",
        image: "https://cdn.prod.website-files.com/69686d3155b1f650efcc4e1b/69689ea94042c7904f661bcc_Works%2010.png",
        description: "Etkinlik alanını ve atmosferi belgelemek için hava fotoğrafları ve kısa video klipler."
    },
    {
        title: "Dağ Manzarası Filmi",
        category: "Sinematografi",
        image: "https://cdn.prod.website-files.com/69686d3155b1f650efcc4e1b/69689711b93a83893a89db2f_Works%2011.png",
        description: "Arazi yapısını, yüksekliğive doğal desenleri vurgulayan sinematik hava görüntüleri."
    },
    {
        title: "Kentsel Gelişim Planlaması",
        category: "Haritalama",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop",
        description: "Kentsel planlama ve gelişim analizi için detaylı ortomozaik haritalama."
    },
    {
        title: "Kıyı Koruma Araştırması",
        category: "Çevre",
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574&auto=format&fit=crop",
        description: "Drone fotogrametrisi kullanılarak çevresel izleme ve kıyı erozyonu takibi."
    }
];

const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => {
    return (
        <div className="group relative h-[450px] w-[600px] rounded-3xl overflow-hidden flex-shrink-0 cursor-pointer">
            <div className="absolute inset-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                    <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-medium border border-white/10">
                        {project.category}
                    </span>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>

                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-heading font-bold text-3xl mb-2">{project.title}</h3>
                    <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function RecentFlights() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section id="projects" ref={targetRef} className="relative h-[300vh] bg-neutral-50">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Header (Absolute positioned to stay on screen, or part of the flow?) 
                    The reference says "Recent Flights" header is part of the layout.
                    Let's put it absolute top-left for context.
                */}
                <div className="absolute top-24 left-4 md:left-24 z-10 max-w-md pointer-events-none">
                    <h2 className="font-heading font-bold text-6xl text-aerialix-dark mb-6">Son uçuşlar</h2>
                    <p className="font-sans text-xl text-zinc-500 bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                        Farklı ortam ve sektörlerde gerçekleştirilen güncel hava projelerinden bir seçki.
                    </p>
                </div>

                <motion.div style={{ x }} className="flex gap-8 pl-4 md:pl-24 pr-24 items-center">
                    {/* Spacer for the header text */}
                    <div className="w-[400px] flex-shrink-0" />

                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}

                    {/* End Spacer */}
                    <div className="w-24 flex-shrink-0" />
                </motion.div>
            </div>
        </section>
    );
}
