import { motion } from "framer-motion";


const PartnersSection = () => (
  <section id="partners" className="py-12 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <span className="text-[#004E7E] text-sm font-semibold tracking-widest uppercase font-body">Internships and Placements</span>
        <h2 className="font-display text-[40px] leading-tight font-black text-[#002244] uppercase tracking-wide mt-3">
          Recruitment <span className="text-[#004E7E]">Partners</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body">
          We are soaring high among Top Hotel Management institutes in Pune! 
        </p>
      </motion.div>
      <div className="w-full">
        <img src="./placements/placements.png" className="hidden md:block" alt="" />
        <img src="./placements/Placements01.png" className="block md:hidden" alt="" />
        <img src="./placements/Placements02.png" className="block md:hidden" alt="" />
      </div>
    </div>
  </section>
);

export default PartnersSection;
