"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { useLanguage } from "@/components/ui/LanguageProvider";
import Image from "next/image";

export const Hero = () => {
    const { dict } = useLanguage();

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />

            {/* Animated Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl z-0"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, -60, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl z-0"
            />

            <div className="container px-4 mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-6 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm text-muted-foreground">{dict.hero.available}</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                        {dict.hero.greeting} <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient">
                            Lê Công Tuấn
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-medium">
                        {dict.hero.role}
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                        {dict.hero.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <MagneticButton className="bg-primary text-primary-foreground hover:bg-primary/90">
                            {dict.hero.viewProjects}
                        </MagneticButton>
                        <MagneticButton className="border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-foreground whitespace-nowrap">
                            {dict.hero.downloadCV}
                        </MagneticButton>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-muted-foreground">
                        <a href="https://github.com/TuanStark" className="hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
                        <a href="https://www.linkedin.com/in/tuanstark/" className="hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
                    </div>
                </motion.div>

                {/* Visual Element / 3D Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Abstract Code Card */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* Window Header */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="ml-4 text-xs font-mono text-muted-foreground/50 flex gap-4">
                                    <span>portfolio.tsx</span>
                                    <span>style.css</span>
                                </div>
                            </div>

                            <div className="flex flex-1 overflow-hidden">
                                {/* Sidebar */}
                                <div className="w-12 border-r border-white/10 bg-black/5 flex flex-col items-center py-4 gap-4">
                                    <div className="w-6 h-6 rounded bg-white/10" />
                                    <div className="w-6 h-6 rounded bg-white/10" />
                                    <div className="w-6 h-6 rounded bg-white/10" />
                                    <div className="flex-1" />
                                    <div className="w-6 h-6 rounded bg-white/10" />
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 p-4 space-y-4 relative">
                                    {/* Code Lines */}
                                    <div className="space-y-2 font-mono text-xs opacity-70">
                                        <div className="flex gap-2">
                                            <span className="text-pink-500">const</span>
                                            <span className="text-blue-400">Developer</span>
                                            <span className="text-white">=</span>
                                            <span className="text-yellow-300">{"{"}</span>
                                        </div>
                                        <div className="pl-4 flex gap-2">
                                            <span className="text-blue-300">name:</span>
                                            <span className="text-green-400">"Lê Công Tuấn"</span>,
                                        </div>
                                        <div className="pl-4 flex gap-2">
                                            <span className="text-blue-300">role:</span>
                                            <span className="text-green-400">"Full Stack"</span>,
                                        </div>
                                        <div className="pl-4 flex gap-2">
                                            <span className="text-blue-300">experience:</span>
                                            <span className="text-green-400">"1+ years"</span>,
                                        </div>
                                        <div className="pl-4 flex gap-2">
                                            <span className="text-blue-300">projects:</span>
                                            <span className="text-green-400">"10+"</span>,
                                        </div>
                                        <div className="pl-4 flex gap-2">
                                            <span className="text-blue-300">clients:</span>
                                            <span className="text-green-400">"5+"</span>,
                                        </div>
                                    </div>

                                    {/* Images Grid */}


                                    <div className="space-y-2 font-mono text-xs opacity-70">
                                        <div className="text-yellow-300">{"}"}</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mt-4">
                                        <motion.div
                                            whileHover={{ scale: 2.5, zIndex: 50, rotate: -5 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative aspect-video rounded-lg overflow-hidden border border-white/10 shadow-lg group cursor-pointer bg-background"
                                        >
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                            <Image
                                                src="/hero-image.png"
                                                alt="Profile"
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 2.5, zIndex: 50, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative aspect-video rounded-lg overflow-hidden border border-white/10 shadow-lg group cursor-pointer bg-background"
                                        >
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                            <Image
                                                src="/github-images.png"
                                                alt="Stats"
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badges */}

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-4 right-4 flex gap-2"
                            >
                                <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono text-blue-400">
                                    React
                                </div>
                                <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono text-white">
                                    Next.js
                                </div>
                                <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono text-cyan-400">
                                    Tailwind CSS
                                </div>
                                <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono text-blue-500">
                                    TypeScript
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
