"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/components/ui/LanguageProvider";

export const Experience = () => {
    const { dict } = useLanguage();

    const experiences = [
        {
            role: "Junior Fullstack Developer",
            company: "Tech Company Inc.",
            location: "Ho Chi Minh City",
            period: `2023 - ${dict.experience.present} `,
            description: "Developing and maintaining web applications using React and NestJS. Collaborating with cross-functional teams to deliver high-quality software."
        },
        {
            role: "Frontend Intern",
            company: "StartUp Lab",
            location: "Remote",
            period: "2022 - 2023",
            description: "Assisted in building responsive user interfaces. Learned best practices in React and state management."
        }
    ];

    return (
        <section id="experience" className="py-24 relative">
            <div className="container px-4 mx-auto">
                <SectionHeading title={dict.experience.title} subtitle={dict.experience.subtitle} center />

                <div className="max-w-3xl mx-auto mt-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent transform -translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex - col md: flex - row gap - 8 relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""} `}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 mt-6 z-10 shadow-[0_0_10px_theme(colors.primary.DEFAULT)]" />

                                <div className="md:w-1/2 pl-8 md:pl-0">
                                    <GlassCard className="p-6 hover-effect relative">
                                        <div className={`absolute top - 6 ${index % 2 === 0 ? "md:-left-2 md:border-l-0 md:border-b-0" : "md:-right-2 md:border-r-0 md:border-t-0"} w - 4 h - 4 bg - black / 40 border border - white / 10 transform rotate - 45 hidden md: block`} />

                                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                        <div className="text-primary font-medium mb-2">{exp.company}</div>

                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {exp.location}
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm">
                                            {exp.description}
                                        </p>
                                    </GlassCard>
                                </div>
                                <div className="md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

