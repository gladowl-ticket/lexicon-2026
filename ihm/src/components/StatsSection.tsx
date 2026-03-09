import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { TrendingUp, Building2, Award, Users, ChevronLeft, ChevronRight } from "lucide-react";

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return { count, ref };
};

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Placement Offers",
    sublabel: "Every academic year",
    icon: TrendingUp,
  },
  {
    value: 200,
    suffix: "+",
    label: "Companies Visit",
    sublabel: "For recruitment annually",
    icon: Building2,
  },
  {
    value: 49,
    suffix: " LPA",
    label: "Highest Intl. Package",
    sublabel: "International placement record",
    icon: Award,
  },
  {
    value: 22,
    suffix: " LPA",
    label: "Highest National Package",
    sublabel: "Domestic placement record",
    icon: Users,
  },
];

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { count, ref } = useCountUp(stat.value, 2200);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="rounded-2xl overflow-hidden flex items-center gap-5 px-6 py-5"
      style={{
        background: "#002244",
        borderLeft: "4px solid rgba(255,255,255,0.6)",
      }}
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
        style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
        <Icon className="w-5 h-5 text-white" />
      </div>

      {/* Number + Label */}
      <div>
        <div className="font-display font-black text-white leading-none text-3xl">
          {count}{stat.suffix}
        </div>
        <p className="text-white font-semibold text-sm mt-0.5">{stat.label}</p>
        <p className="text-white/40 text-xs mt-0.5">{stat.sublabel}</p>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const totalImages = 8;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const prevImg = () => setCurrent((c) => (c - 1 + totalImages) % totalImages);
  const nextImg = () => setCurrent((c) => (c + 1) % totalImages);

  return (
    <section id="placements" className="py-12 bg-[#fff7b8] relative overflow-hidden">
      {/* Decorative circles matching reference */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FFD000] opacity-50 -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#FFD000] opacity-40 -ml-16 -mb-16 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Pill badge */}
          <span className="inline-block text-[#002244] text-xs font-bold tracking-widest uppercase mb-5 border border-[#002244]/30 rounded-full px-5 py-1.5">
            We are soaring high among Top Hotel Management institutes in Pune!
          </span>
           <h2 className="font-display text-[40px] leading-tight font-black text-[#002244] uppercase tracking-wide mb-8">
                        Our  <span className="text-[#004E7E]">Placements</span>
                    </h2>

            <div className={isMobile ? "relative w-full" : "flex flex-wrap"}>
              {isMobile ? (
                <>
                  <img
                    src={`./placements/${current + 1}.jpg`}
                    className="w-full h-auto rounded-md"
                    alt={`Placement ${current + 1}`}
                    onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
                    onTouchMove={(e) => setTouchEnd(e.touches[0].clientX)}
                    onTouchEnd={() => {
                      if (touchStart !== null && touchEnd !== null) {
                        const diff = touchStart - touchEnd;
                        if (diff > 50) nextImg();
                        else if (diff < -50) prevImg();
                      }
                      setTouchStart(null);
                      setTouchEnd(null);
                    }}
                  />
                  <button
                    onClick={prevImg}
                    className="absolute left-[38%] -bottom-12 transform p-2 bg-white rounded-full shadow"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-[38%] -bottom-12 transform p-2 bg-white rounded-full shadow"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              ) : (
                Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="lg:w-3/12 w-full md:w-6/12 p-2">
                    <img
                      src={`./placements/${i + 1}.jpg`}
                      className="w-full h-auto rounded-md"
                      alt={`Placement ${i + 1}`}
                    />
                  </div>
                ))
              )}
            </div>

          </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
