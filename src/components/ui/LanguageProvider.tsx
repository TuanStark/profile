"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Language, Dictionary } from "@/lib/dictionaries";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    return (
        <LanguageContext.Provider value={{ language, setLanguage, dict: dictionaries[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
