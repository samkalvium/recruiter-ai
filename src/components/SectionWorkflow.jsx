import React from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, Calendar, Video, UserCheck, XCircle, Clock, FileText, UserPlus, FileCheck } from 'lucide-react';

const FlowchartNode = ({ children, subtitle = null, icon: Icon = null, type = "default", delay = 0, className = "" }) => {
    const styles = {
        pill: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-none shadow-indigo-200/50 rounded-full py-1.5 px-4",
        diamond: "bg-white border-2 border-indigo-100 shadow-sm text-indigo-900",
        action: "bg-white border border-slate-200 shadow-sm text-slate-800 rounded-xl p-3",
        start: "bg-slate-50 border border-slate-200 text-slate-500 rounded-full px-3 py-1 text-[9px] uppercase font-bold",
        end: "bg-emerald-500 text-white border-none shadow-emerald-200/50 rounded-xl p-3",
        reject: "bg-rose-50 border border-rose-100 text-rose-600 rounded-xl p-3",
        wait: "bg-amber-50 border border-amber-100 text-amber-700 rounded-xl p-3"
    };

    const isDiamond = type === "decision";
    const nodeStyle = styles[type] || styles.action;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay }}
            className={`relative z-10 flex flex-col items-center justify-center text-[10px] md:text-xs font-bold text-center ${!isDiamond ? nodeStyle : ""} ${className}`}
        >
            {isDiamond ? (
                <div className={`w-20 h-20 rotate-45 flex items-center justify-center border-2 border-indigo-200 bg-white shadow-lg shadow-indigo-100/50 my-2`}>
                    <div className="-rotate-45 w-[140%] text-center leading-tight font-black text-indigo-900 tracking-tighter text-[10px]">
                        {children}
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-1.5">
                        {Icon && <Icon size={type === 'pill' ? 14 : 12} className={type === 'pill' ? 'text-white' : 'text-indigo-500'} />}
                        <span className="whitespace-nowrap">{children}</span>
                    </div>
                    {subtitle && <p className={`text-[9px] mt-0.5 font-medium leading-none ${(type === 'pill' || type === 'end') ? 'text-white/90' : 'text-slate-400'}`}>{subtitle}</p>}
                </>
            )}
        </motion.div>
    );
};

const Arrow = ({ delay = 0, label = null, type = "down", className = "" }) => {
    const isYes = label === "YES" || label === "HIRE" || label === "INTERESTED";

    if (type === "side") {
        return (
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay }}
                className={`flex items-center absolute right-[100%] top-1/2 -translate-y-1/2 mr-2 ${className}`}
            >
                <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-slate-200"></div>
                    <div className="w-1.5 h-1.5 border-t-2 border-r-2 border-slate-200 rotate-45 -ml-1"></div>
                </div>
                {label && (
                    <span className={`absolute -top-5 right-4 text-[8px] font-black px-1.5 py-0.5 rounded-full border shadow-sm ${isYes ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-500 border-rose-100'}`}>
                        {label}
                    </span>
                )}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 28, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            className={`flex flex-col items-center justify-center relative ${className}`}
        >
            <div className="w-0.5 h-full bg-slate-200 relative">
                {label && (
                    <span className={`absolute top-1/2 left-3 -translate-y-1/2 text-[8px] font-black px-1.5 py-0.5 rounded-full border shadow-sm whitespace-nowrap ${isYes ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-500 border-rose-100'}`}>
                        {label}
                    </span>
                )}
            </div>
            <div className="w-2 h-2 border-r-2 border-b-2 border-slate-200 rotate-45 -mt-1"></div>
        </motion.div>
    );
};

