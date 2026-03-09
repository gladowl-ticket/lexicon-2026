import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type TestimonialCategory = "student" | "corporate" ;

const testimonials = {
    student: [
        {
            videos: ["LmQpqnBeW94", "ekNSKaxwziY"],
        },
        {
            videos: ["I_gHvPVLdtQ", "6dSSi83oHcw"],
        },
        {
            videos: ["5yAnjRnq2rs", "eIn6IYb47VA"],
        },
        {
            videos: ["gMbHlrXkRls", "YIG0FY24kvs"],
        },
        {
            videos: ["HZ-wDjmy2Q8", "cmu05iFFgM8"],
        },
        {
            videos: ["i3-Nh2yTapw", "LmQpqnBeW94"],
        }
    ],
    corporate: [
        {
            videos: ["KYAeOcdvlkA", "YFNwslRtMUc"],
        },
        {
            videos: ["QynDExkNii4", "svVqV73N9RA"],
        },
        {
            videos: ["HqMYPVIXiAU", "67-kKu43Eus"],
        },
        {
            videos: ["ymDVAwOaV6Q", "Vr1l4Yz-0yQ"],
        },
        {
            videos: ["jGbOs3Izaf4", "y-9MiIGUTyI"],
        },
        {
            videos: ["Wi61D0NtoyY", "5HHOa2DJ-Gc"],
        },
        {
            videos: ["axuVUq_ExYc", "ydnHvs8TEJg"],
        }
    ],
};

const tabs: { key: TestimonialCategory; label: string }[] = [
    { key: "student", label: "Student Testimonials" },
    { key: "corporate", label: "Corporate Testimonials" },
];

const TestimonialsSection = () => {
    const [activeTab, setActiveTab] = useState<TestimonialCategory>("student");
    const [activeIdx, setActiveIdx] = useState(0);

    const list = testimonials[activeTab];

    const prev = () => setActiveIdx((i) => (i - 1 + list.length) % list.length);
    const next = () => setActiveIdx((i) => (i + 1) % list.length);

    const handleTabChange = (tab: TestimonialCategory) => {
        setActiveTab(tab);
        setActiveIdx(0);
    };

    return (
        <section className="py-12 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-[#004E7E] text-sm font-semibold tracking-widest uppercase font-body">Voices of Success</span>
                    <h2 className="font-display text-[40px] leading-tight font-black text-[#002244] uppercase tracking-wide mt-3">
                        What They <span className="text-[#004E7E]">Say</span>
                    </h2>
                </motion.div>

                {/* Tab Switcher */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => handleTabChange(tab.key)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === tab.key
                                ? "bg-[#004E7E] text-white shadow-[#004E7E]"
                                : "bg-card border border-border text-muted-foreground hover:border-[#004E7E]/30"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Testimonial Card */}
                <motion.div
                    key={`${activeTab}-${activeIdx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-card rounded-2xl border border-border shadow-elevated overflow-hidden"
                >
                    <div className="grid lg:grid-cols-2 gap-4">
                        {(list[activeIdx] as any).videos?.map((vidId: string, idx: number) => (
                            <div key={idx} className="aspect-video bg-navy-dark relative w-full rounded-xl lg:rounded-none overflow-hidden">
                                <iframe
                                    className="w-full h-full min-h-[250px] md:min-h-[280px]"
                                    src={`https://www.youtube.com/embed/${vidId}?rel=0`}
                                    title={`${activeTab} testimonial video ${idx + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-[#004E7E]/40 hover:text-[#004E7E] transition-all"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                        {list.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIdx(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === activeIdx ? "bg-[#004E7E] w-6" : "bg-muted-foreground/30"
                                    }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-[#004E7E]/40 hover:text-[#004E7E] transition-all"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
