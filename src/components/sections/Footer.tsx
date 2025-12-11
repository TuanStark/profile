"use client";

import { useLanguage } from "@/components/ui/LanguageProvider";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
    const { dict } = useLanguage();

    return (
        <footer className="py-8 border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Lê Công Tuấn. {dict.footer.rights}
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/TuanStark" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/tuanstark" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a> */}
                </div>
            </div>
        </footer>
    );
};
