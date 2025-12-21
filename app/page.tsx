import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Values } from "@/components/sections/Values";
import { Platform } from "@/components/sections/Platform";
import { Independence } from "@/components/sections/Independence";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <Values />
            <Platform />
            <Independence />
            <Footer />
        </main>
    );
}
