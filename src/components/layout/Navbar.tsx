import * as React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-[#1E202E]/95 shadow-2xl border-b border-gray-200/20 py-1.5"
                    : "border-b border-white/20 py-2"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center">
                <a href="/" className="flex items-center space-x-3 group">
                    <img
                        src="/assets/logo_white.svg"
                        alt="AlphaSwiss Partners SA"
                        width={144}
                        height={48}
                        className={cn(
                            "transition-all duration-300",
                            "brightness-100"
                        )}
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
                    {[
                        { label: "Services", href: "#services" },
                        { label: "Ventures", href: "#ventures" },
                        { label: "Platform", href: "#platform" },
                        { label: "The Team", href: "#contact" }
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "px-3 py-1.5 rounded-xl text-sm font-semibold transition-all duration-300 relative group",
                                isScrolled
                                    ? "text-white/90 hover:text-white hover:bg-white/10"
                                    : "text-white/90 hover:text-white hover:bg-white/10"
                            )}
                        >
                            <span className="relative z-10">{item.label}</span>
                            <div className={cn(
                                "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300",
                                isScrolled
                                    ? "bg-brand-primary/5 backdrop-blur-sm"
                                    : "bg-white/10 backdrop-blur-sm"
                            )} />
                        </a>
                    ))}
                </div>

                {/* Enhanced Client Login Button - Completely Right */}
                <div className="hidden md:block ml-auto">
                    <button className={cn(
                        "px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden group",
                        isScrolled
                            ? "bg-white/20 text-white border border-white/30 hover:bg-white/25 hover:border-white/40"
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
                        "md:hidden p-1.5 rounded-xl transition-all duration-300",
                        isScrolled
                            ? "backdrop-blur-md bg-white/10 text-white hover:bg-white/20 border border-white/20"
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
                <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-[#1E202E]/95 border-t border-gray-200/20 shadow-2xl animate-in slide-in-from-top-5">
                    <div className="p-4 space-y-4">
                        {[
                            { label: "Services", href: "#services" },
                            { label: "Ventures", href: "#ventures" },
                            { label: "Platform", href: "#platform" },
                            { label: "The Team", href: "#contact" }
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block py-2 px-3 rounded-xl text-sm font-semibold text-white hover:text-white hover:bg-white/10 transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="pt-3 border-t border-gray-200/30">
                            <button
                                className="w-full py-2 px-4 rounded-xl bg-white/20 text-white font-semibold border border-white/30 hover:bg-white/25 hover:border-white/40 transition-all duration-300"
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
