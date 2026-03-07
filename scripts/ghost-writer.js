const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp"); // for WebP Image conversion

// Load local .env variables if running manually
require("dotenv").config({ path: path.resolve(process.cwd(), '.env') });

// 1. Initialize Gemini API
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error("FATAL ERROR: GEMINI_API_KEY environment variable is missing.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

// 2. Define Advanced SEO Prompt
const ADVANCED_SEO_PROMPT = `
Sen Türkiye pazarında (Özellikle Tekirdağ ilinde) uçan profesyonel drone hizmetleri sunan "Kutal Drone" firmasının Kıdemli SEO Uzmanı ve Metin Yazarı'sın (Copywriter). Görevin, yerel arama motoru optimizasyonu (Local SEO) kurallarına %100 uyan, Google'da 1. sayfaya çıkacak kalitede mükemmel bir Markdown (.md) blog yazısı oluşturmaktır.

Talimatlar:
1. LOKASYON SEÇİMİ (Çok Önemli): 
   Yazının odaklanacağı hedef kitle şu 11 ilçeden biri olmalıdır: Süleymanpaşa, Çorlu, Çerkezköy, Kapaklı, Ergene, Marmaraereğlisi, Saray, Malkara, Hayrabolu, Şarköy, Muratlı.
   **KRİTİK KURAL:** Seçim yaparken %60 ihtimalle her zaman "SÜLEYMANPAŞA" ilçesini ana odak noktası olarak seçmelisin. Diğer ilçeleri sadece ara sıra (%40 ihtimalle) seçebilirsin.

2. KONU SEÇİMİ (Rastgele Özel Bir Odak Seç): 
   Yukarıda seçtiğin lokasyona (tercihen Süleymanpaşa'ya) uygun olarak aşağıdaki kategorilerden BİRİNİ derinlemesine incele:
   - Gayrimenkul & Emlak Çekimi (Ev, villa, arsa havadan görünümü)
   - Fabrika & Sanayi Tanıtımı (Bölgedeki OSB odaklı dış çekimler, üretim tesisi uçuşları)
   - Düğün & Etkinlik (Açık hava düğünleri, kır düğünleri, kumsal/deniz kenarı organizasyonu)
   - 3D Haritalama & Tarım (Büyük tarım arazilerinin veya sanayi bölgelerinin ortofoto haritalanması)
   - Şantiye & İnşaat İlerleme Takibi

3. YAZININ YAPISI VE UZUNLUĞU:
   - Yazı en az 600 kelime olmalıdır.
   - Bilgilendirici, ikna edici ve profesyonel bir şirket ağzıyla (Kutal Drone dilinden) yazılmalıdır.
   - Sıkıcı ansiklopedik bilgiler yerine "Müşterinin hangi sorununu çözüyoruz ve bölgesel avantajımız ne?" gibi pratik değerlere odaklanmalıdır.

3. BAŞLIKLAR (H1, H2, H3 hiyerarşisi):
   - Başlıklar net, ilgi çekici ve mutlaka hedef kitlenin arayabileceği bölgesel anahtar kelimeler içermelidir (Örn: "Çorlu Fabrika Tanıtım Filmi İçin Neden Drone Tercih Edilmeli?").

4. ANAHTAR KELİME DAĞILIMI (Local SEO):
   - Yazının içine zorlama durmayacak şekilde şu kelimeleri doğal akışta yedir (Latent Semantic Indexing):
     "Tekirdağ drone çekimi", "Çorlu havadan çekim", "profesyonel drone pilotu", "4K video", "Süleymanpaşa", "Kutal Drone", "havadan fotoğrafçılık", "OSB tesis tanıtımı", "drone kiralama hizmeti".
   - İlk 100 kelimede ana anahtar kelime kesinlikle geçmelidir.

5. HAREKETE GEÇİRİCİ MESAJ (Call to Action - CTA):
   - Yazının en sonunda mutlaka "Kutal Drone | Tekirdağ ve Çorlu'nun Profesyonel Drone Çözüm Ortağı" vurgusu yapılarak, okuyucunun iletişimi veya teklif alması sağlanacak güçlü bir bitiş paragrafı eklenmelidir.
   
6. ZORUNLU ÇIKTI FORMATI (YAML Frontmatter + Markdown):
Sadece aşağıdaki formatta, kod bloğu ({JSON} veya \`\`\`markdown vs. DEGIL) İÇERMEYEN SALT METİN çıktısı ver. Başında veya sonunda senin kendi konuşmaların OLMAYACAK.
Şu blokla başla:

---
title: "[Seçilen İlgi Çekici Başlık]"
date: "YYYY-MM-DDTHH:MM:SS.000Z" (Bugünün tarihi ve saatini ISO formatında yaz)
image: "[IMAGE_PLACEHOLDER]"
excerpt: "[150 karakteri geçmeyen vurucu bir meta açıklama özeti]"
seoTitle: "[Seçtiğin başlığın Google için en fazla 60 karakterlik optimize hali | Kutal Drone]"
seoDescription: "[Excerpt ile aynı olabilir veya farklı Local SEO kelimeleri içerebilir. Max 160 karakter]"
---

Sonrasında Markdown ile biçimlendirilmiş yazıyı yaz. SADECE BU ÇIKTIYI VER, BAŞKA BİR ŞEY SÖYLEME.
`;

// 3. Main Function
async function generateBlogPost() {
    try {
        console.log("Starting Ghost Writer AI generation...");
        // Using gemini-2.5-flash which is perfect for fast and high-quality text generation
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const result = await model.generateContent(ADVANCED_SEO_PROMPT);
        const response = result.response;
        let textToSave = response.text();

        // 4. Determine title and filename safely
        const titleMatch = textToSave.match(/^title:\s*"([^"]+)"/m) || textToSave.match(/^title:\s*'([^']+)'/m) || textToSave.match(/^title:\s*([^\n]+)/m);
        
        let filename = `auto-blog-post-${Date.now()}.md`; // Fallback name
        let extractedTitle = "Drone Photography";
        if (titleMatch && titleMatch[1]) {
            extractedTitle = titleMatch[1].trim();
            // Create a slug from title
            filename = extractedTitle
                .toLowerCase()
                .replace(/ğ/g, "g")
                .replace(/ü/g, "u")
                .replace(/ş/g, "s")
                .replace(/ı/g, "i")
                .replace(/ö/g, "o")
                .replace(/ç/g, "c")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "") + ".md";
        }

        // 5. Generate AI Image Prompt
        console.log("Generating tailored image prompt via Gemini...");
        const imagePromptRequest = `Based on this blog post title: "${extractedTitle}", write a very short, highly descriptive English prompt (max 50 words) for a photorealistic 4k SDXL/Midjourney image generator. It should depict a professional drone shot (e.g., of a modern factory, real estate, or wedding in Turkey). Only return the English prompt and nothing else. No intro, no quotes.`;
        
        const imgPromptResult = await model.generateContent(imagePromptRequest);
        const imagePrompt = imgPromptResult.response.text().trim().replace(/^"|"$/g, '');
        console.log(`Image Prompt: ${imagePrompt}`);

        console.log("Fetching AI generated image...");
        let imageBuffer;
        try {
            // Attempt to use Pollinations as free high-quality Text-To-Image provider
            const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(imagePrompt)}?width=1200&height=630&nologo=true`;
            const imageResponse = await fetch(imageUrl, {
                headers: { 'User-Agent': 'Mozilla/5.0 (KutalDrone SEO Bot)' }
            });
            
            if (!imageResponse.ok) {
                throw new Error(`AI Image API returned ${imageResponse.status}`);
            }
            imageBuffer = await imageResponse.arrayBuffer();
            console.log("Successfully generated AI Image.");
        } catch (imgError) {
            console.warn("⚠️ AI Image Generation API is currently unavailable or rate-limited. Falling back to high-quality curated stock photos...");
            const VALID_IMAGES = [
                "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop", // City over
                "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop", // DJI Drone
                "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?q=80&w=1200&auto=format&fit=crop", // Beach
                "https://images.unsplash.com/photo-1527011045974-4b52b21ba1cb?q=80&w=1200&auto=format&fit=crop", // Architecture
                "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=1200&auto=format&fit=crop", // Drone flying
                "https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?q=80&w=1200&auto=format&fit=crop"  // Industrial
            ];
            const fallbackUrl = VALID_IMAGES[Math.floor(Math.random() * VALID_IMAGES.length)];
            const fallbackResponse = await fetch(fallbackUrl);
            imageBuffer = await fallbackResponse.arrayBuffer();
        }

        // 6. Compress and save image as WebP
        const publicImagesDir = path.join(process.cwd(), "public", "blog-images");
        if (!fs.existsSync(publicImagesDir)) {
            fs.mkdirSync(publicImagesDir, { recursive: true });
        }

        const imageBaseName = filename.replace('.md', '');
        const imageFileName = `${imageBaseName}.webp`;
        const imageWebpPath = path.join(publicImagesDir, imageFileName);

        console.log(`Compressing image to WebP format...`);
        await sharp(Buffer.from(imageBuffer))
            .webp({ quality: 80 }) // High compression, great quality
            .toFile(imageWebpPath);

        // Inject the generated image local URL into Markdown
        const localImageUrl = `/blog-images/${imageFileName}`;
        textToSave = textToSave.replace("[IMAGE_PLACEHOLDER]", localImageUrl);

        // Remove possible markdown formatting backticks if AI decided to wrap it anyway
        const cleanedText = textToSave.replace(/^```(markdown|md)?\s*\n/i, "").replace(/\n```$/i, "");

        // 7. Save to disk
        const blogDir = path.join(process.cwd(), "content", "blog");
        if (!fs.existsSync(blogDir)) {
            fs.mkdirSync(blogDir, { recursive: true });
        }

        const filePath = path.join(blogDir, filename);
        fs.writeFileSync(filePath, cleanedText, "utf-8");

        console.log(`✅ Success! Generated new SEO blog post: ${filename}`);
        console.log(`✅ Success! Generated and compressed WebP image: ${imageFileName}`);

    } catch (error) {
        console.error("❌ Error generating blog post:", error);
        process.exit(1);
    }
}

generateBlogPost();
