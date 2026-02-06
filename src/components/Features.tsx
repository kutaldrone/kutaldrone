import { Reveal } from "./Reveal";

const features = [
    {
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        text: "Licensed & certified pilot",
    },
    {
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        text: "Fully insured flights",
    },
    {
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        text: "Safety-first operations",
    },
    {
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        text: "Fast turnaround delivery",
    },
];

export default function Features() {
    return (
        <section className="bg-[#e6f0f5] py-12 -mt-32 relative z-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                    {features.map((feature, index) => (
                        <Reveal key={index} delay={0.1 * index} variant="zoom">
                            <div
                                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-white hover:scale-105 transition-all duration-300 cursor-default"
                            >
                                <span className="text-[#c5f536]">{feature.icon}</span>
                                <span className="text-sm font-medium text-[#122122]">
                                    {feature.text}
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
