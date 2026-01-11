import { motion } from "framer-motion";
import { TrendingUp, DollarSign, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

const investments = [
    {
        "title": "GrubMarket",
        "sector": "Food Tech / Supply Chain",
        "logo": "/assets/logos/GrubMarket.png",
        "description": "GrubMarket delivers a farm-to-table marketplace for the fresh food supply chain. It connects farmers and producers directly with businesses and consumers, offering fresher, organic products at competitive prices. GrubMarket continues to scale its business and build a case for IPO. Having invested at $200m valuation, GrubMarket is currently valued at more than $3.5bln."
    },
    {
        "title": "Redesign Health",
        "sector": "HealthTech",
        "logo": "/assets/logos/redesignhealth.png",
        "description": "In 2020, AlphaSwiss gained investor access to Redesign Health, a company building tech-enabled healthcare solutions that keep pace with the trajectory of science and research. At the time of our investment, the company's valuation stood at $300M. The most funding recent round, which included top US-based financiers, brings Redesign's post-money valuation to $1.7 billion."
    },
    {
        "title": "Dropbox",
        "sector": "Software / Cloud Storage",
        "logo": "/assets/logos/Dropbox.png",
        "description": "In November 2017, we obtained access to an investment in Dropbox for our clients, only four months ahead of the IPO. The stock opened in the public exchange at +35% from our entry price. The company has Today a market cap of $7.4bn."
    },
    {
        "title": "DocuSign",
        "sector": "Software / e-Signature",
        "logo": "/assets/logos/docusign.png",
        "description": "In late 2015, we invested in DocuSign. The company went IPO in April 2018 and the stock opened at +90% from our entry price. We are also strong proponents of this technology and implemented it in our processes, with e-signature required on most documentation. Today, the company has a market cap of $13.5bn, 4 times of what we invested."
    },
    {
        "title": "Lyft",
        "sector": "Transportation / Ride-sharing",
        "logo": "/assets/logos/lyft.png",
        "description": "We have been investors in Lyft since 2015 and participated in several funding rounds from a first valuation of $3.7 billion. In June 2018, the company raised $600 million from Fidelity at a valuation of $15 billion. They came IPO in March 2019 at a valuation of $24 billion."
    },
    {
        "title": "TransferWise",
        "sector": "Fintech",
        "logo": "/assets/logos/trasnferwise.png",
        "description": "In mid-2017, we invested into TransferWise, the fintech company disrupting money transfers. Since then, the company has maintained a growth rate of 70% YoY. Recently it announced a deal with a major European bank to offer inexpensive currency transfers to its clientele."
    },
    {
        "title": "Palantir",
        "sector": "Big Data / Analytics",
        "logo": "/assets/logos/palantir.png",
        "description": "Back in 2015, we invested in Palantir, the big data analytics company backed by PayPal's co-founder Peter Thiel. The company was valued at $13.2 billion at the time. It went public (IPO) in September 2020 and was valued at $44 billion in February 2021, when our investment lock-up ended and grew to $447 billion Today."
    },
    {
        "title": "Enpal",
        "sector": "Green-tech / Solar Energy",
        "logo": "/assets/logos/Enpal.png",
        "description": "Enpal is a Berlin-based green-tech company founded in 2017 that has become one of Europe's fastest-growing players in residential solar energy and seen Today as Germany's first green-tech unicorn. Enpal is solidifying its case as the premier integrated platform at the heart of Europe's energy transition as it builds its case for a public offering in the near future."
    },
    {
        "title": "Amazentis",
        "sector": "Healthtech",
        "logo": "/assets/logos/amazentis.png",
        "description": "Amazentis, a Swiss Healthtech company dedicated to building the leading clinically-proven consumer health brand. Supported by increasing revenues and a differentiated product portfolio, the company is strongly positioned to further accelerate its commercial trajectory and enhance its appeal in the near future as a potential strategic acquisition candidate."
    },
    {
        "title": "Securitize",
        "sector": "Fintech",
        "logo": "/assets/logos/securitize.png",
        "description": "Securitize is a US-regulated Fintech platform that enables companies to issue, manage, and trade digital securities representing real-world assets. Securitize offers broad access to institutional-grade products with lower entry tickets and improved liquidity. The company has doubled in valuation since the initial AlphaSwiss investment and is planning an IPO in 2026."
    },
    {
        "title": "Kraken",
        "sector": "Fintech / Digital Assets",
        "logo": "/assets/logos/kraken.png",
        "description": "Kraken is a global digital asset platform that allows individuals and institutions securely buy, sell, and trade digital currencies. Since the initial AlphaSwiss investment, Kraken's valuation has risen significantly, underpinned by the participation of leading Tier One U.S. institutions. The company is currently preparing for a planned initial public offering in 2026."
    }
];

export function PrivateEquity() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 470; // Card width (450px) + gap (20px)
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="private-equity" className="py-32 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-white text-sm font-medium uppercase tracking-wide px-4 py-2 rounded-sm shadow-md"
                        style={{ backgroundColor: "#7B8AA4" }}
                    >
                        Private Equity Placement
                    </motion.h2>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    {/* Left Column - Main Description */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight"
                        >
                            <span className="font-semibold">Exclusive access</span> to pre-IPO opportunities
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-700 leading-relaxed mb-6"
                        >
                            Our exclusive network and privileged partnerships in the Silicon Valley and in Europe enable us to directly access companies not yet listed on the stock market. These direct investments are dedicated exclusively to qualified investors.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-gray-700 leading-relaxed"
                        >
                            Typically, the companies we target for you are those that are growing well, with recurrent revenues, likely to go IPO or be bought by another company within two to four years offering the potential of high returns.
                        </motion.p>
                    </div>

                    {/* Right Column - Private Debt Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg text-white" style={{ backgroundColor: "#7B8AA4" }}>
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900">
                                    Private Debt Opportunities
                                </h3>
                            </div>

                            <p className="text-base text-gray-700 leading-relaxed mb-6">
                                We have also established accesses to private debt opportunities, focused mostly on senior secured and fully collateralized financing with ability to realize the collateral in an adverse environment.
                            </p>

                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <div className="flex items-center gap-2 mb-3">
                                    <TrendingUp className="w-5 h-5" style={{ color: "#7B8AA4" }} />
                                    <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                        Target Yield
                                    </span>
                                </div>
                                <p className="text-3xl font-bold text-gray-900 mb-1">15% - 25%</p>
                                <p className="text-sm text-gray-600">
                                    Annual return objective for private debt investments
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Investment Cards Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20"
                >
                    {/* Section Title and Navigation */}
                    <div className="flex items-start justify-between mb-8">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="text-3xl md:text-4xl font-light text-gray-900"
                        >
                            Explore <span className="font-semibold">our successful investments </span> accross various sectors
                        </motion.h3>

                        {/* Navigation Arrows */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex gap-2"
                        >
                            <button
                                onClick={() => scroll('left')}
                                className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Scrollable Cards Container */}
                    <div className="relative">
                        <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide -mx-4 md:-mx-6 lg:-mx-[calc((100vw-1280px)/2+1.5rem)]">
                            <div className="flex gap-8 pb-4 px-4 md:px-6 lg:px-[calc((100vw-1280px)/2+1.5rem)]">
                                {investments.map((investment, idx) => (
                                    <motion.div
                                        key={investment.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0 w-[450px]"
                                    >
                                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                            {/* Card Header with Color Bar */}
                                            <div className="h-2" style={{ backgroundColor: "#7B8AA4" }}></div>

                                            {/* Card Content */}
                                            <div className="p-10 flex flex-col flex-grow">
                                                {/* Company Logo */}
                                                <div className="mb-4 h-16 flex items-center">
                                                    <img
                                                        src={investment.logo}
                                                        alt={investment.title}
                                                        className="h-12 object-contain"
                                                    />
                                                </div>

                                                <div className="mb-5">
                                                    <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                                                        {investment.title}
                                                    </h3>
                                                    <p className="text-sm font-medium uppercase tracking-wide" style={{ color: "#7B8AA4" }}>
                                                        {investment.sector}
                                                    </p>
                                                </div>

                                                <p className="text-base text-gray-700 leading-relaxed flex-grow">
                                                    {investment.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Disclaimer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-gray-500 italic">
                        Private equity and debt investments are available exclusively to qualified investors and subject to regulatory requirements.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
