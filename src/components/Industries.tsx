"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const logos = [
    "https://ext.same-assets.com/1370035257/4090147291.png",
    "https://ext.same-assets.com/1370035257/1761591517.png",
    "https://ext.same-assets.com/1370035257/1415201444.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e42888983b8fddb8fdabe_71219adfa92c08c756702fb7064fd701_Company%20logo%2004.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e42882066c087f4d08772_274cb2c51af3a3dce5e555cfee9ccddf_Company%20logo%2005.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e42880cd8676409f1e22a_75a86b64d3f9536dec1b3f855041bfb5_Company%20logo%2006.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e4288c09f3051429862c8_ba48e8a052d0f2817353fd3cb0078339_Company%20logo%2007.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e428884ca808c6da22446_f5dd97a93d471c221efd76bd7e88903c_Company%20logo%2008.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e42880d1176af12ddee69_683b3840d7969c1183610b10bf33738a_Company%20logo%2009.png",
    "https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/695e428856fd9f06dc87e740_9be75d646f46490719e1e953611ddb27_Company%20logo%2010.png",
];

const testimonials = [
    {
        quote:
            "Professional approach and great attention to detail. The aerial visuals added real value to our presentation.",
        name: "Amelia Carter",
        role: "Marketing Lead, Coastline Realty",
    },
    {
        quote:
            "The footage was clean and delivered on time. Working together was straightforward and stress-free.",
        name: "Sarah Nguyen",
        role: "Creative Producer, Field & Frame Studio",
    },
    {
        quote:
            "Exceptional quality and professionalism. The drone footage exceeded our expectations for the property listing.",
        name: "Michael Torres",
        role: "Real Estate Director, Prime Properties",
    },
    {
        quote:
            "Operational safety and clarity were key for our site inspection. The team delivered exactly what we needed.",
        name: "Daniel Wong",
        role: "Project Manager, Horizon Developments",
    },
    {
        quote:
            "Reliable service and great communication. The aerial data helped us streamline our planning process significantly.",
        name: "Jason Patel",
        role: "Director, Greenway Properties",
    },
    {
        quote:
            "We needed precise shots for our documentation, and the results were perfect. Highly recommended.",
        name: "Marcus Knight",
        role: "Operations Manager, UrbanBuild Group",
    },
];

export default function Industries() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="bg-[#122122] py-20 md:py-32 relative overflow-hidden">
            {/* Left side labels */}
            <div className="absolute left-4 top-1/3 hidden lg:flex flex-col gap-4 text-white/30 text-sm">
                <span>Biotecchia</span>
                <span>Wave</span>
                <span>uthesia</span>
            </div>

            {/* Right side labels */}
            <div className="absolute right-4 top-1/3 hidden lg:flex flex-col gap-4 text-white/30 text-sm text-right">
                <span className="flex items-center gap-2 justify-end">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                    Build
                </span>
                <span className="flex items-center gap-2 justify-end">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                    AI
                </span>
                <span className="flex items-center gap-2 justify-end">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                    Bio
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 flex flex-col items-center">
                    <Reveal>
                        <h2 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                            Trusted across industries
                        </h2>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
                            Professional aerial services for projects that demand clarity, safety, and reliability.
                        </p>
                    </Reveal>
                </div>

                {/* Logo Marquee */}
                <Reveal delay={0.6} width="100%">
                    <div className="relative overflow-hidden py-8 mb-12">
                        <div className="flex items-center marquee">
                            {[...logos, ...logos].map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 mx-8 w-24 h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                >
                                    <img
                                        src={logo}
                                        alt="Company logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Testimonial */}
                <Reveal delay={0.8} width="100%" className="flex flex-col items-center">
                    <div className="bg-[#1a3232] rounded-3xl p-8 md:p-12 max-w-4xl mx-auto w-full transition-all duration-500">
                        <div className="text-center">
                            <p key={currentTestimonial} className="text-2xl md:text-3xl lg:text-4xl text-[#c5f536] font-sora font-medium leading-relaxed animate-fade-in-up">
                                <span className="text-[#c5f536]">&ldquo;</span>
                                {testimonials[currentTestimonial].quote}
                                <span className="text-[#c5f536]">&rdquo;</span>
                            </p>
                            <div className="mt-8">
                                <p className="text-white font-medium text-lg">
                                    {testimonials[currentTestimonial].name}
                                </p>
                                <p className="text-white/60 text-sm">
                                    {testimonials[currentTestimonial].role}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Navigation */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            type="button"
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full bg-[#c5f536] flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl"
                        >
                            <svg
                                className="w-5 h-5 text-[#122122] rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full bg-[#c5f536] flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl"
                        >
                            <svg
                                className="w-5 h-5 text-[#122122]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
