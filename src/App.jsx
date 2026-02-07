import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionWorkflow from './components/SectionWorkflow';
import SectionImpact from './components/SectionImpact';
import SectionReach from './components/SectionReach';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-secondary-bg">
            <Navbar />
            <Hero />
            <SectionWorkflow />
            <SectionImpact />
            <SectionReach />
            <Testimonials />
            <FAQ />
            <FinalCTA />
            <Footer />
        </div>
    );
}

export default App;
