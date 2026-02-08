import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReactMarkdown from "react-markdown";
import PageTransition from "@/components/PageTransition";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
        return {
            title: "Yazı Bulunamadı",
        };
    }

    return {
        title: post.seoTitle || `${post.title} | Kutal Drone Blog`,
        description: post.seoDescription || post.excerpt,
        openGraph: {
            title: post.seoTitle || post.title,
            description: post.seoDescription || post.excerpt,
            images: [post.image],
        },
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="bg-[#020305] min-h-screen text-white">
            <Header />
            <PageTransition>
                <div className="max-w-7xl mx-auto px-6 pt-24 pb-4">
                    <Breadcrumbs title={post.title} />
                </div>
                <article>
                    {/* Hero */}
                    <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-[#020305]/60 to-transparent" />
                        <div className="absolute inset-0 flex items-end justify-center pb-20 px-6 text-center">
                            <div className="max-w-4xl">
                                <span className="inline-block bg-[#c5f536] text-[#020305] px-4 py-1 rounded-full text-sm font-bold mb-6">
                                    {new Date(post.date).toLocaleDateString("tr-TR", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                                <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl leading-tight">
                                    {post.title}
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="max-w-3xl mx-auto px-6 py-16">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="lead text-xl text-white/80 font-medium mb-8 border-l-4 border-[#c5f536] pl-6">
                                {post.excerpt}
                            </p>
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </div>

                        {/* Share / Back */}
                        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                            <Link
                                href="/blog"
                                className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Blog'a Dön
                            </Link>
                        </div>
                    </div>
                </article>
            </PageTransition>
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
