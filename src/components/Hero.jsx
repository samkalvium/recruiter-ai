import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const conversations = [
    {
        id: 1,
        name: "Sarah K.",
        role: "Founder at TechStart",
        text: "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors.",
        image: "https://i.pravatar.cc/150?u=sarah",
        position: "top-10 left-[5%] md:left-[10%] lg:left-[15%]",
        color: "bg-accent-1"
    },
    {
        id: 2,
        name: "Rahul M.",
        role: "Hiring Manager at GrowthCo",
        text: "Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.",
        image: "https://i.pravatar.cc/150?u=rahul",
        position: "top-20 right-[5%] md:right-[10%] lg:right-[15%]",
        color: "bg-accent-2"
    },
    {
        id: 3,
        name: "Priya S.",
        role: "CEO at InnovateLabs",
        text: "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.",
        image: "https://i.pravatar.cc/150?u=priya",
        position: "bottom-2 left-[4%] md:left-[6%] lg:left-[8%]",
        color: "bg-accent-3"
    },
    {
        id: 4,
        name: "Amit T.",
        role: "Head of HR at ScaleUp",
        text: "Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening.",
        image: "https://i.pravatar.cc/150?u=amit",
        position: "bottom-20 right-[1%] md:right-[2%] lg:right-[4%]",
        color: "bg-accent-1"
    }
];

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] mt-12 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-primary-bg via-white to-white pt-20">

            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent-1/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent-2/30 rounded-full blur-[100px]" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8 mt-10 md:mt-0">

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-600"></span>
                    <span className="text-xs md:text-sm font-bold tracking-wider text-gray-800 uppercase">
                        Next - Gen Recruitment Experience
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight"
                >
                    Every Hire, <br className="hidden md:block" />
                    <span className="text-primary">Faster</span> and <span className="text-accent-3">Better</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                >
                    Stop losing great candidates to slow, manual hiring processes.
                    Let AI handle the heavy lifting while you focus on building your team.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white text-lg font-bold rounded-full shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        Start Hiring Smarter
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 text-lg font-bold rounded-full hover:border-primary hover:text-primary transition-colors duration-300">
                        Book a Demo
                    </button>
                </motion.div>
            </div>

            {/* Floating Conversations */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
                {conversations.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 + (index * 0.2) }}
                        className={`absolute ${item.position} max-w-[280px]`}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 1.5
                            }}
                            className={`relative p-4 rounded-2xl shadow-lg backdrop-blur-sm bg-white/90 border border-gray-100`}
                        >
                            <Quote className="text-primary/20 absolute top-2 right-4" size={32} />
                            <p className="mt-10 text-sm text-gray-600 mb-3 italic relative z-10">"{item.text}"</p>
                            <div className="flex items-center gap-3">
                                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default Hero;
