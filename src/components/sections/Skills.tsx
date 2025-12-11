"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { useLanguage } from "@/components/ui/LanguageProvider";

export const Skills = () => {
    const { dict } = useLanguage();

    const skillCategories = [
        {
            title: dict.skills.frontend,
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: dict.skills.backend,
            skills: ["Node.js", "NestJS", "Express", "PostgreSQL", "Prisma", "Redis"],
            color: "from-green-500 to-emerald-500"
        },
        {
            title: dict.skills.devops,
            skills: ["Docker", "Git", "CI/CD", "Linux", "AWS Basics", "Nginx"],
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="container px-4 mx-auto">
                <SectionHeading title={dict.skills.title} subtitle={dict.skills.subtitle} center />

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <GlassCard className="h-full p-6 hover-effect">
                                <div className={`h-1 w-20 bg-gradient-to-r ${category.color} rounded-full mb-6`} />
                                <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
