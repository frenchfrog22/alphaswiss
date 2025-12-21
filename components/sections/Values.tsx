"use client";

import { PieChart, TrendingUp, BarChart3, Award, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const offerings = [
    {
        title: "Bespoke Wealth Mandates",
        description: "We craft fully personalized investment strategies tailored to your unique objectives, risk profiles and values.",
        icon: PieChart,
        className: "md:col-span-1",
        gradient: "from-brand-primary/5 to-brand-primary/10",
        performanceData: "Rank 2 in peer group (3-year): 31% vs 27% average",
        badge: "Top Performer"
    },
    {
        title: "Private Market Access",
        description: "We provide carefully selected opportunities with enhanced return potential, positioned for growth across generations.",
        icon: TrendingUp,
        className: "md:col-span-1",
        gradient: "from-brand-secondary/5 to-brand-secondary/10",
        performanceData: "50+ successful exits • 2.17x avg MOIC",
        badge: "Exclusive Access"
    },
    {
        title: "Comprehensive Global Reporting",
        description: "You receive transparent, consolidated reporting across all asset classes giving you complete clarity and control.",
        icon: BarChart3,
        className: "md:col-span-1",
        gradient: "from-brand-tertiary/5 to-brand-tertiary/10",
        performanceData: "Real-time • Swiss security standards",
        badge: "Full Transparency"
    },
];

export function Values() {
    return (
        <section id="solutions" className="py-32 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-sans font-bold text-black mb-6"
                    >
                        The steady pillars to generational freedom
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 leading-relaxed"
                    >
                        Our offering is built entirely around your needs and aspirations. We create personalized strategies that reflect your goals and values, provide access to exceptional investment opportunities and maintain full visibility at all times.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(300px,auto)]">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={offering.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:shadow-xl border border-gray-100",
                                "bg-gradient-to-br",
                                offering.gradient,
                                offering.className
                            )}
                        >
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <offering.icon className="w-6 h-6 text-brand-primary" />
                                        </div>
                                        <span className="text-xs px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full font-medium">
                                            {offering.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-3">{offering.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                        {offering.description}
                                    </p>
                                    <div className="bg-white/50 rounded-lg p-3 border border-gray-200">
                                        <p className="text-xs font-medium text-brand-primary uppercase tracking-wider mb-1">Performance</p>
                                        <p className="text-sm font-semibold text-gray-800">{offering.performanceData}</p>
                                    </div>
                                </div>

                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center text-brand-primary font-medium text-sm">
                                    Learn more <div className="w-4 h-[1px] bg-brand-primary ml-2" />
                                </div>
                            </div>

                            {/* Hover Effect Background */}
                            <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
