import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
    title: string;
    slug: string;
    image: string;
    excerpt: string;
    date: string;
    content: string;
    seoTitle?: string;
    seoDescription?: string;
}

const blogDirectory = path.join(process.cwd(), "content/blog");

export function getBlogPosts(): BlogPost[] {
    if (!fs.existsSync(blogDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(blogDirectory);
    const posts = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(blogDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title,
                image: data.image,
                excerpt: data.excerpt,
                date: data.date,
                content: content,
                seoTitle: data.seoTitle,
                seoDescription: data.seoDescription,
            } as BlogPost;
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(blogDirectory, `${slug}.md`);
        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            image: data.image,
            excerpt: data.excerpt,
            date: data.date,
            content: content,
            seoTitle: data.seoTitle,
            seoDescription: data.seoDescription,
        } as BlogPost;
    } catch (error) {
        return null;
    }
}
