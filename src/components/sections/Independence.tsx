import { useState } from "react";
import { motion } from "framer-motion";
import { Receipt, Shield, Network, CheckCircle } from "lucide-react";
import { cn } from "../../lib/utils";

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

export function Independence() {
    const [activePrinciple, setActivePrinciple] = useState(principles[0].id);

    return (
        <section id="independence" className="py-24 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">

                    {/* Left Column: Accordion */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <div>
                            <h2 className="text-2xl font-sans font-bold text-black mb-3">
                                Independence is our primary value
                            </h2>
                            <p className="text-gray-600 text-base">
                                We are not tied to any institution. Rather, we manage your best interests in close partnership with your custodian banks to deliver unbiased advice and personalized wealth solutions.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {principles.map((principle) => (
                                <div
                                    key={principle.id}
                                    className={cn(
                                        "border-b border-gray-200 pb-4 transition-all duration-300",
                                        activePrinciple === principle.id ? "opacity-100" : "opacity-60 hover:opacity-80"
                                    )}
                                >
                                    <button
                                        onClick={() => setActivePrinciple(principle.id)}
                                        className="w-full flex items-center justify-between py-4 text-left group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                "p-2 rounded-lg transition-colors duration-300",
                                                activePrinciple === principle.id ? "bg-brand-primary text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                                            )}>
                                                <principle.icon className="w-5 h-5" />
                                            </div>
                                            <h3 className={cn(
                                                "text-lg font-bold transition-colors duration-300",
                                                activePrinciple === principle.id ? "text-black" : "text-gray-500"
                                            )}>
                                                {principle.title}
                                            </h3>
                                        </div>
                                    </button>

                                    {activePrinciple === principle.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-2 pb-3 pl-[60px] space-y-3">
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {principle.description}
                                                </p>
                                                <p className="text-xs text-gray-500 italic">
                                                    {principle.details}
                                                </p>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {principle.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-center gap-2">
                                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                                            <span className="text-xs text-gray-600">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Independence Visual */}
                    <div className="w-full md:w-1/2 relative h-[480px] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary hidden md:flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        <div className="text-center text-white z-10 px-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mb-6"
                            >
                                <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4">
                                    <Shield className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">True Independence</h3>
                                <p className="text-white/90 text-base leading-relaxed">
                                    No conflicts. No hidden fees. No proprietary bias. Just pure, uncompromising dedication to your financial success.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20"
                            >
                                <p className="text-xs text-white/80 mb-1">Our Commitment</p>
                                <p className="text-sm text-white font-medium">
                                    "We intend to offer our clients the sophistication of a global bank with the personal touch of a boutique firm."
                                </p>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}