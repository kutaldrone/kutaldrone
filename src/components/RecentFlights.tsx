import RecentFlightsClient from "./RecentFlightsClient";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface RecentFlight {
    title: string;
    category: string;
    image: string;
    description: string;
    date: string;
    order: number;
}

// CMS'den veri çekme fonksiyonu
function getRecentFlights(): RecentFlight[] {
    try {
        const flightsDir = path.join(process.cwd(), "content", "recent-flights");

        if (!fs.existsSync(flightsDir)) {
            return getDefaultFlights();
        }

        const files = fs.readdirSync(flightsDir);
        const flights = files
            .filter((file) => file.endsWith(".md"))
            .map((file) => {
                const filePath = path.join(flightsDir, file);
                const fileContents = fs.readFileSync(filePath, "utf8");
                const { data } = matter(fileContents);
                return data as RecentFlight;
            })
            .sort((a, b) => a.order - b.order);

        return flights.length > 0 ? flights : getDefaultFlights();
    } catch (error) {
        console.error("Error loading recent flights:", error);
        return getDefaultFlights();
    }
}

// Fallback default data
function getDefaultFlights(): RecentFlight[] {
    return [
        {
            title: "Altyapı Saha Denetimi",
            category: "Denetim",
            image: "https://cdn.prod.website-files.com/69686d3155b1f650efcc4e1b/69689fe339213887f7bb9ca3_Works%209.png",
            description: "Ulaşılması zor alanların görsel denetimi için yüksek çözünürlüklü hava görüntüleri.",
            date: "2024-01-15",
            order: 1,
        },
        {
            title: "Etkinlik Alanı Hava Çekimi",
            category: "Etkinlik",
            image: "https://cdn.prod.website-files.com/69686d3155b1f650efcc4e1b/69689ea94042c7904f661bcc_Works%2010.png",
            description: "Etkinlik alanını ve atmosferi belgelemek için hava fotoğrafları ve kısa video klipler.",
            date: "2024-01-10",
            order: 2,
        },
        {
            title: "Dağ Manzarası Filmi",
            category: "Sinematografi",
            image: "https://cdn.prod.website-files.com/69686d3155b1f650efcc4e1b/69689711b93a83893a89db2f_Works%2011.png",
            description: "Arazi yapısını, yüksekliği ve doğal desenleri vurgulayan sinematik hava görüntüleri.",
            date: "2024-01-05",
            order: 3,
        },
        {
            title: "Kentsel Gelişim Planlaması",
            category: "Haritalama",
            image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop",
            description: "Kentsel planlama ve gelişim analizi için detaylı ortomozaik haritalama.",
            date: "2023-12-28",
            order: 4,
        },
        {
            title: "Kıyı Koruma Araştırması",
            category: "Çevre",
            image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574&auto=format&fit=crop",
            description: "Drone fotogrametrisi kullanılarak çevresel izleme ve kıyı erozyonu takibi.",
            date: "2023-12-20",
            order: 5,
        },
    ];
}

export default function RecentFlights() {
    const projects = getRecentFlights();
    return <RecentFlightsClient projects={projects} />;
}
