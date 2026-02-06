"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-white relative z-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="font-heading font-bold text-5xl md:text-6xl text-aerialix-dark mb-6">
                        Projeniz hakkında konuşalım
                    </h2>
                    <p className="font-sans text-xl text-zinc-500">
                        Neye ihtiyacınız olduğunu anlatın, müsaitlik durumu ve sonraki adımlarla size dönüş yapayım.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Info Card */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-aerialix-dark text-white p-8 md:p-12 rounded-3xl h-full flex flex-col justify-between"
                        >
                            <div className="space-y-8">
                                <p className="font-sans text-lg text-white/80 leading-relaxed">
                                    İster ne aradığınızı tam olarak bilin, ister sadece kaba bir fikriniz olsun, ulaşmaktan çekinmeyin. Soruları yanıtlamaktan, doğru yaklaşımı önermekten veya hava görüntülerinin projeniz için uygun olup olmadığını söylemekten mutluluk duyarım.
                                </p>
                                <p className="font-sans text-lg text-white/80 leading-relaxed">
                                    Her talebi şahsen inceler ve mümkün olduğunca hızlı yanıt veririm.
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-12 pt-12 border-t border-white/10">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
                                    <img src="/logo.png" alt="Pilot" className="w-full h-full object-contain p-2 bg-white" />
                                </div>
                                <div>
                                    <p className="font-bold font-heading text-lg">Kutal</p>
                                    <p className="text-sm text-white/60">Drone Uzmanı</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="lg:col-span-7">
                        <div className="bg-zinc-50 rounded-3xl p-12 space-y-8">
                            <div className="space-y-4">
                                <h3 className="font-heading font-bold text-2xl text-aerialix-dark">
                                    İletişim Bilgileri
                                </h3>
                                <p className="font-sans text-lg text-zinc-600">
                                    Projeniz hakkında görüşmek için aşağıdaki iletişim yöntemlerini kullanabilirsiniz:
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-aerialix-dark rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-heading font-semibold text-lg text-aerialix-dark">E-posta</p>
                                        <a href="mailto:info@kutaldrone.com" className="text-zinc-600 hover:text-aerialix-dark transition-colors text-lg">
                                            info@kutaldrone.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-aerialix-dark rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-heading font-semibold text-lg text-aerialix-dark">Telefon</p>
                                        <a href="tel:+905XXXXXXXXX" className="text-zinc-600 hover:text-aerialix-dark transition-colors text-lg">
                                            +90 5XX XXX XX XX
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-zinc-200">
                                <p className="text-sm text-zinc-500 italic">
                                    💡 İletişim formu yakında eklenecek.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
