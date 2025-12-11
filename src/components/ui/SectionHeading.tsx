"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    center?: boolean;
}

export const SectionHeading = ({ title, subtitle, className, center = false }: SectionHeadingProps) => {
    return (
        <div className={cn("mb-12", center && "text-center", className)}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold tracking-wider text-primary uppercase"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-2 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={cn(
                    "h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full",
                    center && "mx-auto"
                )}
            />
        </div>
    );
};
