import { motion } from "framer-motion";
import {
    BarChart3,
    TrendingUp,
    PieChart,
    Smartphone,
    FileText,
    Activity,
    DollarSign,
    Shield,
    Calendar,
    Eye,
    LineChart
} from "lucide-react";

const reportingFeatures = [
    {
        number: "1",
        title: "Transparent allocation details",
        description: "Complete visibility across asset classes and geographical exposure",
        icon: PieChart,
    },
    {
        number: "2",
        title: "Performance tracking & contribution",
        description: "Real-time performance metrics with attribution analysis",
        icon: TrendingUp,
    },
    {
        number: "3",
        title: "Risk factors & statistical analysis",
        description: "Comprehensive risk assessment with advanced analytics",
        icon: Activity,
    },
    {
        number: "4",
        title: "Sensitivity & stress testing",
        description: "Scenario analysis and portfolio resilience evaluation",
        icon: BarChart3,
    },
    {
        number: "5",
        title: "Tax reporting by jurisdiction",
        description: "Multi-jurisdiction tax optimization and compliance reporting",
        icon: FileText,
    },
    {
        number: "6",
        title: "Cashflow & liquidity forecast",
        description: "Forward-looking liquidity analysis and planning tools",
        icon: Calendar,
    },
];

export function Platform() {
    return (
        <section id="platform" className="relative py-32 overflow-hidden" style={{ backgroundColor: '#1E202E' }}>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-sm font-medium mb-8 uppercase tracking-wide px-4 py-2 rounded-sm shadow-lg"
                        style={{ backgroundColor: "#FFFFFF", color: "#1E202E" }}
                    >
                        Reporting & Platform
                    </motion.h2>

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="lg:w-1/2"
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                                <span className="font-semibold">One clear view</span> of your entire financial landscape
                            </h1>
                            <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                Understanding your wealth should be effortless, not complicated. Our comprehensive reporting system provides you with complete visibility across every asset class and jurisdiction - from traditional portfolios and private market holdings to real estate, art and beyond.
                            </p>

                            {/* Global Reporting Features - Compact List */}
                            <div className="space-y-4">

                                {reportingFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mt-1">
                                            <feature.icon className="w-4 h-4 text-slate-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-semibold text-white group-hover:text-slate-200 transition-colors mb-1">
                                                {feature.title}
                                            </h4>
                                            <p className="text-sm text-slate-300/80 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Mobile App Preview */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="lg:w-1/2 flex justify-center"
                        >
                            <div className="relative w-[360px]">
                                {/* Phone Frame - Same aspect ratio, larger size */}
                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-[3px] border-gray-700">
                                    <div className="bg-slate-900 rounded-[2rem] overflow-hidden">
                                        {/* Notch */}
                                        <div className="bg-white h-6 flex items-center justify-center">
                                            <div className="w-28 h-4 bg-gray-900 rounded-b-xl"></div>
                                        </div>
                                        {/* Screen Content */}
                                        <div className="bg-white p-5 h-[620px] overflow-hidden">
                                            {/* Header */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="text-gray-900 text-sm font-bold">Portfolio Overview</div>
                                                <Smartphone className="w-4 h-4 text-gray-600" />
                                            </div>

                                            {/* Total Value Card */}
                                            <div className="rounded-2xl p-4 mb-5 shadow-lg" style={{ backgroundColor: '#7B8AA4' }}>
                                                <div className="text-white/80 text-xs mb-1">Total Assets</div>
                                                <div className="text-white text-3xl font-bold mb-2">CHF 12.4M</div>
                                                <div className="flex items-center gap-2">
                                                    <div className="bg-white/20 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 font-semibold">
                                                        <TrendingUp className="w-3 h-3" />
                                                        +8.3% YTD
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Allocation Title */}
                                            <div className="text-gray-900 text-xs font-semibold mb-3 uppercase tracking-wide">Asset Allocation</div>

                                            {/* Pie Chart */}
                                            <div className="relative w-40 h-40 mx-auto mb-5">
                                                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                                                    {/* Equities - 42% (151.2 degrees) */}
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        fill="transparent"
                                                        stroke="#3D4050"
                                                        strokeWidth="20"
                                                        strokeDasharray="105.84 251.2"
                                                        strokeDashoffset="0"
                                                    />
                                                    {/* Fixed Income - 28% (100.8 degrees) */}
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        fill="transparent"
                                                        stroke="#6B7288"
                                                        strokeWidth="20"
                                                        strokeDasharray="70.34 251.2"
                                                        strokeDashoffset="-105.84"
                                                    />
                                                    {/* Alternatives - 25% (72 degrees) */}
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        fill="transparent"
                                                        stroke="#8B94AB"
                                                        strokeWidth="20"
                                                        strokeDasharray="50.24 251.2"
                                                        strokeDashoffset="-176.18"
                                                    />
                                                    {/* Cash & others - 10% (36 degrees) */}
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        fill="transparent"
                                                        stroke="#B4BBCC"
                                                        strokeWidth="20"
                                                        strokeDasharray="25.12 251.2"
                                                        strokeDashoffset="-226.42"
                                                    />
                                                </svg>
                                            </div>

                                            {/* Legend */}
                                            <div className="space-y-2.5">
                                                {[
                                                    { name: "Equities", value: "42%", color: "#3D4050" },
                                                    { name: "Fixed Income", value: "28%", color: "#6B7288" },
                                                    { name: "Alternatives", value: "25%", color: "#8B94AB" },
                                                    { name: "Cash & others", value: "5%", color: "#B4BBCC" },
                                                ].map((asset, idx) => (
                                                    <div key={idx} className="bg-gray-50 rounded-lg p-2.5 flex items-center justify-between border border-gray-100">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: asset.color }}></div>
                                                            <div className="text-gray-900 text-xs font-medium">{asset.name}</div>
                                                        </div>
                                                        <div className="text-gray-700 text-xs font-bold">{asset.value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-blue-500/20 rounded-[3rem] blur-2xl -z-10"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Dashboard Widgets Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Portfolio Performance Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(139, 148, 171, 0.2)' }}>
                                    <LineChart className="w-5 h-5" style={{ color: '#8B94AB' }} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Portfolio Performance</h4>
                                    <p className="text-slate-300 text-xs">Last 12 months</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-white text-xl font-bold">+12.8%</div>
                                <div className="text-slate-300 text-xs">vs +8.4% benchmark</div>
                            </div>
                        </div>
                        {/* Mock Chart */}
                        <div className="relative h-32 flex items-end gap-1">
                            {[45, 52, 48, 58, 65, 62, 70, 68, 75, 72, 78, 82].map((height, idx) => (
                                <div
                                    key={idx}
                                    className="flex-1 rounded-t"
                                    style={{
                                        height: `${height}%`,
                                        background: `linear-gradient(to top, rgba(61, 64, 80, 0.7), rgba(61, 64, 80, 0.4))`
                                    }}
                                ></div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Asset Allocation Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(107, 114, 136, 0.2)' }}>
                                <PieChart className="w-5 h-5" style={{ color: '#6B7288' }} />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Asset Mix</h4>
                                <p className="text-slate-300 text-xs">Current allocation</p>
                            </div>
                        </div>
                        {/* Mock Pie Chart Segments */}
                        <div className="space-y-3">
                            {[
                                { label: "Equities", value: "42%", color: "#3D4050" },
                                { label: "Bonds", value: "28%", color: "#6B7288" },
                                { label: "Alternatives", value: "25%", color: "#8B94AB" },
                                { label: "Cash & others", value: "5%", color: "#B4BBCC" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                        <span className="text-white text-sm">{item.label}</span>
                                    </div>
                                    <span className="text-slate-300 font-semibold text-sm">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Risk Metrics Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 min-h-[320px]"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(123, 138, 164, 0.2)' }}>
                                <Shield className="w-5 h-5" style={{ color: '#7B8AA4' }} />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Risk Analysis</h4>
                                <p className="text-slate-300 text-xs">Portfolio metrics</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-slate-300 text-sm">Volatility</span>
                                    <span className="text-white font-semibold text-sm">8.2%</span>
                                </div>
                                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full rounded-full" style={{ width: '41%', background: 'linear-gradient(to right, #B4BBCC, #8B94AB)' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-slate-300 text-sm">Sharpe Ratio</span>
                                    <span className="text-white font-semibold text-sm">1.56</span>
                                </div>
                                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full rounded-full" style={{ width: '78%', background: 'linear-gradient(to right, #8B94AB, #6B7288)' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-slate-300 text-sm">Max Drawdown</span>
                                    <span className="text-white font-semibold text-sm">-5.3%</span>
                                </div>
                                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full rounded-full" style={{ width: '26.5%', background: 'linear-gradient(to right, #6B7288, #3D4050)' }}></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Multi-Currency Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 min-h-[320px]"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(139, 148, 171, 0.2)' }}>
                                <DollarSign className="w-5 h-5" style={{ color: '#8B94AB' }} />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Multi-Currency</h4>
                                <p className="text-slate-300 text-xs">Holdings breakdown</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {[
                                { currency: "CHF", amount: "5.2M", percentage: 42 },
                                { currency: "USD", amount: "4.1M", percentage: 33 },
                                { currency: "EUR", amount: "2.8M", percentage: 23 },
                                { currency: "GBP", amount: "0.3M", percentage: 2 },
                            ].map((item, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-white text-sm font-medium">{item.currency}</span>
                                        <span className="text-slate-300 text-sm">{item.amount}</span>
                                    </div>
                                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full"
                                            style={{
                                                width: `${item.percentage}%`,
                                                background: 'linear-gradient(to right, #3D4050, #6B7288)'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Real-Time Access Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="rounded-2xl p-6 border border-white/20 backdrop-blur-sm relative overflow-hidden min-h-[320px] flex flex-col"
                        style={{ backgroundColor: 'rgba(200, 208, 224, 0.5)' }}
                    >
                        <div className="relative z-10 flex-grow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(180, 187, 204, 0.4)' }}>
                                    <Eye className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Real-Time Access</h4>
                                    <p className="text-xs text-slate-200">Anytime, anywhere</p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed mb-4 text-slate-200">
                                Access your complete wealth dashboard 24/7 from any device with bank-grade security.
                            </p>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="px-3 py-1 rounded-full text-xs bg-white/20 text-white">iOS</div>
                                <div className="px-3 py-1 rounded-full text-xs bg-white/20 text-white">Android</div>
                                <div className="px-3 py-1 rounded-full text-xs bg-white/20 text-white">Web</div>
                            </div>
                        </div>

                        {/* Globe Image - Positioned at Bottom */}
                        <div className="absolute bottom-4 left-0 right-0 h-32 flex items-end justify-center pointer-events-none z-0">
                            <img
                                src="/assets/globe.png"
                                alt=""
                                className="w-full h-full object-cover object-top opacity-30"
                                style={{
                                    mixBlendMode: 'multiply'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
