import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Globe, CheckCircle2, Clock, Users, Award, BookOpen, Star } from "lucide-react";

const programs = [
  {
    id: "pgdm",
    badge: "AICTE APPROVED · 1-4255511",
    flag: "🏆 Flagship Program",
    icon: GraduationCap,
    label: "PGDM",
    fullName: "Post Graduate Diploma in Management",
    duration: "2 Years Full-Time",
    type: "Domestic",
    accent: "#002244",
    accentLight: "#004E7E",
    bgGradient: "linear-gradient(135deg, #001830 0%, #002F4D 60%, #003D66 100%)",
    highlights: [
      { icon: Clock, text: "2 Years Full-Time" },
      { icon: Users, text: "Small Batch Sizes" },
      { icon: Award, text: "Top Ranked Institute" },
    ],
    specialisations: [
      "PGDM – Marketing and Finance",
      "PGDM – Research & Business Analytics",
      "PGDM – Finance, Marketing & HRM*",
    ],
    eligibility: "Any Bachelor's Degree (min. 3 yrs) with 50% marks (45% for reserved category)",
    tag: "Most Popular",
    modalEvent: "openPgdmModal",
    enquireEvent: "openEnquireModal",
    note: "*Course name change in process.",
  },
  {
    id: "mba",
    badge: "INTERNATIONAL DUAL DEGREE",
    flag: "🌍 Global Program",
    icon: Globe,
    label: "MBA Global",
    fullName: "MBA – University of South Wales, UK",
    duration: "International Program",
    type: "International",
    accent: "#002244",
    accentLight: "#004E7E",
    bgGradient: "linear-gradient(135deg, #0A1F3A 0%, #0D2E50 60%, #0F3A66 100%)",
    highlights: [
      { icon: Globe, text: "UK Recognized Degree" },
      { icon: BookOpen, text: "180 Credits Total" },
      { icon: Star, text: "Dual Degree" },
    ],
    specialisations: [
      "80 credits at Lexicon MILE, Pune",
      "100 credits at University of South Wales, UK",
    ],
    eligibility: "Graduation with minimum 55% from a recognized university",
    tag: "Intl. Dual Degree",
    modalEvent: "openMbaModal",
    enquireEvent: "openEnquireModal",
    note: null,
  },
];

const CoursesSection = () => {
  return (
    <section id="programs" className="py-24 bg-[#F9F2E2] relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#002244]/5" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#004E7E]/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#004E7E] text-sm font-semibold tracking-widest uppercase mb-4 border border-[#004E7E]/30 rounded-full px-4 py-1 bg-[#004E7E]/5">
            Our Programs
          </span>
          <h2 className="font-display text-[48px] leading-tight font-black text-[#002244] uppercase tracking-wide">
            Admission <span className="text-[#004E7E]">Information</span>
          </h2>
          <p className="text-[#4A5568] text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Choose your path to leadership. Two world-class programs designed for the next generation of business leaders.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-3xl overflow-hidden shadow-lg flex flex-col border border-[#E2E8F0]"
                style={{ backgroundColor: "#ffffff" }}
              >
                {/* Card Header Band */}
                <div className="px-8 pt-8 pb-6 border-b border-[#002244]/10">
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: prog.accentLight + "22", border: `1px solid ${prog.accentLight}44` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: prog.accentLight }} />
                    </div>
                    {/* Badges */}
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full border"
                        style={{ color: prog.accentLight, borderColor: prog.accentLight + "44" }}
                      >
                        {prog.badge}
                      </span>
                      <span className="text-[#4A5568] text-xs">{prog.flag}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex items-end gap-3 mb-1">
                    <h3 className="text-5xl font-black text-[#002244] font-display tracking-tight">{prog.label}</h3>
                    <span
                      className="mb-2 text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: prog.accentLight + "33", color: prog.accentLight }}
                    >
                      {prog.tag}
                    </span>
                  </div>
                  <p className="text-[#4A5568] text-sm">{prog.fullName}</p>
                </div>

                {/* Highlights Row */}
                <div className="grid grid-cols-3 border-b border-[#002244]/10">
                  {prog.highlights.map((h, j) => {
                    const HIcon = h.icon;
                    return (
                      <div key={j} className={`px-5 py-4 flex flex-col items-center gap-1.5 text-center ${j < 2 ? "border-r border-[#002244]/10" : ""}`}>
                        <HIcon className="w-4 h-4 text-[#004E7E]/50" />
                        <span className="text-[#4A5568] text-xs leading-snug">{h.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Specialisations */}
                <div className="px-8 py-6 border-b border-[#002244]/10 flex-grow">
                  <p
                    className="text-[10px] uppercase font-bold tracking-widest mb-4"
                    style={{ color: prog.accentLight }}
                  >
                    Specialisations
                  </p>
                  <ul className="space-y-3">
                    {prog.specialisations.map((item, k) => (
                      <li key={k} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: prog.accentLight }}
                        />
                        <span className="text-[#002244] text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {prog.note && (
                    <p className="text-[#4A5568]/60 text-[10px] mt-4 italic">{prog.note}</p>
                  )}
                </div>

                {/* Eligibility */}
                <div className="px-8 py-5 border-b border-[#002244]/10">
                  <p
                    className="text-[10px] uppercase font-bold tracking-widest mb-2"
                    style={{ color: prog.accentLight }}
                  >
                    Eligibility
                  </p>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{prog.eligibility}</p>
                </div>

                {/* CTAs */}
                <div className="px-8 py-6 flex flex-col gap-3">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent(prog.enquireEvent))}
                    className="w-full py-4 rounded-2xl font-bold text-sm tracking-widest flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                    style={{ backgroundColor: "#002244", color: "#ffffff" }}
                  >
                    RESERVE YOUR SEAT <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent(prog.modalEvent))}
                    className="w-full py-3 text-[#4A5568] text-xs font-bold tracking-widest hover:text-[#002244] transition-colors uppercase"
                  >
                    Download Detailed Prospectus
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl px-8 py-5 flex flex-wrap items-center justify-center gap-8 shadow-sm border border-[#004E7E]/10"
        >
          {[
            { label: "AICTE Approved", value: "1-4255511" },
            { label: "Ranked", value: "#1 Private Standalone, Pune" },
            { label: "Placement Rate", value: "93%+" },
            { label: "Industry Partners", value: "200+" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-[#002244] font-black text-lg font-display">{item.value}</p>
              <p className="text-[#4A5568] text-xs">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
