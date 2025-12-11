"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/components/ui/LanguageProvider";

export const Projects = () => {
    const { dict } = useLanguage();

    const projects = [
        {
            title: "E-Commerce Platform",
            description: dict.projects.p1,
            tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
            links: { demo: "#", github: "#" },
            image: "bg-gradient-to-br from-purple-500 to-indigo-500"
        },
        {
            title: "Task Management App",
            description: dict.projects.p2,
            tags: ["React", "Redux", "Node.js", "Socket.io"],
            links: { demo: "#", github: "#" },
            image: "bg-gradient-to-br from-emerald-500 to-teal-500"
        },
        {
            title: "AI Content Generator",
            description: dict.projects.p3,
            tags: ["OpenAI API", "Next.js", "Tailwind CSS"],
            links: { demo: "#", github: "#" },
            image: "bg-gradient-to-br from-orange-500 to-red-500"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="container px-4 mx-auto">
                <SectionHeading title={dict.projects.title} subtitle={dict.projects.subtitle} center />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <GlassCard className="h-full overflow-hidden group hover-effect p-0">
                                {/* Project Image Placeholder */}
                                <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <a
                                            href={project.links.github}
                                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <Github className="w-4 h-4" /> Code
                                        </a>
                                        <a
                                            href={project.links.demo}
                                            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors ml-auto"
                                        >
                                            Live Demo <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
