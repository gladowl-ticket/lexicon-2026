import { motion } from "framer-motion";
import { Eye, Target, Heart } from "lucide-react";

const coreValues = [
  { title: "Excellence", desc: "We perform to be outstanding and strive for brilliance in all that we do." },
  { title: "Integrity", desc: "We rise above personal bias, endeavor to sustain trust and conduct ourelves with impeccable loyalty and fairness." },
  { title: "Ownership", desc: "We own up our words and actions with accountability." },
  { title: "Discipline", desc: "We honor responsibility and venerate the commitments to work and life, with dedication and devotion." },
  { title: "Passion", desc: "We work with an incomparable passion to make a positive change towards a holistic and wholesome life." },
  { title: "Humility", desc: "We believe whatever heights one reaches in life, modesty and unassuming nature are the true hallmarks of a management professional." },
  { title: "Gratitude", desc: "We remain indebted towards the goodness of humanity, society and the benevolence of life." },
  { title: "Respect", desc: "We revere the identity of each individual we interact with and value their dignity, existence and purpose of life." },
  { title: "Environment Sensitivity", desc: "We aim to protect and promote environmental sustainability." },
];

const VisionSection = () => (
  <section className="py-24 bg-hero relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_hsla(42,60%,55%,0.05)_0%,_transparent_60%)]" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 lg:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#004E7E]/10 flex items-center justify-center">
              <Eye className="w-5 h-5 text-[#004E7E]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-black">Vision</h3>
          </div>
          <p className="text-primary-foreground/70 leading-relaxed font-body">
            To be a globally recognized institute for management education and leadership excellence, fostering innovative leaders who contribute to sustainable business practices and their organizations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="glass-card rounded-2xl p-8 lg:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#004E7E]/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-[#004E7E]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-black">Mission</h3>
          </div>
          <p className="text-primary-foreground/70 leading-relaxed font-body">
            To provide a transformative learning process for aspiring global leaders, bringing together academic rigor with real-world relevance. Committed to fostering academic progress, innovation, and inclusivity through research, internships, and experiential learning.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <Heart className="w-5 h-5 text-[#004E7E]" />
          <h3 className="font-display text-2xl font-bold text-black">Core Values</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {coreValues.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-[#004E7E]/30 hover:bg-white/5 transition-all group"
            >
              <h4 className="font-display font-bold text-lg text-black mb-2 transition-colors">{value.title}</h4>
              <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default VisionSection;
