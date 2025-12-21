"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Receipt, Shield, Network, CheckCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const principles = [
    {
        id: "transparency",
        title: "Fee Transparency",
        description: "Our compensation structure is fully disclosed – you know exactly what you pay and what you receive in return. No hidden fees.",
        icon: Receipt,
        details: "Complete transparency in all fee structures and compensation models",
        features: ["All-inclusive fee disclosure", "No hidden charges", "Clear performance reporting", "Regular fee reviews"]
    },
    {
        id: "conflict",
        title: "No Conflict of Interest",
        description: "As clearly stated in our contracts, we have no incentive from third parties, ensuring our recommendations are driven solely by your financial success.",
        icon: Shield,
        details: "Contractually bound independence with no third-party incentives",
        features: ["No proprietary product bias", "Independent research", "Objective advice", "Client-first approach"]
    },
    {
        id: "architecture",
        title: "Open Architecture",
        description: "We select from the entire market of investment solutions, unrestricted by proprietary products, institutional targets or biased preferences.",
        icon: Network,
        details: "Access to global investment universe without restrictions",
        features: ["Best-in-class selection", "Global market access", "Unbiased recommendations", "Flexible solutions"]
    },
];

export function Services() {
    const [activeService, setActiveService] = useState(principles[0].id);

    return (
        <section id="independence" className="py-32 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-4xl mx-auto">

                    {/* Accordion */}
                    <div className="w-full space-y-8">
                        <div>
                            <h2 className="text-4xl font-sans font-bold text-black mb-4">
                                Expertise at Your Service
                            </h2>
                            <p className="text-gray-600 text-lg">
                                We offer a full spectrum of financial services designed to meet the complex needs of private clients and families.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {principles.map((principle) => (
                                <div
                                    key={principle.id}
                                    className={cn(
                                        "border-b border-gray-200 pb-4 transition-all duration-300",
                                        activeService === principle.id ? "opacity-100" : "opacity-60 hover:opacity-80"
                                    )}
                                >
                                    <button
                                        onClick={() => setActiveService(principle.id)}
                                        className="w-full flex items-center justify-between py-4 text-left group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={cn(
                                                "p-2 rounded-lg transition-colors duration-300",
                                                activeService === principle.id ? "bg-brand-primary text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                                            )}>
                                                <principle.icon className="w-5 h-5" />
                                            </div>
                                            <h3 className={cn(
                                                "text-xl font-bold transition-colors duration-300",
                                                activeService === principle.id ? "text-black" : "text-gray-500"
                                            )}>
                                                {principle.title}
                                            </h3>
                                        </div>
                                        <ChevronDown className={cn(
                                            "w-5 h-5 transition-transform duration-300",
                                            activeService === principle.id ? "rotate-180 text-black" : "text-gray-400"
                                        )} />
                                    </button>

                                    <AnimatePresence>
                                        {activeService === principle.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-gray-600 leading-relaxed pt-2 pb-4 pl-[60px]">
                                                    {principle.description}
                                                </p>
                                                <div className="pl-[60px] pb-2">
                                                    <Button variant="link" className="p-0 h-auto text-brand-secondary hover:text-brand-tertiary">
                                                        Learn more <ArrowRight className="ml-2 w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
