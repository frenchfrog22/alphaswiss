import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "AlphaSwiss Partners SA | Independent Wealth Management",
    description: "Preserving Wealth. Empowering Freedom. Swiss excellence in independent wealth management built entirely around your needs and aspirations. Bespoke mandates, private market access, and comprehensive global reporting.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                inter.variable
            )}>
                {children}
            </body>
        </html>
    );
}
