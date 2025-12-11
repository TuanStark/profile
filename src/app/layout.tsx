import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LanguageProvider } from "@/components/ui/LanguageProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lê Công Tuấn | Fullstack Developer",
  description: "Portfolio of Lê Công Tuấn, a Junior Fullstack Developer specializing in modern web technologies.",
  keywords: ["Next.js", "React", "TypeScript", "Fullstack", "Portfolio"],
  icons: {
    icon: "/logo-STA.png",
    shortcut: "/logo-STA.png",
    apple: "/logo-STA.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
