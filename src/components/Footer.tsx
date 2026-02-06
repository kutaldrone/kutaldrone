import Link from "next/link";
import { Reveal } from "./Reveal";

const navLinks = {
    main: [
        { label: "Hakkımızda", href: "/hakkimizda" },
        { label: "Hizmetler", href: "#services" },
        { label: "Projeler", href: "#projects" },
        { label: "SSS", href: "/sss" },
    ],
    legal: [
        { label: "Gizlilik Politikası", href: "/gizlilik" },
        { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
    ],
    contact: [
        { label: "Tel: 0552 950 13 67", href: "tel:05529501367" },
        { label: "Tekirdağ/Süleymanpaşa", href: "/hakkimizda#map" },
    ],
};

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "https://x.com/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        name: "TikTok",
        href: "https://www.tiktok.com/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#122122] pt-20 pb-8" id="contact">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                    {/* Meet the Pilot */}
                    <div className="lg:col-span-1">
                        <Reveal delay={0.2} width="100%">
                            <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-6">
                                Drone Operatörüyle Tanışın
                            </h2>
                            <p className="text-white/70 mb-4 leading-relaxed">
                                Merhaba, ben Umut. Ticari ve özel müşteriler için profesyonel hava hizmetleri sunan lisanslı bir drone operatörüyüm.
                            </p>
                            <p className="text-white/70 mb-4 leading-relaxed">
                                Güvenilir sonuçlar ve sorunsuz proje teslimi sağlamak için uçuş planlamasından çekime kadar her aşamada her müşteriyle doğrudan çalışırım.
                            </p>
                            <p className="text-white/70 mb-6">Projenizi konuşalım.</p>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-[#c5f536] text-[#122122] px-6 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(197,245,54,0.3)] hover:scale-105 transition-all duration-300"
                            >
                                Teklif Al
                                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-3 h-3 text-[#122122]"
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
                                </span>
                            </Link>
                        </Reveal>
                    </div>

                    {/* Pilot Image */}
                    <div className="lg:col-span-1 flex justify-center">
                        <Reveal delay={0.4} variant="zoom">
                            <div className="relative w-[280px] h-[350px] rounded-3xl overflow-hidden group">
                                <img
                                    src="https://ext.same-assets.com/1370035257/3403264598.avif"
                                    alt="Professional drone pilot"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                        </Reveal>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-1">
                        <Reveal delay={0.6} width="100%">
                            {/* Logo */}
                            <div className="flex items-center gap-2 mb-8 select-none">
                                <img
                                    src="/logo.png"
                                    alt="Kutal Drone Logo"
                                    className="h-12 w-auto object-contain"
                                />
                            </div>

                            {/* Links Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                                {/* Sayfalar */}
                                <div>
                                    <h3 className="text-white font-semibold mb-4">Sayfalar</h3>
                                    {navLinks.main.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="block text-white/60 hover:text-[#c5f536] transition-colors mb-3 text-sm font-medium"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>

                                {/* Hizmetler */}
                                <div>
                                    <h3 className="text-white font-semibold mb-4">Hizmetler</h3>
                                    <Link
                                        href="/emlak-drone-cekimi"
                                        className="block text-white/60 hover:text-[#c5f536] transition-colors mb-3 text-sm"
                                    >
                                        Emlak Drone
                                    </Link>
                                    <Link
                                        href="/dugun-drone-cekimi"
                                        className="block text-white/60 hover:text-[#c5f536] transition-colors mb-3 text-sm"
                                    >
                                        Düğün Drone
                                    </Link>
                                    <Link
                                        href="/isletme-tanitim-filmi"
                                        className="block text-white/60 hover:text-[#c5f536] transition-colors mb-3 text-sm"
                                    >
                                        İşletme Tanıtım
                                    </Link>
                                    <Link
                                        href="/etkinlik-drone-cekimi"
                                        className="block text-white/60 hover:text-[#c5f536] transition-colors mb-3 text-sm"
                                    >
                                        Etkinlik Drone
                                    </Link>
                                </div>

                                {/* Bölgeler */}
                                <div>
                                    <h3 className="text-white font-semibold mb-4">Hizmet Bölgeleri</h3>
                                    <div className="space-y-2 text-white/60 text-sm">
                                        <p>Tekirdağ Merkez</p>
                                        <p>Süleymanpaşa</p>
                                        <p>Çorlu</p>
                                        <p>Çerkezköy</p>
                                        <p>Marmara Ereğlisi</p>
                                        <p>Saray</p>
                                    </div>
                                </div>

                                {/* Legal & Contact */}
                                <div>
                                    <h3 className="text-white font-semibold mb-4">İletişim</h3>
                                    {navLinks.contact.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="block text-white/60 hover:text-[#c5f536] transition-colors mb-3 text-sm font-medium"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="mt-6">
                                        {navLinks.legal.map((link) => (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className="block text-white/60 hover:text-[#c5f536] transition-colors mb-3 text-xs"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 mb-8">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-[#122122] hover:bg-[#c5f536] transition-all duration-300 hover:scale-110"
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>

                            {/* Copyright */}
                            <div className="text-white/30 text-xs leading-relaxed">
                                <p>&copy; 2025 Kutal Drone. Tüm hakları saklıdır.</p>
                                <p className="mt-1 flex gap-1">
                                    <Link href="#" className="hover:text-[#c5f536] transition-colors">
                                        KutalSoft tarafından oluşturuldu
                                    </Link>
                                    <span>·</span>
                                    <Link href="https://nextjs.org" target="_blank" className="hover:text-[#c5f536] transition-colors">
                                        Powered by Next.js
                                    </Link>
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </footer>
    );
}
