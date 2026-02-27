import { motion } from "framer-motion";
import { BrainCircuit, Cpu, TrendingUp, Presentation, Briefcase, GraduationCap, FileBadge, CalendarHeart, Users, ShieldAlert, Target } from "lucide-react";

const reasons = [
    {
        title: "India's Most Structured AI-Integrated PGDM Journey",
        description: "AI integrated across 6 trimesters through a structured build-and-deploy learning model.",
        icon: BrainCircuit,
    },
    {
        title: "Hyper Build - The AI Lab + Core PGDM Classes",
        description: "Daily 5-hour applied AI immersion integrated with core management learning for business-focused execution.",
        icon: Cpu,
    },
    {
        title: "Outstanding Placement Outcomes",
        description: "Strong returning recruiter network and multiple placement opportunities.",
        icon: TrendingUp,
    },
    {
        title: "Corporate Co-Learning Model",
        description: "Graduated with 2 years of full-time PGDM + 2 years of real corporate work experience.",
        icon: Presentation,
    },
    {
        title: "Strong Internship & Live Project Exposure",
        description: "Continuous industry immersion through internships and live business assignments.",
        icon: Briefcase,
    },
    {
        title: "Degree + Business Launch",
        description: "Build and launch your own venture while earning your PGDM.",
        icon: GraduationCap,
    },
    {
        title: "Employment-Enhancing Certifications",
        description: "Data Analytics | AI & Digital Marketing | Financial Modelling | Power BI | Python/R | Six Sigma | Talent Acquisition | Business Communication.",
        icon: FileBadge,
    },
    {
        title: "Corporate Saturdays - Second to None",
        description: "Leadership Conclaves | Panel Discussions | Corporate Talk Series | Domain Mastery Workshops.",
        icon: CalendarHeart,
    },
    {
        title: "Placement Mentorship & Career Readiness Support",
        description: "CV building | LinkedIn optimisation | Mock interviews | AI-driven interview preparation.",
        icon: Users,
    },
    {
        title: "FailLab & Social Immersion",
        description: "A safe-to-fail business simulation model that builds resilience and responsible leadership.",
        icon: ShieldAlert,
    },
    {
        title: "Placement Mentorship",
        description: "From crafting standout portfolios and optimizing LinkedIn profiles to mastering AI-driven interview preparation and soft skills development.",
        icon: Target,
    },
    {
        title: "200+ Industry Recruiters",
        description: "Robust network of industry leaders opening doors for paid internships and full-time employment at top organizations.",
        icon: Users,
    },
];

const WhyChooseSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-[48px] leading-tight font-black text-[#002244] uppercase tracking-wide">
                        Why Choose <span className="text-[#004E7E]">Lexicon MILE</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
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
            </div>
        </section>
    );
};

export default WhyChooseSection;
