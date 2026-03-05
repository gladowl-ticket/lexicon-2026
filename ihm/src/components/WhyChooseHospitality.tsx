import { useState } from "react";
import { motion } from "framer-motion";
import { Smile, Zap, Briefcase, Clock, Users, TrendingUp, DollarSign, Compass, Globe, Lightbulb } from "lucide-react";

const reasons = [
    {
        title: "YOU MAKE PEOPLE'S DAY",
        desc: "Both the hospitality and tourism industries are people-driven.",
        icon: Smile,
    },
    {
        title: "IT'S A POWERFUL INDUSTRY",
        desc: "Tourism & Hospitality is the world's largest and fastest growing industry.",
        icon: Zap,
    },
    {
        title: "DIVERSE AND DYNAMIC WORK ENVIRONMENTS",
        desc: "A variety of many career paths.",
        icon: Briefcase,
    },
    {
        title: "IT'S FLEXIBLE",
        desc: "It offers many possibilities for a flexible schedule and also seasonal jobs.",
        icon: Clock,
    },
    {
        title: "GREAT ATMOSPHERE",
        desc: "Friendly and vibrant people working together to satisfy and delight customers.",
        icon: Users,
    },
    {
        title: "EASY ENTRY AND ADVANCEMENT",
        desc: "Entry level job opportunities. For ambitious and dedicated workers, there are also possibilities of quick promotions.",
        icon: TrendingUp,
    },
    {
        title: "GREAT PERKS",
        desc: "It offers highly competitive pays and compensation.",
        icon: DollarSign,
    },
    {
        title: "ENDLESS OPPORTUNITIES",
        desc: "Possibilities to combine work with travel and meet new challenges.",
        icon: Compass,
    },
    {
        title: "IT'S GLOBAL!",
        desc: "You can move across the globe. Besides, the skills you'll get while working in hospitality and tourism are transferable to many other industries.",
        icon: Globe,
    },
    {
        title: "IT'S A CREATIVE INDUSTRY",
        desc: "There is always a way to make your service more enjoyable for your customers.",
        icon: Lightbulb,
    },
];

const WhyChooseHospitality = () => {
    const [expanded, setExpanded] = useState(false);
    const visibleReasons = expanded ? reasons : reasons.slice(0, 8);

    return (
        <section className="py-12 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="font-display text-[40px] leading-tight font-black text-[#002244] uppercase tracking-wide">
                        Why Hospitality <span className="text-[#004E7E]">Management?</span>
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
                            <div>
                                <h3 className="font-display text-xs xl:text-sm font-bold text-foreground leading-tight">{reason.title}</h3>
                                <p className="text-sm">{reason.desc}</p>
                            </div>
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

export default WhyChooseHospitality;
