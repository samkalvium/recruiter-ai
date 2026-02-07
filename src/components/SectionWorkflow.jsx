import React from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, Calendar, Video, UserCheck, XCircle, Clock } from 'lucide-react';

const FlowchartNode = ({ children, type = "default", delay = 0 }) => {
    const bgColors = {
        start: "bg-gray-100 border-gray-300",
        action: "bg-white border-blue-200 shadow-sm",
        decision: "bg-purple-50 border-purple-200 rotate-45 w-12 h-12 flex items-center justify-center",
        end: "bg-green-50 border-green-200"
    };

    const isDecision = type === "decision";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={`relative z-10 flex flex-col items-center justify-center p-3 text-xs md:text-sm font-medium text-center rounded-lg border ${!isDecision ? bgColors[type] : ''} ${!isDecision ? "min-w-[120px]" : ""}`}
        >
            {isDecision ? (
                <div className={`${bgColors[type]}`}>
                    <div className="-rotate-45">{children}</div>
                </div>
            ) : (
                children
            )}
        </motion.div>
    );
};

const Arrow = ({ delay = 0 }) => (
    <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 24 }}
        transition={{ duration: 0.3, delay }}
        className="w-0.5 bg-gray-300 my-1"
    />
);

const SectionWorkflow = () => {
    return (
        <section id="workflow" className="py-20 bg-primary-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        AI Recruiting Software That Works Like Your Own HR Team
                    </motion.h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Build custom hiring workflows in minutes. No coding required.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Flowchart 1: Screening */}
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100">
                        <h3 className="text-lg font-bold mb-6 text-center text-primary flex items-center justify-center gap-2">
                            <Mail size={20} /> Candidate Screening
                        </h3>
                        <div className="flex flex-col items-center space-y-0">
                            <FlowchartNode type="start" delay={0.1}>New Application</FlowchartNode>
                            <Arrow delay={0.2} />
                            <FlowchartNode type="action" delay={0.3}>AI Resume Screening</FlowchartNode>
                            <Arrow delay={0.4} />
                            <FlowchartNode type="decision" delay={0.5}>Score &gt; 75%?</FlowchartNode>
                            <div className="grid grid-cols-2 gap-8 w-full mt-1 relative">
                                {/* Yes Path */}
                                <div className="flex flex-col items-center">
                                    <div className="text-[10px] text-green-600 font-bold mb-1">YES</div>
                                    <Arrow delay={0.6} />
                                    <FlowchartNode type="end" delay={0.7}>Auto-schedule Interview</FlowchartNode>
                                </div>
                                {/* No Path */}
                                <div className="flex flex-col items-center">
                                    <div className="text-[10px] text-red-500 font-bold mb-1">NO</div>
                                    <Arrow delay={0.6} />
                                    <FlowchartNode type="end" delay={0.7}>Send Rejection Email</FlowchartNode>
                                </div>
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-gray-500 text-center bg-gray-50 p-2 rounded">
                            "Screen 250+ applications in minutes vs. 8 hours manually"
                        </p>
                    </div>

                    {/* Flowchart 2: Interview Process */}
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-purple-100">
                        <h3 className="text-lg font-bold mb-6 text-center text-accent-3 flex items-center justify-center gap-2">
                            <Video size={20} /> Interview Process
                        </h3>
                        <div className="flex flex-col items-center space-y-0">
                            <FlowchartNode type="start" delay={0.2}>Interview Accepted</FlowchartNode>
                            <Arrow delay={0.3} />
                            <FlowchartNode type="action" delay={0.4}>AI Video Interview</FlowchartNode>
                            <Arrow delay={0.5} />
                            <FlowchartNode type="decision" delay={0.6}>Score &gt; 80%?</FlowchartNode>
                            <div className="grid grid-cols-2 gap-8 w-full mt-1 relative">
                                <div className="flex flex-col items-center">
                                    <div className="text-[10px] text-green-600 font-bold mb-1">HIRE</div>
                                    <Arrow delay={0.7} />
                                    <FlowchartNode type="end" delay={0.8}>Send Offer Letter</FlowchartNode>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-[10px] text-red-500 font-bold mb-1">WAIT</div>
                                    <Arrow delay={0.7} />
                                    <FlowchartNode type="end" delay={0.8}>Personalized Reject</FlowchartNode>
                                </div>
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-gray-500 text-center bg-gray-50 p-2 rounded">
                            "Reduce time-to-hire from 42 days to 12 days"
                        </p>
                    </div>

                    {/* Flowchart 3: Passive Engagement */}
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100">
                        <h3 className="text-lg font-bold mb-6 text-center text-primary flex items-center justify-center gap-2">
                            <Clock size={20} /> Passive Nurturing
                        </h3>
                        <div className="flex flex-col items-center space-y-0">
                            <FlowchartNode type="start" delay={0.3}>Future Talent Pool</FlowchartNode>
                            <Arrow delay={0.4} />
                            <FlowchartNode type="action" delay={0.5}>Wait 3 Months</FlowchartNode>
                            <Arrow delay={0.6} />
                            <FlowchartNode type="decision" delay={0.7}>New Role?</FlowchartNode>
                            <div className="grid grid-cols-2 gap-8 w-full mt-1 relative">
                                <div className="flex flex-col items-center">
                                    <div className="text-[10px] text-green-600 font-bold mb-1">YES</div>
                                    <Arrow delay={0.8} />
                                    <FlowchartNode type="end" delay={0.9}>Send Invite Email</FlowchartNode>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-[10px] text-gray-500 font-bold mb-1">NO</div>
                                    <Arrow delay={0.8} />
                                    <FlowchartNode type="action" delay={0.9}>Wait 3 Months</FlowchartNode>
                                </div>
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-gray-500 text-center bg-gray-50 p-2 rounded">
                            "Build a qualified talent pipeline automatically"
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SectionWorkflow;
