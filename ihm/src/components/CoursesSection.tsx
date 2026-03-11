import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Globe, CheckCircle2, Clock, Users, Award, BookOpen, Star } from "lucide-react";

const programs = [
  {
    id: "bsc",
    icon: GraduationCap,
    fullName: "B.Sc. in Hospitality Studies",
    desc: "The B.Sc. in Hospitality Studies (YCMOU Affiliated) is a 3-year degree program with dual internship opportunities, designed for students seeking immersive, hands-on training through a strong “learning by doing” approach, with practical sessions at the end of every module. Lexicon MILE (Study Center No. 62582) is an authorized YCMOU study center offering the B.Sc. Hospitality Studies (UGP02) program, structured as per NEP guidelines with a balanced focus on theoretical knowledge, practical skills, and service aptitude. The degree is recognized by the Association of Indian Universities (AIU) and is at par with degrees, diplomas, and certificates of all Indian universities and institutions, as per UGC guidelines, ensuring strong academic and industry credibility.",
    duration: "2 Years Full-Time",
    type: "Domestic",
    accent: "#002244",
    accentLight: "#004E7E",
    bgGradient: "linear-gradient(135deg, #001830 0%, #002F4D 60%, #003D66 100%)",
    highlights: [
      { icon: Clock, text: "3 Years Full-Time" }
    ],
    features: [
      "Emphasis on live project-based learning.",
      "Flexibility for career switchers – ideal for both fresh graduates and those entering hospitality mid-career.",
      "International internship pathways enabling students to explore global markets.*",
      "Industry-aligned Hospitality Professional Skills certifications enhancing employability, career growth, and entrepreneurship.",
    ],
    eligibility: "Candidate should be 12th Pass from ICSE, CBSE, IGCSE (ICE) or any other recognised board by the competent authority. An equivalence certificate is required from the respective board in case the result is in grade/credit points.",
    modalEvent: "openBscModal",
    enquireEvent: "openEnquireModal",
    note: "",
  },
  {
    id: "diploma",
    icon: GraduationCap,
    label: "Diploma",
    fullName: "Diploma in Hospitality Studies",
    desc: "The Diploma in Hospitality Studies (YCMOU Affiliated) is a 1-year intensive program that equips students with the essential skills to step into the world of hospitality. Designed for those seeking a quick entry into the workforce, it provides focused training across hotel operations. <br/> Lexicon MILE (Study Center No. 62582) is an authorized YCMOU study center offering the 1-year Diploma in Hospitality Studies (V121) program, structured as per NEP guidelines combining theoretical knowledge, practical skills, and service aptitude. The program is recognized by the Association of Indian Universities (AIU) and is equivalent to degrees, diplomas, and certificates of all Indian universities and institutions, as per UGC guidelines.",
    duration: "International Program",
    type: "International",
    accent: "#002244",
    accentLight: "#004E7E",
    bgGradient: "linear-gradient(135deg, #0A1F3A 0%, #0D2E50 60%, #0F3A66 100%)",
    highlights: [
      { icon: Clock, text: "1 Year Full-Time" }
    ],
    features: [
      "Fast-track, industry-relevant programs",
      "Earn-While-You-Learn with embedded internships",
      "Apprenticeship opportunities with leading hotel brands",
      "Affordable fees with strong placement & internship support",
      "5 months of on-campus training + 6 months of internship to make students industry-ready hospitality professionals from day one"
    ],
    eligibility: " Candidate should be 12th Pass from ICSE, CBSE, IGCSE (ICE) & any other recognised board by the competent authority. An equivalence certificate is required from the respective board in case the result is in grade/credit points.",
    modalEvent: "openMbaModal",
    enquireEvent: "openEnquireModal",
    note: null,
  },
];

const CoursesSection = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggleExpanded = (id: string) => setExpanded((s) => ({ ...s, [id]: !s[id] }));
  const isExpanded = (id: string) => !!expanded[id];
  const TRUNCATE_LEN = 300;

  return (
    <section id="programs" className="py-12 bg-[#F9F2E2] relative overflow-hidden">
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
          <h2 className="font-display text-[40px] leading-tight font-black text-[#002244] uppercase tracking-wide">
            Admission <span className="text-[#004E7E]">Information</span>
          </h2>
        </motion.div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            const plainDesc = prog.desc.replace(/<[^>]+>/g, "");
            const isLong = plainDesc.length > TRUNCATE_LEN;
            const shortDesc = isLong ? plainDesc.slice(0, TRUNCATE_LEN) : plainDesc;
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
                  </div>

                  {/* Title */}
                  <p className="text-[#002244] text-2xl font-bold">{prog.fullName}</p>
                  <div className="text-[#4A5568] text-sm leading-relaxed mt-4">
                    {!isExpanded(prog.id) ? (
                      <>
                        <span>{shortDesc}</span>
                        {isLong && (
                          <button onClick={() => toggleExpanded(prog.id)} className="ml-2 text-[#004E7E] font-bold">
                            Read more
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                        <div dangerouslySetInnerHTML={{ __html: prog.desc }} />
                        {isLong && (
                          <button onClick={() => toggleExpanded(prog.id)} className="ml-2 text-[#004E7E] font-bold">
                            Read less
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Highlights Row */}
                <div className="grid border-b border-[#002244]/10">
                  {prog.highlights.map((h, j) => {
                    const HIcon = h.icon;
                    return (
                      <div key={j} className={`px-5 py-4 flex items-center gap-1.5 text-center ${j < 2 ? "border-r border-[#002244]/10" : ""}`}>
                        <HIcon className="w-4 h-4 text-[#004E7E]/50" />
                        <span className="text-[#4A5568] text-xs leading-snug mb-0">{h.text}</span>
                      </div>
                    );
                  })}
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
                </div>
              </motion.div>
            );
          })}
          {/* <div className="h-full">
            <img src="./programs/2.jpg" className="w-full h-full rounded-2xl object-cover" alt="" />
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;
