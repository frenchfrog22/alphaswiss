import { useState } from "react";
import { motion } from "framer-motion";

// SECTION: RELATIONSHIP MANAGERS (Executive & Client Relations)
const relationshipManagers = [
    {
        name: "Yann Labry",
        title: "CEO and Founder",
        image: "/assets/team/alphaswiss_portrait_yann_labry_2.jpg",
        description: "Over a career spanning 27 years at leading banks, Yann forged solid trust-based relationships with a high-profile network of clients and colleagues. Driven by his desire to improve client service, he created AlphaSwiss based on a transparent, personalized business model."
    },
    {
        name: "Jens Moeller",
        title: "Senior Relationship Manager",
        image: "/assets/team/alphaswiss_portrait_jens_moeller_2.jpg",
        description: "With 34 years in the financial industry across Germany, Singapore, Abu Dhabi, and Geneva, Jens focuses on providing honest and reliable advice. He joined AlphaSwiss for its dedication to clients and non-standard product offering."
    },

    {
        name: "Gregory Lamot",
        title: "Relationship Manager",
        image: "/assets/team/alphaswiss_portrait_gregory_lamot.jpg",
        description: "Gregory spent 11 years at a leading Swiss private bank before joining AlphaSwiss. He has extensive experience as an investment specialist and client advisor, specifically taking care of important client groups within Southeast Europe."
    },
    {
        name: "Pierre Schweizer",
        title: "Senior Relationship Manager",
        image: "/assets/team/alphaswiss_portrait_pierre_schweizer.jpg",
        description: "Pierre started his career in 1982 and spent 38 years at a leading Swiss universal bank. He has developed solid trust with private and institutional clients in the Middle East based on values of loyalty and reliability."
    },
    {
        name: "Wladimir Barneaud",
        title: "Relationship Manager",
        image: "/assets/team/alphaswiss_portrait_wladimir_barneaud.jpg",
        description: "Wladimir has 15 years of experience, including nearly a decade at a prominent Swiss bank and a tenure at a Family Office. He formulates investment recommendations for clients in Switzerland, Belgium, and Saudi Arabia."
    },
    {
        name: "Jérémy Barras",
        title: "Junior Assistant Client Support",
        image: "/assets/team/alphaswiss_portrait_Jeremy_Barras.jpg",
        description: "Jeremy began his career at 18 and holds a Swiss Federal Diploma (AWM). He provides high-quality assistance to clients with a solid knowledge base covering investments, products, and support."
    },
    {
        name: "Sébastien Haas",
        title: "Client Officer",
        image: "/assets/team/alphaswiss_portrait_sebastien_haas_2.jpg",
        description: "Sébastien joined Yann Labry in the Ultra-High-Net-Worth Middle East department over 15 years ago. He is known for his exceptional personal skills and dedication to going the extra mile to serve clients."
    },
    {
        name: "Carolla Labry",
        title: "Office manager",
        image: "/assets/team/alphaswiss_portrait_carolla_Labry_3.jpg",
        description: "Carolla provides support across HR, client care, and meetings. She is described as the key element to the equilibrium of the team, creating the optimum environment for the firm to perform."
    },
];

