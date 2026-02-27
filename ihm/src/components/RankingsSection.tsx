import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const rankings = [
    { id: 1, img: "https://placehold.co/400x300/e9ecef/a3a8b2?text=Ranking+Image+1" },
    { id: 2, img: "https://placehold.co/400x300/e9ecef/a3a8b2?text=Ranking+Image+2" },
    { id: 3, img: "https://placehold.co/400x300/e9ecef/a3a8b2?text=Ranking+Image+3" },
    { id: 4, img: "https://placehold.co/400x300/e9ecef/a3a8b2?text=Ranking+Image+4" },
    { id: 5, img: "https://placehold.co/400x300/e9ecef/a3a8b2?text=Ranking+Image+5" },
    { id: 6, img: "https://placehold.co/400x300/e9ecef/a3a8b2?text=Ranking+Image+6" },
];

const RankingsSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

                // If we've reached the end, scroll back to the start
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Scroll by approximately the width of one card + gap (280px + 24px)
                    scrollRef.current.scrollBy({ left: 304, behavior: 'smooth' });
                }
            }
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <style>{`
                .hide-scroll::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-[40px] leading-tight font-black text-[#002244] uppercase tracking-wide">
                        Ranking & <span className="text-[#004E7E]">Recognitions</span>
                    </h2>
                </motion.div>

                <div
                    ref={scrollRef}
                    className="flex flex-nowrap overflow-x-auto gap-6 pb-8 snap-x hide-scroll"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {rankings.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex-none w-[350px] aspect-[4/3] snap-center rounded-xl overflow-hidden shadow-sm border border-border bg-muted"
                        >
                            <img src={item.img} alt={`Ranking ${item.id}`} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RankingsSection;

