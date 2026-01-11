import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-white py-16 border-t border-white/10">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-6 space-y-6">
                        <a href="/" className="inline-block">
                            <img
                                src="/assets/logo_white.svg"
                                alt="AlphaSwiss Partners SA"
                                width={300}
                                height={100}
                                className="brightness-100"
                            />
                        </a>
                        <p className="text-gray-400 max-w-md text-base leading-relaxed">
                            Independent wealth management built entirely around your needs and aspirations. We create personalized strategies that reflect your goals and values.
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span className="text-lg">🇨🇭</span>
                            <span>Based in Geneva, Switzerland</span>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="md:col-span-2 md:col-start-8">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Sections</h4>
                        <ul className="space-y-3">
                            {["Services", "Ventures", "Platform", "The Team"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                                        {item}
                                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Social Column */}
                    <div className="md:col-span-2 md:col-start-10">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>


                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} AlphaSwiss Partners SA. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">CISA Compliance</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
