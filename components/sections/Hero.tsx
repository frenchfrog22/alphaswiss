"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden text-white flex items-center justify-center">
            {/* Video Background Only */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/assets/background_video.mp4" type="video/mp4" />
                </video>

                {/* Minimal dark overlay only for text readability */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                {/* Glassmorphism Content Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="p-8 md:p-12 max-w-5xl"
                >
                    <div className="space-y-8">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-white/90 font-medium tracking-widest text-sm uppercase"
                        >
                            Swiss Excellence in Wealth Management
                        </motion.h2>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight leading-tight text-center"
                        >
                            Preserving Wealth.
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/80">
                                Empowering Freedom.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                        >
                            We combine traditional Swiss solidity with modern investment strategies to provide you with peace of mind and financial serenity.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="flex items-center justify-center pt-6"
                        >
                            {/* Glass Button - Primary */}
                            <button className="group relative min-w-[200px] px-8 py-4 overflow-hidden rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 text-white font-semibold text-base transition-all duration-300 hover:bg-white/25 hover:border-white/40 hover:scale-105 hover:shadow-xl">
                                <span className="relative z-10">Explore Our Approach</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>


            {/* Glass Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-3 shadow-lg">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-8 bg-gradient-to-b from-white/80 via-white/40 to-transparent rounded-full"
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="text-xs text-white/60 mt-2 tracking-wider"
                >
                    SCROLL
                </motion.p>
            </motion.div>
        </section>
    );
}