const SectionWorkflow = () => {
    return (
        <section id="workflow" className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
                    >
                        AI Recruiting Software That <br className="hidden md:block" /> Works Like your own HR Team
                    </motion.h2>
                    <p className="text-base text-slate-500 max-w-xl mx-auto font-medium">
                        Streamline your entire hiring life-cycle with enterprise-grade decision logic and automated candidate nurturing.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                    {/* Flowchart 1: Automated Candidate Screening */}
                    <div className="flex flex-col items-center h-full bg-white/40 backdrop-blur-sm border border-slate-200/60 rounded-[2.5rem] p-8 lg:p-12 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500">
                        <div className="mb-10 text-center">
                            <h3 className="text-lg font-black text-slate-900 mb-1">Candidate Screening</h3>
                            <p className="text-xs text-indigo-500 uppercase tracking-widest font-black">Automated Screening & Scheduling</p>
                        </div>

                        <div className="flex flex-col items-center space-y-0 w-full relative">
                            <FlowchartNode type="start" delay={0.1}>New Application Submitted</FlowchartNode>
                            <Arrow delay={0.2} />

                            <FlowchartNode type="pill" delay={0.3} subtitle="Ranks top 20% of candidates" icon={Check}>
                                AI Resume Screening
                            </FlowchartNode>
                            <Arrow delay={0.4} />

                            <FlowchartNode type="action" delay={0.5} subtitle="Via email to qualified candidates" icon={Mail}>
                                Auto-send Screening Qs
                            </FlowchartNode>
                            <Arrow delay={0.6} />

                            <FlowchartNode type="decision" delay={0.7}>
                                SCORE &gt; 75%?
                            </FlowchartNode>

                            <div className="w-full flex mt-4">
                                {/* YES Path */}
                                <div className="flex-1 flex flex-col items-center border-t-2 border-emerald-100/50 pt-2 mx-2">
                                    <Arrow delay={0.8} label="YES" />
                                    <FlowchartNode type="end" delay={0.9} icon={Calendar}>Auto-Schedule</FlowchartNode>
                                    <Arrow delay={1.0} />
                                    <FlowchartNode type="action" delay={1.1}>Interview Scheduled</FlowchartNode>
                                    <Arrow delay={1.2} />
                                    <FlowchartNode type="action" delay={1.3} subtitle="24 hours before interview" icon={Clock}>
                                        Send Reminder
                                    </FlowchartNode>
                                </div>

                                {/* NO Path */}
                                <div className="flex-1 flex flex-col items-center border-t-2 border-rose-100/50 pt-2 mx-2">
                                    <Arrow delay={0.8} label="NO" />
                                    <FlowchartNode type="reject" delay={0.9} icon={Mail}>Thank you Email</FlowchartNode>
                                    <Arrow delay={1.0} />
                                    <FlowchartNode type="action" delay={1.1} subtitle="For future opportunities">
                                        Add to Talent Pool
                                    </FlowchartNode>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-12 w-full max-w-[240px]">
                            <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-center shadow-inner">
                                <p className="text-[10px] text-blue-800 leading-tight italic font-medium">
                                    "Screen 250+ applications in minutes <br /> vs. 8 hours manually"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Flowchart 2: Multi-Stage Interview */}
                    <div className="flex flex-col items-center h-full bg-white/40 backdrop-blur-sm border border-slate-200/60 rounded-[2.5rem] p-8 lg:p-12 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500">
                        <div className="mb-8 text-center">
                            <h3 className="text-base font-black text-slate-900 mb-0.5 font-bold">Interviewing</h3>
                            <p className="text-[10px] text-purple-600 uppercase tracking-widest font-black">AI-Powered Interview Pipeline</p>
                        </div>

                        <div className="flex flex-col items-center space-y-0 w-full relative">
                            <FlowchartNode type="start" delay={0.6}>Interview Accepted</FlowchartNode>
                            <Arrow delay={0.7} />

                            <FlowchartNode type="pill" delay={0.8} subtitle="Technical screening using AI" icon={Video}>
                                Round 1: AI Video Interview
                            </FlowchartNode>
                            <Arrow delay={0.9} />

                            <FlowchartNode type="action" delay={1.0} subtitle="Based on custom rubric" icon={FileCheck}>
                                AI Scores Responses
                            </FlowchartNode>
                            <Arrow delay={1.1} />

                            <FlowchartNode type="decision" delay={1.2}>
                                SCORE &gt; 80%?
                            </FlowchartNode>

                            <div className="w-full relative min-h-[400px] flex">
                                {/* NO Path (Left) */}
                                <div className="flex-1 flex flex-col items-center border-t-2 border-rose-100/50 pt-2 mx-1">
                                    <Arrow delay={1.3} label="NO" />
                                    <FlowchartNode type="reject" delay={1.4} icon={XCircle} subtitle="Includes constructive feedback">
                                        Auto-rejection Email
                                    </FlowchartNode>
                                </div>

                                {/* YES Path (Right) */}
                                <div className="flex-1 flex flex-col items-center border-t-2 border-emerald-100/50 pt-2 mx-1">
                                    <Arrow delay={1.3} label="YES" />
                                    <FlowchartNode type="action" delay={1.4} icon={Calendar} subtitle="With Hiring Manager">
                                        Auto-schedule Round 2
                                    </FlowchartNode>
                                    <Arrow delay={1.5} />
                                    <FlowchartNode type="action" delay={1.6} icon={UserCheck}>
                                        Hiring Manager Interview
                                    </FlowchartNode>
                                    <Arrow delay={1.7} />

                                    <FlowchartNode type="decision" delay={1.8}>
                                        HIRE OR REJECT?
                                    </FlowchartNode>

                                    <div className="w-full flex mt-2">
                                        <div className="flex-1 flex flex-col items-center mx-1">
                                            <Arrow delay={1.9} label="HIRE" />
                                            <FlowchartNode type="end" delay={2.0} icon={Check}>OFFER SENT</FlowchartNode>
                                            <Arrow delay={2.1} />
                                            <FlowchartNode type="action" delay={2.2} className="text-[10px]">Send Welcome Kit</FlowchartNode>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center mx-1">
                                            <Arrow delay={1.9} label="REJECT" />
                                            <FlowchartNode type="reject" delay={2.0} className="text-[10px]">Personalized Email</FlowchartNode>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-12 w-full max-w-[240px]">
                            <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-center shadow-inner">
                                <p className="text-[10px] text-blue-800 leading-tight italic font-medium">
                                    "Reduce time-to-hire from <br /> 42 days to 12 days"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Flowchart 3: Passive Candidate Re-engagement */}
                    <div className="flex flex-col items-center h-full lg:col-span-2 lg:max-w-2xl lg:mx-auto w-full bg-white/40 backdrop-blur-sm border border-slate-200/60 rounded-[2.5rem] p-8 lg:p-12 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
                        <div className="mb-8 text-center">
                            <h3 className="text-base font-black text-slate-900 mb-0.5 font-bold">Talent Nurturing</h3>
                            <p className="text-[10px] text-blue-600 uppercase tracking-widest font-black">Passive Talent Re-Engagement</p>
                        </div>

                        <div className="flex flex-col items-center space-y-0 w-full relative">
                            <FlowchartNode type="pill" delay={1.0} subtitle="Borderline qualified" icon={UserPlus}>
                                Rejected (60-74% Score)
                            </FlowchartNode>
                            <Arrow delay={1.1} />

                            <FlowchartNode type="action" delay={1.2} icon={FileText}>
                                Future Talent Database
                            </FlowchartNode>
                            <Arrow delay={1.3} />

                            <FlowchartNode type="wait" delay={1.4} subtitle="3 months automated delay" icon={Clock}>
                                Wait Period
                            </FlowchartNode>
                            <Arrow delay={1.5} />

                            <FlowchartNode type="decision" delay={1.6}>
                                NEW ROLE OPENS?
                            </FlowchartNode>

                            <div className="w-full flex mt-4 min-h-[300px]">
                                {/* NO Path */}
                                <div className="flex-1 flex flex-col items-center border-t-2 border-rose-100/50 pt-2 mx-1">
                                    <Arrow delay={1.7} label="NO" />
                                    <FlowchartNode type="action" delay={1.8} className="text-[10px]">Check Next Quarter</FlowchartNode>
                                </div>

                                {/* YES Path */}
                                <div className="flex-1 flex flex-col items-center border-t-2 border-emerald-100/50 pt-2 mx-1">
                                    <Arrow delay={1.7} label="YES" />
                                    <FlowchartNode type="pill" delay={1.8} subtitle="Mentions new role" icon={Mail}>
                                        Re-engagement Email
                                    </FlowchartNode>
                                    <Arrow delay={1.9} />

                                    <FlowchartNode type="decision" delay={2.0}>
                                        INTERESTED?
                                    </FlowchartNode>

                                    <div className="w-full flex mt-2">
                                        <div className="flex-1 flex flex-col items-center mx-1">
                                            <Arrow delay={2.1} label="YES" />
                                            <FlowchartNode type="end" delay={2.2} icon={Check} subtitle="Skip initial screening">
                                                FAST-TRACK
                                            </FlowchartNode>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center mx-1">
                                            <Arrow delay={2.1} label="NO" />
                                            <FlowchartNode type="action" delay={2.2} className="text-[10px]" subtitle="Revisit next quarter">
                                                Talent Pool
                                            </FlowchartNode>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-12 w-full max-w-[240px]">
                            <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-center shadow-inner">
                                <p className="text-[10px] text-blue-800 leading-tight italic font-medium">
                                    "Build a qualified talent pipeline automatically — never start from zero"
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SectionWorkflow;
