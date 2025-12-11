"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { useLanguage } from "@/components/ui/LanguageProvider";

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
                            {dict.hero.viewProjects} <ArrowRight className="ml-2 h-4 w-4" />
                        </MagneticButton>
                        <MagneticButton className="border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-foreground">
                            {dict.hero.downloadCV} <Download className="ml-2 h-4 w-4" />
                        </MagneticButton>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Mail className="h-6 w-6" /></a>
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
                            className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 p-6 shadow-2xl"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-3 font-mono text-sm">
                                <div className="h-4 bg-black/5 dark:bg-white/10 rounded w-3/4" />
                                <div className="h-4 bg-black/5 dark:bg-white/10 rounded w-1/2" />
                                <div className="h-4 bg-black/5 dark:bg-white/10 rounded w-5/6" />
                                <div className="h-4 bg-primary/20 rounded w-full mt-4" />
                                <div className="h-4 bg-primary/20 rounded w-2/3" />
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -right-8 -top-8 p-4 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-xl border border-black/5 dark:border-white/10 shadow-xl"
                            >
                                <span className="text-blue-500 dark:text-blue-400 font-bold">React</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -left-8 -bottom-8 p-4 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-xl border border-black/5 dark:border-white/10 shadow-xl"
                            >
                                <span className="text-yellow-500 dark:text-yellow-400 font-bold">TypeScript</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
