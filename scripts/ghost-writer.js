import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

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
image: "https://images.unsplash.com/photo-[Drone, Endüstri veya Düğünle İlgili Uygun Bir Unsplash IDsi]?q=80&w=2574&auto=format&fit=crop"
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
        const textToSave = response.text();

        // 4. Determine title and filename safely
        const titleMatch = textToSave.match(/^title:\s*"([^"]+)"/m) || textToSave.match(/^title:\s*'([^']+)'/m) || textToSave.match(/^title:\s*([^\n]+)/m);
        
        let filename = `auto-blog-post-${Date.now()}.md`; // Fallback name
        if (titleMatch && titleMatch[1]) {
            let title = titleMatch[1].trim();
            // Create a slug from title
            filename = title
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

        // Remove possible markdown formatting backticks if AI decided to wrap it anyway
        const cleanedText = textToSave.replace(/^```(markdown|md)?\s*\n/i, "").replace(/\n```$/i, "");

        // 5. Save to disk
        const blogDir = path.join(process.cwd(), "content", "blog");
        
        // Ensure directory exists, though it should already
        if (!fs.existsSync(blogDir)) {
            fs.mkdirSync(blogDir, { recursive: true });
        }

        const filePath = path.join(blogDir, filename);
        fs.writeFileSync(filePath, cleanedText, "utf-8");

        console.log(`✅ Success! Generated new SEO blog post: ${filename}`);

    } catch (error) {
        console.error("❌ Error generating blog post:", error);
        process.exit(1);
    }
}

generateBlogPost();
