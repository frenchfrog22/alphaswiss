import { motion } from "framer-motion";
import { TrendingUp, Award, Shield, Smartphone, Building, CheckCircle } from "lucide-react";
import { cn } from "../../lib/utils";

const differentiators = [
    {
        title: "Great Performance in Liquid Markets",
        description: "Our portfolio managers focus on delivering above-peer returns through independent thinking and unbiased decision-making",
        icon: TrendingUp,
        details: "Great performance in liquid markets reflects the stability of our offering",
        stats: "Rank 1 in peer group (2025): 6.9% vs 5.2% average",
        color: "brand-primary"
    },
    {
        title: "Direct Investments in Venture Capital",
        description: "With a proven track record, we offer specialized capabilities in actively sourcing individual private equity deals to our clients",
        icon: Award,
        details: "50+ successful exits with strong MOIC and IRR performance",
        stats: "DocuSign: 2.17x MOIC • Palantir: 3.23x MOIC",
        color: "brand-secondary"
    },
    {
        title: "Swiss Steadiness for Peace of Mind",
        description: "We find and match the solidity, execution and commercial terms of custodian banks based on client's needs",
        icon: Shield,
        details: "Partnership with Switzerland's most respected custodian banks",
        stats: "30-27% capital ratio banks: UBP, Pictet, Lombard Odier",
        color: "brand-tertiary"
    },
    {
        title: "Reporting & Digital Platform",
        description: "Investing in technology, we deliver the sophistication of global banks with the personal touch of a boutique firm",
        icon: Smartphone,
        details: "Real-time reporting, mobile-first experience, Swiss security standards",
        stats: "Consolidated global reporting • Mobile platform",
        color: "brand-primary"
    }
];

const custodianBanks = [
    { name: "UBP", ratio: "30-27%", tier: "Most Secure" },
    { name: "Pictet", ratio: "30-27%", tier: "Most Secure" },
    { name: "Lombard Odier", ratio: "30-27%", tier: "Most Secure" },
    { name: "Vontobel", ratio: "17-15%", tier: "Secure" },
    { name: "Morgan Stanley", ratio: "17-15%", tier: "Secure" },
];

export function Platform() {
    return (
        <section id="platform" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-sans font-bold text-black mb-4"
                    >
                        We differentiate ourselves through four essential facets
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-600 leading-relaxed"
                    >
                        Our platform combines performance excellence with Swiss reliability to deliver unmatched value to qualified investors.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group bg-white rounded-3xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-500"
                        >
                            <div className="flex items-start gap-4">
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500",
                                    item.color === "brand-primary" && "bg-brand-primary/10",
                                    item.color === "brand-secondary" && "bg-brand-secondary/10",
                                    item.color === "brand-tertiary" && "bg-brand-tertiary/10"
                                )}>
                                    <item.icon className={cn(
                                        "w-7 h-7",
                                        item.color === "brand-primary" && "text-brand-primary",
                                        item.color === "brand-secondary" && "text-brand-secondary",
                                        item.color === "brand-tertiary" && "text-brand-tertiary"
                                    )} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
                                    <p className="text-xs text-gray-500 italic mb-2">{item.details}</p>
                                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Key Metrics</p>
                                        <p className="text-xs font-semibold text-gray-800">{item.stats}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Swiss Custodian Banks Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                            <Building className="w-7 h-7 text-brand-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-black mb-2">Swiss Banking Excellence</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                Not all banks are equal. We select custodian partners based on capital ratios and risk profiles to ensure maximum security for your assets.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {custodianBanks.map((bank, index) => (
                                    <div key={bank.name} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{bank.name}</p>
                                            <p className="text-xs text-gray-500">{bank.ratio} capital ratio</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-3 p-3 bg-brand-primary/5 rounded-lg border border-brand-primary/20">
                                <p className="text-sm text-brand-primary font-medium">
                                    Our selected partners maintain capital ratios significantly above industry standards, providing you with unmatched financial security.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}