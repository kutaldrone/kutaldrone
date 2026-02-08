"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { COMPANY } from "@/lib/metadata";

export default function Contact() {
    const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("sending");

        try {
            const response = await fetch("https://formspree.io/f/xvzbpewo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormState("success");
                setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                setTimeout(() => setFormState("idle"), 5000);
            } else {
                setFormState("error");
                setTimeout(() => setFormState("idle"), 5000);
            }
        } catch (error) {
            setFormState("error");
            setTimeout(() => setFormState("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

                                {/* Contact Info */}
                                <div className="space-y-4 pt-8 border-t border-white/10">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#c5f536]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <a href={`tel:${COMPANY.phone}`} className="text-white/90 hover:text-[#c5f536] transition-colors">
                                            {COMPANY.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#c5f536] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className="text-white/90 text-sm">
                                            {COMPANY.address.city}, {COMPANY.address.state}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-12 pt-12 border-t border-white/10">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
                                    <img src="/logo.png" alt="Pilot" className="w-full h-full object-contain p-2 bg-white" />
                                </div>
                                <div>
                                    <p className="font-bold font-heading text-lg">Umut</p>
                                    <p className="text-sm text-white/60">Drone Operatörü</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-zinc-50 rounded-3xl p-8 md:p-12"
                        >
                            {formState === "success" ? (
                                <div className="text-center py-12">
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="font-heading font-bold text-2xl text-aerialix-dark mb-2">
                                        Mesajınız Gönderildi!
                                    </h3>
                                    <p className="text-zinc-600">
                                        En kısa sürede size geri dönüş yapacağım.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-aerialix-dark mb-2">
                                                Adınız Soyadınız *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-aerialix-dark focus:ring-2 focus:ring-aerialix-dark/20 outline-none transition-all"
                                                placeholder="Ali Yılmaz"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-aerialix-dark mb-2">
                                                Telefon *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-aerialix-dark focus:ring-2 focus:ring-aerialix-dark/20 outline-none transition-all"
                                                placeholder="0555 123 45 67"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-aerialix-dark mb-2">
                                            E-posta *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            inputMode="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-aerialix-dark focus:ring-2 focus:ring-aerialix-dark/20 outline-none transition-all"
                                            placeholder="ali@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-aerialix-dark mb-2">
                                            Hizmet Türü *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-aerialix-dark focus:ring-2 focus:ring-aerialix-dark/20 outline-none transition-all"
                                        >
                                            <option value="">Seçiniz...</option>
                                            <option value="video">Hava Videografisi</option>
                                            <option value="photo">Hava Fotoğrafçılığı</option>
                                            <option value="mapping">Haritalama & 3D Modelleme</option>
                                            <option value="inspection">Teftiş & Denetim</option>
                                            <option value="event">Etkinlik Çekimi</option>
                                            <option value="other">Diğer</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-aerialix-dark mb-2">
                                            Mesajınız *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-aerialix-dark focus:ring-2 focus:ring-aerialix-dark/20 outline-none transition-all resize-none"
                                            placeholder="Projeniz hakkında detayları paylaşın..."
                                        />
                                    </div>

                                    {formState === "error" && (
                                        <div className="flex items-center gap-2 p-4 bg-red-50 rounded-xl text-red-600">
                                            <AlertCircle className="w-5 h-5" />
                                            <p className="text-sm">Bir hata oluştu. Lütfen tekrar deneyin.</p>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={formState === "sending"}
                                        className="w-full bg-aerialix-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#c5f536] hover:text-aerialix-dark transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                                    >
                                        {formState === "sending" ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Gönderiliyor...
                                            </>
                                        ) : (
                                            <>
                                                Mesaj Gönder
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-zinc-500 text-center">
                                        Form gönderdiğinizde, <a href="/gizlilik" className="underline hover:text-aerialix-dark">gizlilik politikamızı</a> kabul etmiş olursunuz.
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
