"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = false, ...props }: GlassCardProps) => {
    return (
        <motion.div
            className={cn(
                "backdrop-blur-md bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none transition-all duration-300",
                hoverEffect && "hover:bg-white/80 dark:hover:bg-white/10 hover:scale-[1.02] hover:shadow-md dark:hover:shadow-none",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};
