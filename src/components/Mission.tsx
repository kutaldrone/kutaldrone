import { Reveal } from "./Reveal";

export default function Mission() {
    return (
        <section className="bg-[#e6f0f5] py-20 md:py-32" id="about">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                    <Reveal delay={0.2} width="100%">
                        <div>
                            <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-[#122122] leading-tight mb-4">
                                From flight to results
                            </h2>
                            <p className="text-[#5a6a6d] text-lg">
                                Professional planning, safe execution, and reliable delivery every project.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.4} width="100%">
                        <div>
                            <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-[#122122] leading-tight mb-4">
                                A clear view from above
                            </h2>
                            <p className="text-[#5a6a6d] text-lg">
                                Precision aerial coverage for real-world environments and projects.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
