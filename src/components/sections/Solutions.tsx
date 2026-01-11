import { motion } from "framer-motion";
import { TrendingUp, Target, Shield, BarChart3 } from "lucide-react";

const facets = [
    {
        number: "1",
        title: "Great performance in liquid markets",
        description: "Our portfolio managers focus on delivering above-peer returns through independent thinking and unbiased decision-making",
        icon: TrendingUp,
        numberColor: "#C5CDD9",
        backColor: "#C5CDD9",
    },
    {
        number: "2",
        title: "Direct Investments in venture capital",
        description: "With a proven track records, we offer specialized capabilities in actively sourcing individual private equity deals to our clients",
        icon: Target,
        numberColor: "#9AA6BA",
        backColor: "#9AA6BA",
    },
    {
        number: "3",
        title: "Swiss steadiness for peace of mind",
        description: "We find and match the solidity, execution and commercial terms of custodian banks based on client's needs",
        icon: Shield,
        numberColor: "#7B8AA4",
        backColor: "#7B8AA4",
    },
    {
        number: "4",
        title: "Reporting & digital platform",
        description: "Investing in technology, we deliver the sophistication of global banks with the personal touch of a boutique firms",
        icon: BarChart3,
        numberColor: "#4A4F5E",
        backColor: "#4A4F5E",
    },
];

export function Solutions() {
    return (
        <section id="solutions" className="bg-white py-32">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-slate-700 text-white text-sm font-medium mb-8 uppercase tracking-wide px-4 py-2 rounded-sm shadow-md"
                    >
                        What we offer
                    </motion.h2>
                </div>

                {/* Title and Subtitle */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-12 ">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl lg:text-5xl font-light text-gray-900 max-w-4xl leading-tight md:leading-snug"
                    >
                        <span className="font-semibold">Four solutions</span> that set us apart and support investors with excellence
                    </motion.h1>
                </div>

                {/* Facets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facets.map((facet, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="perspective-1000"
                            style={{ perspective: "1000px" }}
                        >
                            <div className="group relative preserve-3d transition-transform duration-700 hover:rotate-y-180">
                                {/* Front of card */}
                                <div className="bg-gray-50 rounded-2xl p-8 flex flex-col min-h-[320px] backface-hidden shadow-sm">
                                    <div
                                        className="text-5xl font-bold mb-6"
                                        style={{ color: facet.numberColor }}
                                    >
                                        {facet.number}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-900 mb-4 leading-tight">
                                            {facet.title}
                                        </h3>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {facet.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Back of card - shown on flip */}
                                <div
                                    className="absolute inset-0 backface-hidden rounded-2xl p-8 flex items-center justify-center shadow-lg rotate-y-180"
                                    style={{
                                        backgroundColor: facet.backColor,
                                        transform: "rotateY(180deg)",
                                    }}>
                                    <div className="text-center text-white">
                                        <facet.icon className="w-24 h-24 mx-auto opacity-90" strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* How We Differ Section */}
                <div className="mt-32 flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block bg-slate-700 text-white text-sm font-medium mb-8 uppercase tracking-wide px-4 py-2 rounded-sm shadow-md"

                        >
                            How we differ
                        </motion.h2>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight"
                        >
                            A <span className="font-bold">unique and dynamic </span> synergy of wealth services
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base text-gray-600 leading-relaxed"
                        >
                            Our unique value proposition seamlessly integrates the strategic power of a <span className="font-bold">multifamily office</span>, the precision of <span className="font-bold">wealth management</span>, and the forward-thinking energy of a <span className="font-bold">venture capital firm</span>. This hybrid model was inspired directly by our clients—visionary entrepreneurs who dedicate 200% of their energy to their core businesses.
                        </motion.p>
                    </div>

                    {/* Right Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <video
                                className="w-full h-auto object-cover"
                                controls
                                playsInline
                                preload="metadata"
                                poster="/assets/poster.png"
                            >
                                <source src="/assets/Alphaswiss-10Y.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