// SECTION: INVESTMENT EXPERTS
const investmentExperts = [
    {
        name: "René Morgenthaler",
        title: "Chief Investment Officer",
        image: "/assets/team/alphaswiss_portrait_rene_morgenthaler.jpg",
        description: "A financial specialist with over 30 years' experience in the management of private and institutional portfolios. René has held management positions including Head of Trading, Head of Advisory, and Chief Investment Officer."
    },
    {
        name: "Daniel Elias",
        title: "Deputy CEO and Investment COO",
        image: "/assets/team/alphaswiss_portrait_Daniel_Elias.jpg",
        description: "With over 25 years of experience at banks like Edmond de Rothschild and Lombard Odier, Daniel has served as Head of Investment and COO of Private Banking, driving operational excellence and strategic initiatives."
    },
    {
        name: "John Timossi",
        title: "Senior Investment Manager",
        image: "/assets/team/alphaswiss_portrait_john_timossi.jpg",
        description: "John has more than 15 years in financial markets. He specialized in derivatives and Structured Products while serving as an Investment Advisor covering Middle Eastern UHNW clients."
    },
    {
        name: "Christian Kranicke",
        title: "Senior Private Equity, Risk & Fund Structuring Specialist",
        image: "/assets/team/alphaswiss_portrait_Christian_Kranicke.jpg",
        description: "Christian's background includes commodity trading and capital markets. He specializes in private markets, venture capital, and blockchain tech innovation, bringing deep knowledge of deal analysis and negotiation."
    },
    {
        name: "Dylan Guggenheim",
        title: "Junior Investment Manager",
        image: "/assets/team/alphaswiss_portrait_Dylan_Guggenheim.jpg",
        description: "Dylan holds a Master's in Management with a specialization in Data Analytics. He conducts research and analysis across all asset classes to help clients find robust, all-weather investment solutions."
    }
];

export function Contact() {
    const [activeTab, setActiveTab] = useState<"managers" | "experts">("managers");

    return (
        <section id="contact" className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-white text-sm font-medium mb-8 uppercase tracking-wide px-4 py-2 rounded-sm shadow-md"
                        style={{ backgroundColor: "#9AA6BA" }}
                    >
                        MEET THE TEAM
                    </motion.h2>
                </div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight"
                >
                    <span className="font-bold">Independant</span> industry leading experts, at your side
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-600 mb-8 max-w-3xl"
                >
                    Our senior team shares common values and complementary strengths, skills and experiences to offer our clients the comfort of a fully comprehensive service.
                </motion.p>

                {/* Tab Navigation */}
                <div className="flex gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab("managers")}
                        className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeTab === "managers"
                                ? "text-white shadow-lg"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        style={activeTab === "managers" ? { backgroundColor: "#9AA6BA" } : {}}
                    >
                        Relationship Managers
                    </button>
                    <button
                        onClick={() => setActiveTab("experts")}
                        className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeTab === "experts"
                                ? "text-white shadow-lg"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        style={activeTab === "experts" ? { backgroundColor: "#9AA6BA" } : {}}
                    >
                        Investment Experts
                    </button>
                </div>

                {/* Team Members Grid */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {(activeTab === "managers" ? relationshipManagers : investmentExperts).map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group flex-shrink-0 w-80"
                        >
                            <div className="rounded-2xl overflow-hidden h-full">
                                <div className="aspect-[3/4] relative bg-gray-200">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-sm font-bold mb-3" style={{ color: "#9AA6BA" }}>{member.title}</p>
                                    <p className="text-sm text-gray-700 leading-relaxed">{member.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Form Section */}
                <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Side - Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block text-white text-sm font-medium mb-8 uppercase tracking-wide px-4 py-2 rounded-sm shadow-md"
                            style={{ backgroundColor: "#9AA6BA" }}
                        >
                            Contact
                        </div>

                        <h2 className="text-4xl  md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                            Get in touch with us
                        </h2>

                        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                            We are looking forward to meeting you. Please call or leave us a message and we will come back to you soon.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">AlphaSwiss Partners SA</h3>
                                <div className="text-gray-700 space-y-1">
                                    <p>Place du Molard 7</p>
                                    <p>1204 Geneva</p>
                                </div>
                            </div>

                            <div>
                                <a
                                    href="tel:+41223178140"
                                    className="text-lg font-medium transition-colors duration-300 hover:opacity-70"
                                    style={{ color: "#9AA6BA" }}
                                >
                                    T +41 (0)22 317 81 40
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-300 outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-300 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-300 outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-300 outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-300 outline-none resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto px-8 py-4 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90"
                                style={{ backgroundColor: "#9AA6BA" }}
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
