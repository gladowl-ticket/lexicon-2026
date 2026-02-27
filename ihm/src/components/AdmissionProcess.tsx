import { motion } from "framer-motion";
import { UserPlus, MailCheck, FileEdit, CreditCard, Send, CheckCircle2, QrCode, MessageSquare, Info } from "lucide-react";

const steps = [
    {
        title: "Register Yourself",
        description: "Start your journey by creating your account.",
        icon: UserPlus,
        side: "right",
    },
    {
        title: "Verify Email",
        description: "Confirm your email for secure communication.",
        icon: MailCheck,
        side: "left",
    },
    {
        title: "Fill Application Form Online",
        description: "Provide your academic and personal details.",
        icon: FileEdit,
        side: "right",
    },
    {
        title: "Pay Application Fee",
        description: "Complete the process with a secure payment.",
        icon: CreditCard,
        side: "left",
    },
    {
        title: "Submit Application",
        description: "Review and finalize your scholarship journey.",
        icon: Send,
        side: "right",
    },
];

const AdmissionProcess = () => {
    return (
        <section id="admission-process" className="py-12 bg-[#FCF5F5] relative overflow-hidden font-body">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-[#004E7E]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-navy/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="text-[#004E7E] text-sm font-bold tracking-[0.2em] uppercase font-display bg-[#004E7E]/5 px-4 py-1.5 rounded-full">
                        Guided Journey
                    </span>
                    <h2 className="font-display text-[48px] font-black text-[#002244] mt-3 leading-tight uppercase tracking-wide">
                        Admission <span className="text-[#004E7E]">Process</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* Left Column: Instructions */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* Premium Instruction Card */}
                        <div className="relative glass-card bg-white/40 backdrop-blur-xl border border-[#004E7E]/20 rounded-[2rem] p-6 md:p-8 shadow-2xl transition-all duration-500 group-hover:border-[#004E7E]/40 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#004E7E]/5 blur-2xl rounded-full -mr-16 -mt-16" />

                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 bg-[#004E7E]/10 rounded-xl flex items-center justify-center border border-[#004E7E]/20">
                                    <Info className="w-6 h-6 text-[#004E7E]" />
                                </div>
                                <h3 className="text-3xl font-display font-black text-navy-dark tracking-tight uppercase">Instructions</h3>
                            </div>

                            <div className="space-y-5">
                                {[
                                    { text: "The online application is for admission to programs offered in Lexicon MILE.", icon: CheckCircle2 },
                                    { text: "Application Form Fee is Non-Refundable.", icon: CheckCircle2, bold: true },
                                    { text: "Email ID submitted at the time of registration will be used for all correspondences until enrolment is completed. Change in Email ID will NOT be permitted.", icon: CheckCircle2, warning: true },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-5 group/item">
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#004E7E]/10 flex items-center justify-center group-hover/item:bg-[#004E7E]/20 transition-colors">
                                            <item.icon className="w-3.5 h-3.5 text-[#004E7E]" />
                                        </div>
                                        <p className={`text-slate-600 text-sm leading-relaxed ${item.bold ? 'font-bold' : ''} ${item.warning ? 'border-l-2 border-[#004E7E]/30 pl-3 py-0.5 italic' : ''}`}>
                                            {item.text}
                                        </p>
                                    </div>
                                ))}

                                {/* Query System Sub-box */}
                                <div className="bg-navy-dark rounded-2xl p-5 mt-5 border border-white/5 relative group/qms overflow-hidden">
                                    <div className="absolute inset-0 bg-[#004E7E]/5 translate-y-full group-hover/qms:translate-y-0 transition-transform duration-700" />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <MessageSquare className="w-5 h-5 text-[#004E7E]" />
                                            <h4 className="text-white font-display font-black text-sm uppercase tracking-widest">Query Management System</h4>
                                        </div>
                                        <p className="text-white/60 text-sm mb-3 leading-relaxed">
                                            Applicants are advised to use the Lexicon MILE-QMS rather than email for a faster response.
                                        </p>
                                        <div className="grid gap-3">
                                            {[
                                                "Register and verify your email ID",
                                                "Click on [Any Queries? Ask US] in your dashboard",
                                                "Select query category and submit"
                                            ].map((step, sidx) => (
                                                <div key={sidx} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0">
                                                    <span className="text-[#004E7E] font-display font-black text-xs">{sidx + 1}</span>
                                                    <span className="text-white/80 text-sm font-medium">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Steps to Follow */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative h-full">
                            {/* Stepper Header */}
                            <div className="relative mb-6 inline-block">
                                <div className="bg-navy-dark px-10 py-5 rounded-2xl shadow-xl flex items-center gap-4 border border-white/10 group">
                                    <QrCode className="w-6 h-6 text-[#004E7E] group-hover:rotate-12 transition-transform" />
                                    <h3 className="text-white font-display font-black text-xl uppercase tracking-[0.2em]">Steps to Follow</h3>
                                </div>
                            </div>

                            {/* Enhanced Vertical Stepper */}
                            <div className="relative pl-4 lg:pl-0 lg:flex lg:flex-col lg:items-center">

                                {/* Visual Line with Glow */}
                                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#004E7E] via-[#004E7E]/50 to-[#004E7E]/20 opacity-30 blur-[1px]" />
                                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-[#004E7E]/50" />

                                <div className="space-y-8 w-full">
                                    {steps.map((step, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative flex items-center lg:justify-between group cursor-default"
                                        >
                                            {/* Left Side (for desktops - toggled based on step.side) */}
                                            <div className={`hidden lg:flex w-[42%] justify-end text-right transition-all duration-500 ${step.side === 'left' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
                                                <div>
                                                    <p className="text-navy-dark font-black text-lg uppercase tracking-tight group-hover:text-[#004E7E] transition-colors">{step.title}</p>
                                                    <p className="text-slate-400 text-sm mt-1">{step.description}</p>
                                                </div>
                                            </div>

                                            {/* Center Node with Glow */}
                                            <div className="relative z-20 mx-4 lg:mx-0">
                                                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[#004E7E] shadow-[0_0_20px_rgba(0,78,126,0.2)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-[#004E7E]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <step.icon className="w-5 h-5 text-[#004E7E] relative z-10" />
                                                </div>
                                            </div>

                                            {/* Right Content / Mobile Content */}
                                            <div className={`flex flex-col lg:flex-row lg:items-center gap-4 w-full lg:w-[42%] transition-all duration-500 ${step.side === 'right' ? 'lg:opacity-100 lg:translate-x-0' : 'lg:opacity-0 lg:-translate-x-10 lg:pointer-events-none'} opacity-100 translate-x-0`}>
                                                <div className="lg:w-full">
                                                    <p className="text-navy-dark font-black text-lg uppercase tracking-tight group-hover:text-[#004E7E] transition-colors">{step.title}</p>
                                                    <p className="text-slate-400 text-sm mt-1">{step.description}</p>
                                                </div>
                                            </div>

                                        </motion.div>
                                    ))}
                                </div>

                                {/* Bottom Cap */}
                                <div className="absolute -bottom-12 left-6 lg:left-1/2 -translate-x-1/2">
                                    <div className="w-3 h-3 rounded-full bg-gold animate-ping" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AdmissionProcess;
