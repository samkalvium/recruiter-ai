import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-2 rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-extrabold mb-6"
                >
                    Ready to Hire Better, Faster?
                </motion.h2>

                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    Join 500+ companies hiring smarter with AI. Start your 14-day free trial today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary text-lg font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Start Free Trial
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white/10 transition-colors duration-300">
                        Schedule Demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
