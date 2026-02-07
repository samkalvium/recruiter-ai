import React from 'react';
import { motion } from 'framer-motion';
import { platforms } from '../data/platforms';

const SectionReach = () => {
    return (
        <section className="py-20 bg-primary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-5xl font-bold mb-2">Post Once, <span className="text-blue-900">Reach Everywhere</span></h2>
                <p className="text-blue-100/80">Automatically syncs with all major platforms including:</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex items-center space-x-16 whitespace-nowrap"
                    animate={{ x: [-1000, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 35,
                        ease: "linear",
                    }}
                >
                    {[...platforms, ...platforms, ...platforms, ...platforms, ...platforms, ...platforms].map((platform, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center justify-center transition-colors duration-300 cursor-default group/item"
                            style={{ '--hover-color': platform.hex }}
                        >
                            <span className="text-2xl font-bold text-white/40 group-hover/item:text-[var(--hover-color)] transition-colors duration-300">
                                {platform.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default SectionReach;
