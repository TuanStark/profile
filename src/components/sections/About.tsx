"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { Code2, Coffee, Laptop, User } from "lucide-react";
import { useLanguage } from "@/components/ui/LanguageProvider";

export const About = () => {
    const { dict } = useLanguage();

    const stats = [
        { label: dict.about.stats.experience, value: "1+", icon: <Laptop className="w-5 h-5 text-primary" /> },
        { label: dict.about.stats.projects, value: "10+", icon: <Code2 className="w-5 h-5 text-secondary" /> },
        { label: dict.about.stats.clients, value: "5+", icon: <User className="w-5 h-5 text-accent" /> },
        { label: dict.about.stats.coffee, value: "∞", icon: <Coffee className="w-5 h-5 text-yellow-500" /> },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <SectionHeading title={dict.about.title} subtitle={dict.about.subtitle} center />

                <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
                    {/* Image/Visual Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                            {/* Placeholder for Profile Image */}
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-muted-foreground">
                                <img src="/avatar.png" alt="" className="w-full h-full object-contain" />
                            </div>

                            <div className="absolute bottom-6 left-6 z-20">
                                <h3 className="text-2xl font-bold text-white">Lê Công Tuấn</h3>
                                <p className="text-primary">Fullstack Developer</p>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-2xl" />
                        <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full bg-secondary/5 rounded-2xl" />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold mb-6 text-foreground">
                            {dict.about.heading} <span className="text-primary">{dict.about.headingHighlight}</span>
                        </h3>

                        <div className="space-y-4 text-muted-foreground text-lg mb-8">
                            <p>
                                {dict.about.p1}
                            </p>
                            <p>
                                {dict.about.p2}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <GlassCard key={index} className="p-4 flex items-center gap-4 hover:border-primary/50 transition-colors">
                                    <div className="p-3 bg-white/60 dark:bg-white/5 rounded-lg shadow-sm dark:shadow-none">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
