"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7">
                        {/* Hidden form for Netlify detection */}
                        <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
                            <input type="text" name="name" />
                            <input type="email" name="email" />
                            <select name="service-type">
                                <option value="Hava Fotoğrafçılığı">Hava Fotoğrafçılığı</option>
                            </select>
                            <input type="text" name="timeline" />
                            <textarea name="project-details"></textarea>
                        </form>

                        {/* Visible form */}
                        <form
                            name="contact"
                            method="POST"
                            action="/success"
                            className="space-y-8"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            {/* Honeypot */}
                            <div style={{ display: 'none' }}>
                                <input name="bot-field" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-900">İsim</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Kiminle konuştuğumu bileyim."
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-aerialix-dark/20 focus:border-aerialix-dark transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-900">E-posta</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Buradan yanıt vereceğim."
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-aerialix-dark/20 focus:border-aerialix-dark transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service-type" className="block text-sm font-medium text-zinc-900">Hizmet Türü</label>
                                <div className="relative">
                                    <select
                                        id="service-type"
                                        name="service-type"
                                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-aerialix-dark/20 focus:border-aerialix-dark transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Birini seçin...</option>
                                        <option value="Hava Fotoğrafçılığı">Hava Fotoğrafçılığı</option>
                                        <option value="Video Prodüksiyon">Video Prodüksiyon</option>
                                        <option value="Haritalama & Ölçüm">Haritalama & Ölçüm</option>
                                        <option value="Emlak Çekimi">Emlak Çekimi</option>
                                        <option value="Denetim (Inspection)">Denetim (Inspection)</option>
                                        <option value="Diğer">Diğer</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="timeline" className="block text-sm font-medium text-zinc-900">Zaman Çizelgesi</label>
                                <input
                                    type="text"
                                    id="timeline"
                                    name="timeline"
                                    placeholder="Buna ne zaman ihtiyacınız var?"
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-aerialix-dark/20 focus:border-aerialix-dark transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="project-details" className="block text-sm font-medium text-zinc-900">Proje Detayları</label>
                                <textarea
                                    id="project-details"
                                    name="project-details"
                                    required
                                    rows={4}
                                    placeholder="Konum, hedefler veya bilmem gereken herhangi bir şey hakkında bilgi verin."
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-aerialix-dark/20 focus:border-aerialix-dark transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-aerialix-dark text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-lg transition-all flex items-center gap-2 group w-full md:w-auto justify-center"
                            >
                                Teklif Gönder
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
