"use client";

import { useLanguage } from "@/components/ui/LanguageProvider";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === "en" ? "vi" : "en")}
            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium text-foreground"
        >
            {language === "en" ? "VI" : "EN"}
        </button>
    );
}
