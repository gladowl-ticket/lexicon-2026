import { motion } from "framer-motion";
import { BadgeCheck, FileSpreadsheet, Truck, TrendingUp, Landmark, BarChart3, Code2, Linkedin, Briefcase } from "lucide-react";

const certifications = [
    { name: "Six Sigma Certification", icon: BadgeCheck },
    { name: "MS Office Suite (Excel, Power BI, etc.)", icon: FileSpreadsheet },
    { name: "Supply Chain Management", icon: Truck },
    { name: "Digital Marketing & AI Powered Digital Marketing", icon: TrendingUp },
    { name: "Financial Modelling", icon: Landmark },
    { name: "Data Analytics with Tableau", icon: BarChart3 },
    { name: "Python/R Programming Language", icon: Code2 },
    { name: "LinkedIn Profile Optimization", icon: Linkedin },
    { name: "Talent Acquisition Practices", icon: Briefcase },
];

const CertificationsSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display md:text-[40px] text-[34px] font-black text-[#002244] uppercase tracking-wide">
                        Employment Enhancing <span className="text-[#004E7E]">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="rounded-2xl p-6 border border-[#004E7E]/10 bg-[#FCF5F5] flex items-center justify-between shadow-sm hover:shadow-md transition-shadow min-h-[120px] group"
                        >
                            <div className="text-left flex-1 pr-4">
                                <h3 className="font-display font-normal text-[#0A1128] text-xs xl:text-sm leading-tight transition-colors">
                                    {cert.name}
                                </h3>
                            </div>
                            <div className="shrink-0">
                                <div className="w-14 h-14 rounded-full border border-[#004E7E]/20 text-[#004E7E] flex items-center justify-center bg-white shadow-sm group-hover:bg-[#004E7E]/5 transition-colors">
                                    <cert.icon className="w-7 h-7" strokeWidth={1.5} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
