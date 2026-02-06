export default function Parallax() {
    return (
        <section className="relative h-[70vh] md:h-[90vh] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://cdn.prod.website-files.com/69551abcfe49c7eee2847bcb/6955e1216a70067f000cd2e0_cb604fec53b2d65deedb41061c44b005_hero%20parallax.avif"
                    alt="Mountain landscape with forest"
                    className="w-full h-full object-cover object-bottom"
                />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#e6f0f5] to-transparent" />

            {/* Floating drone */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px]">
                <img
                    src="https://ext.same-assets.com/1370035257/1928263438.avif"
                    alt="Drone"
                    className="w-full h-auto floating"
                />
            </div>
        </section>
    );
}
