"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ title }: { title?: string }) {
    const pathname = usePathname();
    const segments = pathname.split("/").filter((segment) => segment !== "");

    // Simple mapping for better readability
    const labelMap: Record<string, string> = {
        "blog": "Blog",
        "bolge": "Hizmet Bölgeleri",
        "sss": "Sıkça Sorulan Sorular",
        "hakkimizda": "Hakkımızda",
        "fiyatlandirma": "Fiyatlandırma",
        "iletisim": "İletişim",
        "gizlilik": "Gizlilik Politikası",
        "kullanim-sartlari": "Kullanım Şartları",
    };

    return (
        <nav aria-label="Breadcrumb" className="py-4 overflow-x-auto whitespace-nowrap">
            <ol className="flex items-center space-x-2 text-sm text-white/50">
                <li>
                    <Link href="/" className="hover:text-[#c5f536] transition-colors flex items-center">
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Ana Sayfa</span>
                    </Link>
                </li>

                {segments.map((segment, index) => {
                    const isLast = index === segments.length - 1;
                    let href = `/${segments.slice(0, index + 1).join("/")}`;
                    let label = labelMap[segment] || segment;

                    // Fix: Redirect 'bolge' segment to '/hizmet-bolgeleri' page
                    if (segment === "bolge") {
                        href = "/hizmet-bolgeleri";
                    }

                    // If it's the last segment and we have a custom title (e.g. blog post title), use that
                    if (isLast && title) {
                        label = title;
                    }
                    // Formatting slugs: "tekirdag-drone-cekimi" -> "Tekirdag Drone Cekimi"
                    else if (!labelMap[segment]) {
                        label = segment.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
                    }

                    return (
                        <li key={segment} className="flex items-center">
                            <ChevronRight className="w-4 h-4 mx-1 text-white/30" />
                            {isLast ? (
                                <span className="text-[#c5f536] font-medium" aria-current="page">
                                    {label}
                                </span>
                            ) : (
                                <Link href={href} className="hover:text-white transition-colors">
                                    {label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
