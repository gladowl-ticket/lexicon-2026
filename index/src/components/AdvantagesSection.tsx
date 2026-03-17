import { motion } from "framer-motion";
import { Rocket, Users, Brain, Cpu, Target, Award, Lightbulb, Monitor } from "lucide-react";

const advantages = [
  {
    icon: Target,
    title: "Placement Mentorship",
    description: "From crafting standout portfolios and optimizing LinkedIn profiles to mastering AI-driven interview preparation and soft skills development.",
  },
  {
    icon: Users,
    title: "200+ Industry Recruiters",
    description: "Robust network of industry leaders opening doors for paid internships and full-time employment at top organizations.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurial Spirit",
    description: "Students learn to think as entrepreneurs and social entrepreneurs, equipped to drive positive impact in business and society.",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description: "Curriculum integrates analytics, AI, and digital strategies with a focus on social innovation and sustainability.",
  },
  {
    icon: Brain,
    title: "Capstone Project",
    description: "Immersive simulations and real-world challenges that sharpen practical skills and broaden your global perspective.",
  },
  {
    icon: Award,
    title: "National Rankings",
    description: "Ranked #1 Private Standalone Institute in Pune (Outlook 2024), Top 5 in West by Times B-School, and recognized by BW Businessworld consistently.",
  },
  {
    icon: Lightbulb,
    title: "Hyper Build Lab: Innovation",
    description: "A dedicated incubation space for students to brainstorm, prototype, and build innovative solutions for real-world business challenges.",
  },
  {
    icon: Monitor,
    title: "Hyper Build Lab: Applied Tech",
    description: "Hands-on experience with modern technological tools, giving students the practical knowledge needed to thrive in digital-first organizations.",
  },
];

const AdvantagesSection = () => (
  <section className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-[#004E7E] text-sm font-semibold tracking-widest uppercase font-body">Why Lexicon MILE</span>
        <h2 className="font-display text-[40px] leading-tight font-black text-[#002244] uppercase tracking-wide mt-3">
          The Lexicon MILE <span className="text-[#004E7E]">Advantage</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {advantages.map((adv, i) => (
          <motion.div
            key={adv.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-2xl p-6 border border-border shadow-md hover:shadow-lg hover:border-[#004E7E]/30 transition-all duration-300 flex items-center gap-4"
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-[#004E7E]/10 flex items-center justify-center group-hover:bg-[#004E7E]/20 transition-colors">
              <adv.icon className="w-6 h-6 text-[#004E7E]" />
            </div>
            <h3 className="font-display text-xs xl:text-sm font-normal text-foreground leading-tight">{adv.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
