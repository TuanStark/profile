"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useLanguage } from "@/components/ui/LanguageProvider";

export const Contact = () => {
    const { dict } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string | null }>({
        type: null,
        message: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Email sent successfully!' });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus({ type: 'error', message: data.error || 'Failed to send email.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: dict.contact.email,
            value: "contact@lecongtuan.dev",
            href: "mailto:contact@lecongtuan.dev",
            color: "text-blue-500 dark:text-blue-400"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: dict.contact.phone,
            value: "+84 123 456 789",
            href: "tel:+84123456789",
            color: "text-green-500 dark:text-green-400"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: dict.contact.location,
            value: "Ho Chi Minh City, Vietnam",
            href: "#",
            color: "text-purple-500 dark:text-purple-400"
        }
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 mx-auto">
                <SectionHeading title={dict.contact.title} subtitle={dict.contact.subtitle} center />

                <div className="grid lg:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-foreground">
                            {dict.contact.heading}
                        </h3>
                        <p className="text-muted-foreground text-lg mb-8">
                            {dict.contact.description}
                        </p>

                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <GlassCard key={index} className="p-4 flex items-center gap-4 hover:border-primary/50 transition-colors group cursor-pointer">
                                    <div className={`p-3 rounded-lg bg-white/60 dark:bg-white/5 group-hover:bg-white/80 dark:group-hover:bg-white/10 transition-colors ${item.color}`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">{item.label}</div>
                                        <div className="text-lg font-medium text-foreground">{item.value}</div>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">{dict.contact.form.name}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">{dict.contact.form.email}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">{dict.contact.form.subject}</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">{dict.contact.form.message}</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground/50"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                {status.message && (
                                    <div className={`p-3 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <MagneticButton
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : dict.contact.form.send} <Send className="ml-2 w-5 h-5" />
                                </MagneticButton>
                            </form>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

