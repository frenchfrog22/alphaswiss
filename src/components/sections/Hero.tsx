import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden text-white flex items-center justify-center">
            {/* Background - Video if available, fallback to gradient */}
            <div className="absolute inset-0 z-0">
                {/* Fallback gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E202E] via-[#2A2D3F] to-[#22223A]"></div>

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    onError={() => console.log('Video not found, using gradient background')}
                >
                    <source src="/assets/background_video.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30 z-20" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center max-w-6xl mx-auto">
                {/* Glassmorphism Content Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="p-8 md:p-12 max-w-5xl"
                >
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-white/90 font-light tracking-widest text-xs uppercase"
                        >
                            Swiss Excellence in Wealth Management
                        </motion.h2>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-sans font-semibold tracking-tight leading-tight text-center"
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
                            className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-light"
                        >
                            We combine traditional Swiss solidity with modern investment strategies to provide you with peace of mind and financial serenity.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="flex items-center justify-center 2"
                        >
                            {/* Glass Button - Primary */}
                            <button className="group relative min-w-[160px] px-6 py-3 overflow-hidden rounded-xl backdrop-blur-md bg-white/20 border border-white/30 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/25 hover:border-white/40 hover:scale-105 hover:shadow-xl">
                                <span className="relative z-10">Explore Our Approach</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
