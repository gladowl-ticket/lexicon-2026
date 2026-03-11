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
        description: "Review and finalize your Admission journey.",
        icon: Send,
        side: "right",
    },
];

const AdmissionProcess = () => {
    return (
        <section id="admission-process" className="py-14 bg-[#FCF5F5] relative overflow-hidden font-body">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-[#004E7E]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-navy/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="text-[#004E7E] text-sm font-bold tracking-[0.2em] uppercase font-display bg-[#004E7E]/5 px-4 py-1.5 rounded-full">
                        Guided Journey
                    </span>
                    <h2 className="font-display text-[40px] font-black text-[#002244] mt-3 leading-tight uppercase tracking-wide">
                        Admission <span className="text-[#004E7E]">Process</span>
                    </h2>
                </motion.div>

                <div className="">

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
                            <div className="relative mb-12 w-full flex justify-center ">
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
