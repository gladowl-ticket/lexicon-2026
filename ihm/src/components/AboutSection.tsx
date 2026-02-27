import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Users, Briefcase, Cpu } from "lucide-react";

const AboutSection = () => (
<section id="about" className="py-24 bg-background">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-4 md:gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        <span className="text-[#004E7E] text-sm font-semibold tracking-widest uppercase font-body">About Us</span>
        <h2 className="font-display text-[36px] leading-tight font-black text-foreground mt-3 mb-6">
          By the Hoteliers, <br/>
           For the Hoteliers.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6 font-body">
          At our institution, we understand the evolving needs of the hospitality industry and have crafted our hotel
          management courses in Pune to prepare students to become Day Zero Professionals. This means our curriculum
          blends in-depth theoretical knowledge, hands-on practical training, and immersive experiential learning right
          from day one.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }} className="">
        <iframe
          src="https://www.youtube.com/embed/ip2ZPCOjK98?si=hCZoqYZck2zvK7Y0"
          title="YouTube video player"
          frameBorder="0"
          className="rounded-lg w-full h-[220px] md:h-[330px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </motion.div>
    </div>
  </div>
</section>
);

export default AboutSection;