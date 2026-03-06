import { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu, TrendingUp, Presentation, Briefcase, GraduationCap, FileBadge, CalendarHeart, Users, ShieldAlert, Target } from "lucide-react";

const reasons = [
    {
        title: "Dual Internship Opportunity (Domestic/International) with two structured industry internships for enhanced real-world exposure.",
        icon: BrainCircuit,
    },
    {
        title: "State-of-the-art infrastructure with industry-grade equipment for real-world learning",
        icon: Cpu,
    },
    {
        title: "Educational field trips to wineries, dairy farms, hotels, distilleries, and more to promote experiential, stimulus-based learning",
        icon: TrendingUp,
    },
    {
        title: "Focused mentorship through an optimal 20:1 student–teacher ratio, ensuring individual attention",
        icon: Presentation,
    },
    {
        title: "A dedicated mentor for every student to track progress and keep parents informed",
        icon: Briefcase,
    },
    {
        title: "Industry-focused certifications in Digital Marketing, Conflict Resolution, Plant-Based Vegan Cuisine, and more",
        icon: GraduationCap,
    },
    {
        title: "Language enhancement through Spoken English and Spoken French certifications",
        icon: FileBadge,
    },
    {
        title: "Wi-Fi-enabled campus for seamless digital access",
        icon: CalendarHeart,
    },
    {
        title: "Soundproof amphitheatre with an attached kitchen studio designed for professional demonstrations",
        icon: Users,
    },
    {
        title: "Library and reading room access from 9:00 am to 9:00 pm on all working days for extended study hours",
        icon: ShieldAlert,
    },
    {
        title: "Indoor games room, football turf, and basketball court for a balanced campus life",
        icon: Target,
    },
    {
        title: "Lunch is available on a subscription basis",
        icon: Users,
    },
    {
        title: "Verified third-party hostel facility available at an additional charge",
        icon: Users,
    },
    {
        title: "Comprehensive Accidental Insurance Coverage for all students, supported by Doctor-on-Call and Ambulance-on-Call facilities for immediate medical and emergency response.",
        icon: Users,
    },
    {
        title: "Extended Practical Lab Hours embedded in the timetable for continuous hands-on learning.",
        icon: Users,
    },
];

const WhyChooseSection = () => {
    const [expanded, setExpanded] = useState(false);
    const visibleReasons = expanded ? reasons : reasons.slice(0, 8);

    return (
        <section className="pb-12 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="font-display text-[40px] leading-tight font-black text-[#002244] uppercase tracking-wide">
                        Why Choose <span className="text-[#004E7E]">Lexicon ?</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
                    {visibleReasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-[#FCF5F5] rounded-2xl p-6 border border-border shadow-md hover:shadow-lg hover:border-[#004E7E]/30 transition-all duration-300 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#004E7E]/10 flex items-center justify-center group-hover:bg-[#004E7E]/20 transition-colors">
                                <reason.icon className="w-6 h-6 text-[#004E7E]" />
                            </div>
                            <h3 className="font-display text-xs xl:text-sm font-normal text-foreground leading-tight">{reason.title}</h3>
                        </motion.div>
                    ))}
                </div>

                {reasons.length > 8 && (
                    <div className="text-center mt-8">
                        <button
                            className="px-6 py-2 bg-[#004E7E] text-white rounded-full hover:bg-[#003358] transition"
                            onClick={() => setExpanded((e) => !e)}
                        >
                            {expanded ? "Hide" : "Show More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WhyChooseSection;
