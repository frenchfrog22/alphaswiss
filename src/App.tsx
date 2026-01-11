import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Solutions } from "./components/sections/Solutions";
import { PrivateEquity } from "./components/sections/PrivateEquity";
import { Platform } from "./components/sections/Platform";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import "./globals.css";

function App() {
    return (
        <Router>
            <main className="min-h-screen flex flex-col">
                <Navbar />
                <Hero />
                <Solutions />
                <PrivateEquity />
                <Platform />
                <Contact />
                <Footer />
            </main>
        </Router>
    );
}

export default App;