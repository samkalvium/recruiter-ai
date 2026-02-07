import React from 'react';
import { motion } from 'framer-motion';
import { metrics } from '../data/metrics';

const SectionImpact = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">The <span className="bg-gradient-to-r from-[#53AFF5] to-[#4338CA] bg-clip-text text-transparent">RecruiterAI</span> Advantage</h2>
                    <p className="text-xl text-gray-600">Real results from real companies.</p>
                </div>

                <div>

                    {/* Vertical Bar Chart Representation */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-8">Impact matrix</h3>
                        {metrics.map((metric, index) => {
                            let width = "100%";
                            let gradient = "bg-gradient-to-r from-blue-300 to-blue-400";
                            let textColor = "text-white";
                            let valueColor = "text-blue-900";

                            if (metric.label.includes("Screening")) { width = "100%"; gradient = "bg-[#A5D8FF]"; }
                            if (metric.label.includes("Time-to-Hire")) { width = "70%"; gradient = "bg-[#D0BCFF]"; }
                            if (metric.label.includes("Capacity")) { width = "85%"; gradient = "bg-[#3B82F6]"; textColor = "text-white"; }
                            if (metric.label.includes("Completion")) { width = "95%"; gradient = "bg-[#4F46E5]"; textColor = "text-white"; }
                            if (metric.label.includes("Qualified")) { width = "89%"; gradient = "bg-[#4338ca]"; textColor = "text-white"; }
                            if (metric.label.includes("Cost")) { width = "80%"; gradient = "bg-[#93C5FD]"; }
                            if (metric.label.includes("Bad Hires")) { width = "50%"; gradient = "bg-[#C4B5FD]"; }

                            return (
                                <div key={metric.id} className="relative h-12 bg-gray-100 rounded-full overflow-hidden shadow-sm">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: width }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        className={`absolute top-0 left-0 h-full ${gradient} rounded-full z-0`}
                                    />
                                    <div className="absolute inset-0 flex justify-between items-center px-6 z-10 w-full">
                                        <span className={`font-bold text-sm sm:text-base ${textColor} drop-shadow-sm`}>{metric.label}</span>
                                        <span className={`font-bold text-sm sm:text-base ${valueColor}`}>{metric.value}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Cards Grid */}
                    <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow lg:last:col-start-2"
                            >
                                <div className={`w-12 h-12 rounded-lg ${metric.color} flex items-center justify-center mb-4`}>
                                    <metric.icon size={24} className="text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{metric.label}</h4>
                                <p className="text-3xl font-extrabold text-primary mb-2">{metric.value}</p>
                                <p className="text-sm text-gray-600">{metric.description}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SectionImpact;
