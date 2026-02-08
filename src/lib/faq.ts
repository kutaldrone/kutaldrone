import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface FAQItem {
    question: string;
    answer: string;
    order: number;
}

const faqDirectory = path.join(process.cwd(), "content/faq");

export function getFAQs(): FAQItem[] {
    if (!fs.existsSync(faqDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(faqDirectory);
    const faqs = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const fullPath = path.join(faqDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                question: data.question,
                answer: data.answer,
                order: data.order || 0,
            } as FAQItem;
        })
        .sort((a, b) => a.order - b.order);

    return faqs;
}
