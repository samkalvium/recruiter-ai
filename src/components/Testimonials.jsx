import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsToShow = 3;
    const totalItems = testimonials.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const getVisibleTestimonials = () => {
        const items = [];
        for (let i = 0; i < itemsToShow; i++) {
            items.push(testimonials[(currentIndex + i) % totalItems]);
        }
        return items;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <section id="testimonials" className="py-20 bg-primary-bg/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-xl text-gray-600">See how top companies are automating their hiring process.</p>
                </div>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-[-20px] md:-left-12 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-gray-50 transition-colors border border-gray-100 hidden md:block" // Hidden on small mobile to save space, or could overlay
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-[-20px] md:-right-12 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-gray-50 transition-colors border border-gray-100 hidden md:block"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="flex md:hidden justify-between absolute w-full top-1/2 -translate-y-1/2 z-10 pointer-events-none px-2">
                        <button onClick={prevSlide} className="bg-white/80 p-2 rounded-full shadow pointer-events-auto text-primary"><ChevronLeft size={20} /></button>
                        <button onClick={nextSlide} className="bg-white/80 p-2 rounded-full shadow pointer-events-auto text-primary"><ChevronRight size={20} /></button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnimatePresence mode='popLayout'>
                            {visibleTestimonials.map((testimonial) => (
                                <motion.div
                                    key={`${testimonial.id}-${currentIndex}`} // Key changes to trigger animation
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white p-8 rounded-2xl shadow-lg relative border border-gray-100 flex flex-col"
                                >
                                    <Quote className="text-primary/20 absolute top-6 right-6" size={48} />

                                    <div className="flex items-center gap-4 mb-6">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-primary">{testimonial.title}</p>
                                        </div>
                                    </div>

                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-400">★</span>
                                        ))}
                                    </div>

                                    <p className="text-gray-600 italic leading-relaxed flex-grow">"{testimonial.quote}"</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
