import { getBlogPosts } from "@/lib/blog";
import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Blog | Kutal Drone",
    description: "Drone teknolojileri, hava fotoğrafçılığı ipuçları ve sektörden en güncel haberler.",
};

export default function BlogIndexPage() {
    const posts = getBlogPosts();

    return (
        <main className="bg-[#020305] min-h-screen text-white">
            <Header />
            <PageTransition>
                <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
                    <Breadcrumbs />
                    <div className="text-center mb-16 mt-8">
                        <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">Blog & Güncel Haberler</h1>
                        <p className="font-sans text-xl text-white/60 max-w-2xl mx-auto">
                            Drone dünyasından en son gelişmeler, projelerimizden hikayeler ve teknik ipuçları.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                                <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-300 h-full flex flex-col">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <span className="text-[#c5f536] text-sm font-medium mb-3 block">
                                            {new Date(post.date).toLocaleDateString("tr-TR", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </span>
                                        <h2 className="font-heading font-bold text-xl mb-3 group-hover:text-[#c5f536] transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-white/60 text-sm line-clamp-3 mb-6 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <span className="text-white font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Devamını Oku
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {posts.length === 0 && (
                        <div className="text-center py-20 text-white/50">
                            <p>Henüz bir blog yazısı eklenmemiş.</p>
                        </div>
                    )}
                </div>
            </PageTransition>
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
