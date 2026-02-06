import Link from "next/link";
import { Reveal } from "./Reveal";

const projects = [
    {
        image: "https://cdn.prod.website-files.com/69686d3155b1f650efcc4e1b/69689fe339213887f7bb9ca3_Works%209.png",
        title: "Infrastructure Site Inspection",
        description:
            "High-resolution aerial imagery was captured to assist with visual inspection of hard-to-reach areas.",
    },
    {
        image: "https://cdn.prod.website-files.com/69686d3155b1f650efcc4e1b/69689ea94042c7904f661bcc_Works%2010.png",
        title: "Event Location Aerial Capture",
        description:
            "Aerial photos and short video clips were captured to document the event location and overall atmosphere.",
    },
    {
        image: "https://cdn.prod.website-files.com/69686d3155b1f650efcc4e1b/69689711b93a83893a89db2f_Works%2011.png",
        title: "Mountain Landscape Film",
        description:
            "Cinematic aerial footage was captured to highlight terrain, elevation, and natural patterns.",
    },
];

export default function Projects() {
    return (
        <section className="bg-[#e6f0f5] py-20 md:py-32" id="projects">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <Reveal>
                        <h2 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl text-[#122122] mb-4">
                            Recent flights
                        </h2>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="mt-4 text-[#5a6a6d] text-lg max-w-xl mx-auto">
                            A selection of recent aerial projects captured across different environments and industries.
                        </p>
                    </Reveal>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Reveal key={index} delay={0.2 + index * 0.1} width="100%">
                            <Link
                                href="#"
                                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer block"
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                    <h3 className="font-sora font-bold text-xl md:text-2xl text-white mb-2 translate-y-0 transition-transform duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-white/70 text-sm line-clamp-2 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        {project.description}
                                    </p>

                                    {/* Arrow */}
                                    <div className="mt-4 w-10 h-10 bg-[#c5f536] rounded-full flex items-center justify-center transition-all duration-300 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                                        <svg
                                            className="w-4 h-4 text-[#122122]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
