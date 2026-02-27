import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Users, Briefcase, Cpu } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#004E7E] text-sm font-semibold tracking-widest uppercase font-body">About Us</span>
          <h2 className="font-display text-[36px] leading-tight font-black text-foreground mt-3 mb-6">
            Transforming Business Education Since <span className="text-[#004E7E]">2009</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 font-body">
            Lexicon Management Institute of Leadership & Excellence (Lexicon MILE), Pune, founded as part of the Lexicon Group, has been transforming business education for the past 15 years. Our two-year, full-time Post Graduate Diploma in Management (PGDM) program goes beyond traditional learning, with a bold emphasis on entrepreneurship and start-up culture.
          </p>
          <p className="text-muted-foreground leading-relaxed font-body">
            At Lexicon MILE, we shape versatile leaders, ready to thrive in managerial roles at top organizations, and qualified with the skills, confidence, and entrepreneurial mindset essential for success in specialized career paths.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { icon: BookOpen, title: "AICTE Approved", desc: "Nationally recognized program" },
            { icon: Lightbulb, title: "Entrepreneurship Focus", desc: "Startup culture mindset" },
            { icon: Users, title: "Industry Leaders", desc: "200+ recruiting companies" },
            { icon: Briefcase, title: "Capstone Projects", desc: "Real-world business challenges" },
          ].map((item, i) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-4 shadow-card hover:shadow-elevated transition-shadow duration-300 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-[#004E7E]/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#004E7E]" />
              </div>
              <h3 className="font-display text-md text-wrap font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
