import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "bg-light": "var(--bg-light)",
                "bg-dark": "var(--bg-dark)",
                aerialix: {
                    green: "#c9fd74",
                    dark: "#020305",
                },
                "accent-lime": "var(--accent-lime)",
                "text-dark": "var(--text-dark)",
                "text-muted": "var(--text-muted)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-sora)", "sans-serif"],
                display: ["var(--font-orbitron)", "sans-serif"],
            },
            animation: {
                marquee: "marquee 30s linear infinite",
                float: "float 4s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};

export default config;
