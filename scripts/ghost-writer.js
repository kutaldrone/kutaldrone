const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const BLOG_DIR = path.join(process.cwd(), 'content/blog');

// Topics to rotate through
const TOPICS = [
    "Droneların İnşaat Sektöründeki Yeri ve Önemi",
    "Düğün Fotoğrafçılığında Drone Kullanımının Avantajları",
    "Tekirdağ'da Drone İle Keşfedilecek 5 Gizli Yer",
    "Emlak Satışlarını Hızlandıran Drone Çekim Taktikleri",
    "Tarımda Drone Kullanımı: Verimlilik ve Tasarruf",
    "Drone Batarya Ömrünü Uzatmak İçin İpuçları",
    "4K vs 1080p: Drone Videolarında Hangisi Tercih Edilmeli?",
    "Gayrimenkul Pazarlamasında Hava Fotoğraflarının Gücü",
    "Drone Çekimi Yaptırmadan Önce Bilmeniz Gerekenler",
    "Tekirdağ Sanayi Bölgelerinde Drone ile Denetim Avantajları",
    "Drone Teknolojisinin Geleceği: 2030 Öngörüleri",
    "Havadan Haritalama ve Fotogrametri Nedir?",
    "Etkinlik ve Festival Çekimlerinde Drone Kullanımı",
    "Drone Pilotu Olmak İçin Gerekenler ve İpuçları",
    "Marmaraereğlisi ve Şarköy'de Yazlık Alırken Havadan Bakış"
];

// Helper to get random item
const getRandomTopic = () => TOPICS[Math.floor(Math.random() * TOPICS.length)];

// Generate Content using Gemini
async function generateBlogPost(topic) {
    if (!GEMINI_API_KEY) {
        console.error("Error: GEMINI_API_KEY is not set.");
        process.exit(1);
    }

    const prompt = `
    Sen profesyonel bir blog yazarısın. "Kutal Drone" adlı, Tekirdağ merkezli bir drone çekim firması için blog yazısı yazıyorsun.
    
    Konu: "${topic}"
    
    Kurallar:
    1. Yazı dili Türkçe, samimi ve profesyonel olsun.
    2. Yaklaşık 400-600 kelime olsun.
    3. Markdown formatında olsun.
    4. Mutlaka bir "Frontmatter" bloğu ile başlasın.
    5. SEO uyumlu olsun, anahtar kelimeleri doğal bir şekilde geçir.
    6. Yazının sonunda "Kutal Drone ile iletişime geçin" mesajı ver.
    
    Frontmatter Formatı:
    ---
    title: "İlgi Çekici Başlık"
    slug: "seo-uyumlu-url-slug"
    image: "https://image.pollinations.ai/prompt/${encodeURIComponent(topic)}%20drone%20view%20cinematic%20lighting?width=1200&height=630&nologo=true"
    excerpt: "Yazının 1-2 cümlelik kısa özeti."
    date: "${new Date().toISOString()}"
    seoTitle: "SEO Başlığı"
    seoDescription: "SEO Açıklaması"
    ---
    
    İçerik buradan başlasın...
    `;

    console.log(`Generating post for topic: ${topic}...`);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: prompt }]
            }]
        })
    });

    if (!response.ok) {
        throw new Error(`Gemini API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const generatedText = data.candidates[0].content.parts[0].text;

    // Clean up markdown code blocks if present
    return generatedText.replace(/^```markdown\n/, '').replace(/^```\n/, '').replace(/\n```$/, '');
}

async function main() {
    try {
        // Create blog directory if it doesn't exist
        if (!fs.existsSync(BLOG_DIR)) {
            fs.mkdirSync(BLOG_DIR, { recursive: true });
        }

        // Get Topic
        const topic = getRandomTopic();

        // Generate Content
        const content = await generateBlogPost(topic);

        // Extract slug from frontmatter to use as filename
        const slugMatch = content.match(/slug:\s*"([^"]+)"/);
        const slug = slugMatch ? slugMatch[1] : `blog-post-${Date.now()}`;

        const fileName = `${slug}.md`;
        const filePath = path.join(BLOG_DIR, fileName);

        // Check if file already exists (rare but possible with random topics)
        if (fs.existsSync(filePath)) {
            console.log(`File ${fileName} already exists. Skipping.`);
            return;
        }

        // Write File
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Successfully generated blog post: ${fileName}`);

    } catch (error) {
        console.error("Failed to generate blog post:", error);
        process.exit(1);
    }
}

main();
