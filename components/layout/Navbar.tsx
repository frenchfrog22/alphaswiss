"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-white/95 shadow-2xl border-b border-gray-200/20 py-3"
                    : "border-b border-white/20 py-4"
            )}
        >
            <div className="container mx-auto px-6 md:px-8 flex items-center">
                <Link href="/" className="flex items-center space-x-3 group">
                    <Image
                        src="/assets/logo_white.svg"
                        alt="AlphaSwiss Partners SA"
                        width={180}
                        height={60}
                        className={cn(
                            "transition-all duration-300",
                            isScrolled ? "brightness-0" : "brightness-100"
                        )}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
                    {["Solutions", "Platform", "About Us", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className={cn(
                                "px-4 py-2 rounded-xl text-lg font-semibold transition-all duration-300 relative group",
                                isScrolled
                                    ? "text-gray-700 hover:text-brand-primary hover:bg-brand-primary/10"
                                    : "text-white/90 hover:text-white hover:bg-white/10"
                            )}
                        >
                            <span className="relative z-10">{item}</span>
                            <div className={cn(
                                "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300",
                                isScrolled
                                    ? "bg-brand-primary/5 backdrop-blur-sm"
                                    : "bg-white/10 backdrop-blur-sm"
                            )} />
                        </Link>
                    ))}
                </div>

                {/* Enhanced Client Login Button - Completely Right */}
                <div className="hidden md:block ml-auto">
                    <button className={cn(
                        "px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden group",
                        isScrolled
                            ? "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg hover:shadow-xl"
                            : "bg-white/20 text-white border border-white/30 hover:bg-white/25 hover:border-white/40"
                    )}>
                        <span className="relative z-10">Login</span>
                        <div className={cn(
                            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            isScrolled
                                ? "bg-gradient-to-r from-brand-primary to-brand-secondary"
                                : "bg-gradient-to-r from-white/10 to-transparent"
                        )} />
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 rounded-xl transition-all duration-300",
                        isScrolled
                            ? "bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20"
                            : "backdrop-blur-md bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-white/95 border-t border-gray-200/20 shadow-2xl animate-in slide-in-from-top-5">
                    <div className="p-6 space-y-6">
                        {["Solutions", "Platform", "About Us", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                className="block py-3 px-4 rounded-xl text-base font-semibold text-gray-700 hover:text-brand-primary hover:bg-brand-primary/10 transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-gray-200/30">
                            <button
                                className="w-full py-3 px-6 rounded-xl bg-brand-primary text-white font-semibold shadow-lg hover:bg-brand-primary/90 transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
