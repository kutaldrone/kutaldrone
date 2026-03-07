import Link from "next/link";
import { Reveal } from "./Reveal";

const navLinks = {
    main: [
        { label: "Hakkımızda", href: "/hakkimizda" },
        { label: "Hizmetler", href: "/#services" },
        { label: "Blog", href: "/blog" },
        { label: "Projeler", href: "/#projects" },
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
        name: "Instagram",
        href: "https://instagram.com/kutaldrone",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        name: "YouTube",
        href: "https://youtube.com/@kutaldrone",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "https://twitter.com/kutaldrone",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#0a0c10] pt-24 pb-12 border-t border-white/5" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* 1. Meet the Pilot (Left - 4 Cols) */}
                    <div className="lg:col-span-4">
                        <Reveal delay={0.2} width="100%">
                            <Link href="/" className="inline-block mb-8">
                                <img src="/logo.png" alt="Kutal Drone" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                            </Link>

                            <h2 className="font-heading font-bold text-3xl text-white mb-6 leading-tight">
                                Projenizi Gökyüzüne<br /> <span className="text-[#c5f536]">Taşıyalım</span>
                            </h2>
                            <p className="text-white/60 mb-8 leading-relaxed text-sm">
                                Merhaba, ben Umut. Şantiyeden düğüne, emlak çekiminden tanıtım filmine kadar her projede lisanslı pilotluğum ve sinematik bakış açımla yanınızdayım.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://wa.me/905529501367"
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2 bg-[#c5f536] text-[#0a0c10] px-6 py-3.5 rounded-xl font-bold hover:bg-white transition-all hover:scale-105 active:scale-95"
                                >
                                    WhatsApp'tan Yaz
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.0117 2.0166C6.5057 2.0166 2.02344 6.4988 2.02344 12.0049C2.02344 13.7656 2.48438 15.4853 3.37695 17.0312L2.01172 22.0166L7.14355 20.6709C8.63672 21.4883 10.3125 21.9932 12.0117 21.9932C17.5176 21.9932 22 17.5109 22 12.0049C22 6.4988 17.5176 2.0166 12.0117 2.0166ZM12.0117 20.3174C10.5186 20.3174 9.08301 19.9209 7.82227 19.1602L7.52441 18.9834L4.47852 19.7822L5.29199 16.8096L5.09375 16.4941C4.24609 15.1504 3.78418 13.6016 3.78418 12.0049C3.78418 7.46973 7.47656 3.77734 12.0117 3.77734C16.5469 3.77734 20.2393 7.46973 20.2393 12.0049C20.2393 16.5401 16.5469 20.3174 12.0117 20.3174ZM16.4883 14.4453C16.2441 14.3223 15.0449 13.7324 14.8223 13.6514C14.6006 13.5693 14.4375 13.5283 14.2754 13.7725C14.1133 14.0166 13.6465 14.5645 13.5049 14.7275C13.3633 14.8906 13.2217 14.9092 12.9775 14.7871C12.7334 14.665 11.9482 14.4063 11.0166 13.5762C10.2861 12.9258 9.79199 12.1221 9.64941 11.8779C9.50781 11.6338 9.63477 11.503 9.75684 11.3818C9.86621 11.2725 10.001 11.0977 10.123 10.9541C10.2451 10.8115 10.2852 10.709 10.3662 10.5479C10.4473 10.3848 10.4063 10.2422 10.3457 10.1211C10.2842 9.99805 9.79688 8.80078 9.59375 8.3125C9.39063 7.84473 9.18652 7.90723 9.03516 7.90723C8.89355 7.90723 8.73047 7.90723 8.56738 7.90723C8.4043 7.90723 8.14063 7.96777 7.91797 8.21289C7.69434 8.45703 7.0625 9.04785 7.0625 10.248C7.0625 11.4502 7.93555 12.6104 8.05859 12.7725C8.18066 12.9355 9.86035 15.5234 12.4336 16.6357C13.0459 16.9004 13.5234 17.0586 13.8994 17.1777C14.5059 17.3701 15.0615 17.3428 15.501 17.2773C15.9863 17.2051 16.9922 16.6699 17.2012 16.0791C17.4102 15.4883 17.4102 14.9795 17.3496 14.8789C17.2891 14.7764 17.126 14.7158 16.8818 14.5947H16.4883V14.4453Z" /></svg>
                                </Link>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-2 bg-white/5 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all border border-white/10"
                                >
                                    Teklif Al
                                </Link>
                            </div>
                        </Reveal>
                    </div>

                    {/* 2. Pilot Image (Center - 3 Cols) */}
                    <div className="lg:col-span-3 flex items-center justify-center py-8 lg:py-0">
                        <Reveal delay={0.4} variant="zoom">
                            <div className="relative w-[240px] h-[300px] rounded-2xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/5 shadow-2xl shadow-aerialix-dark/50">
                                <img
                                    src="https://ext.same-assets.com/1370035257/3403264598.avif"
                                    alt="Umut - Pilot"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-white font-bold text-lg">Umut Kutal</p>
                                    <p className="text-[#c5f536] text-xs uppercase tracking-wider font-bold">Lisanslı Pilot</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* 3. Links Section (Right - 5 Cols) [RE-DESIGNED AREA] */}
                    <div className="lg:col-span-5 bg-white/5 rounded-3xl p-8 border border-white/5">
                        <Reveal delay={0.6} width="100%">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4">

                                {/* COL 1: Menü & Yasal */}
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-[#c5f536] font-bold text-xs uppercase tracking-widest mb-5">Kurumsal</h3>
                                        <ul className="space-y-3">
                                            {navLinks.main.map((link) => (
                                                <li key={link.label}>
                                                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm font-medium block hover:translate-x-1 duration-200">
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-[#c5f536] font-bold text-xs uppercase tracking-widest mb-5">Yasal</h3>
                                        <ul className="space-y-3">
                                            {navLinks.legal.map((link) => (
                                                <li key={link.label}>
                                                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-xs block hover:translate-x-1 duration-200">
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* COL 2: Hizmetler & Bölgeler */}
                                <div>
                                    <h3 className="text-[#c5f536] font-bold text-xs uppercase tracking-widest mb-5">Hizmetlerimiz</h3>
                                    <ul className="space-y-3 mb-8">
                                        <li className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer hover:translate-x-1 duration-200">
                                            <Link href="/emlak-drone-cekimi">Emlak Çekimi</Link>
                                        </li>
                                        <li className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer hover:translate-x-1 duration-200">
                                            <Link href="/isletme-tanitim-filmi">Fabrika Tanıtımı</Link>
                                        </li>
                                        <li className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer hover:translate-x-1 duration-200">
                                            <Link href="/dugun-drone-cekimi">Düğün Hikayesi</Link>
                                        </li>
                                    </ul>

                                    <h3 className="text-[#c5f536] font-bold text-xs uppercase tracking-widest mb-5">Popüler Bölgeler</h3>
                                    <ul className="space-y-3">
                                        <li><Link href="/bolge/tekirdag-drone-cekimi" className="text-white/60 text-xs hover:text-white transition-colors block hover:translate-x-1 duration-200">Tekirdağ Merkez</Link></li>
                                        <li><Link href="/bolge/corlu-drone-cekimi" className="text-white/60 text-xs hover:text-white transition-colors block hover:translate-x-1 duration-200">Çorlu</Link></li>
                                        <li><Link href="/bolge/cerkezkoy-drone" className="text-white/60 text-xs hover:text-white transition-colors block hover:translate-x-1 duration-200">Çerkezköy</Link></li>
                                        <li><Link href="/bolge/edirne-drone-cekimi" className="text-white/60 text-xs hover:text-white transition-colors block hover:translate-x-1 duration-200">Edirne</Link></li>
                                    </ul>
                                </div>

                                {/* COL 3: İletişim */}
                                <div className="col-span-2 md:col-span-1">
                                    <h3 className="text-[#c5f536] font-bold text-xs uppercase tracking-widest mb-5">İletişim</h3>
                                    <div className="space-y-4">
                                        <a href="tel:05529501367" className="block group">
                                            <span className="text-xs text-white/40 block mb-1 group-hover:text-[#c5f536] transition-colors">Telefon</span>
                                            <span className="text-white font-medium text-sm">0552 950 13 67</span>
                                        </a>
                                        <div className="block group">
                                            <span className="text-xs text-white/40 block mb-1 group-hover:text-[#c5f536] transition-colors">Adres</span>
                                            <span className="text-white font-medium text-sm leading-snug">Atlas Pasajı, Ortacami, Hükümet Cd. No:30 D:1. Kat, Dükkan No: 59, 59100 Süleymanpaşa/Tekirdağ</span>
                                        </div>
                                    </div>

                                    {/* Socials */}
                                    <div className="flex gap-2 mt-8">
                                        {socialLinks.slice(0, 4).map((social) => (
                                            <Link
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-[#0a0c10] hover:bg-[#c5f536] transition-all hover:scale-110"
                                            >
                                                {social.icon}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </Reveal>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">&copy; 2025 Kutal Drone. Tüm hakları saklıdır.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/gizlilik" className="text-white/30 text-xs hover:text-white transition-colors">Gizlilik</Link>
                        <Link href="/kullanim-sartlari" className="text-white/30 text-xs hover:text-white transition-colors">Şartlar</Link>
                        <span className="text-white/10 text-xs">|</span>
                        <span className="text-white/30 text-xs">Designed by KutalSoft</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
