import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type TestimonialCategory = "student" | "corporate" | "parent";

const testimonials = {
    student: [
        {
            name: "Devyani Pardhi",
            role: "",
            company: "",
            videoId: "q3W_rZ1VyWQ",
            text: "Lexicon MILE transformed my perspective on management. The faculty are industry veterans who bring real-world insights into every session.",
        },
        {
            name: "Ajinkya",
            role: "",
            company: "",
            videoId: "RPuMuJjynlc",
            text: "The international exposure through the USW partnership was invaluable. I got to experience global business education firsthand.",
        },
        {
            name: "Palak Keshari",
            role: "",
            company: "",
            videoId: "VwIQh-wiviY",
            text: "The placement mentorship program was exceptional. Right from building your resume to mock interviews, every step was supported professionally.",
        },
        {
            name: "Akash Bisht",
            role: "",
            company: "",
            videoId: "v1wEMuHYywc",
            text: "The practical exposure and case-study based learning at Lexicon MILE prepared me perfectly for the corporate world.",
        },
        {
            name: "Khwaish Taneja",
            role: "",
            company: "",
            videoId: "im-Y6inWMAI",
            text: "The focus on data analytics and modern tools gave me a significant edge during my internship interviews.",
        },
        {
            name: "Shreya Sharma",
            role: "",
            company: "",
            videoId: "9FAjG9AcrCs",
            text: "Developing a global mindset while studying in Pune and the UK was life-changing. I highly recommend the Global MBA program.",
        },
        {
            name: "Trupti Gupta",
            role: "",
            company: "",
            videoId: "QQq19Eb0Oys",
            text: "The leadership workshops and executive presence training at Lexicon MILE are truly world-class.",
        },
        {
            name: "Shipra Chauhan",
            role: "",
            company: "",
            videoId: "2TV239uzwxo",
            text: "The finance curriculum is incredibly rigorous and aligned with what top-tier banks are looking for today.",
        },
    ],
    corporate: [
        {
            videos: ["P8neB9ppnUM", "JztQ6M0z_vY"],
        },
        {
            videos: ["I7vx-IppHcM", "yRPbETS_O9E"],
        },
        {
            videos: ["chK2vVObfSI", "hCX4CjaW4GI"],
        },
        {
            videos: ["7PdAGAFIL4g", "n21vWvnNGto"],
        },
        {
            videos: ["J85cXxk0mU0", "HiwZdJO5k7A"],
        },
        {
            videos: ["vX73OtEkn8c", "PS5liNO9vI0"],
        }
    ],
    parent: [
        {
            videos: ["Vj67vB0hhaA", "yo3T8-YmjMY"],
        },
        {
            videos: ["WnnjLyq9lCg"],
        }
    ],
};

const tabs: { key: TestimonialCategory; label: string }[] = [
    { key: "student", label: "Student Testimonials" },
    { key: "corporate", label: "Corporate Testimonials" },
    { key: "parent", label: "Parent Testimonials" },
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
        <section className="py-24 bg-background">
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
                    <div className={activeTab === 'corporate' || activeTab === 'parent' ? 'grid lg:grid-cols-2 gap-4' : 'grid lg:grid-cols-2'}>
                        {activeTab === 'corporate' || activeTab === 'parent' ? (
                            // Render two videos for corporate/parent tab
                            (list[activeIdx] as any).videos?.map((vidId: string, idx: number) => (
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
                            ))
                        ) : (
                            // Render standard video + text card for other tabs
                            <>
                                {/* Video */}
                                <div className="aspect-video lg:aspect-auto bg-navy-dark relative">
                                    <iframe
                                        className="w-full h-full min-h-[280px]"
                                        src={`https://www.youtube.com/embed/${(list[activeIdx] as any).videoId}?rel=0`}
                                        title={`${(list[activeIdx] as any).name} testimonial`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>

                                {/* Text */}
                                <div className="p-8 lg:p-10 flex flex-col justify-between">
                                    <div>
                                        <Quote className="w-8 h-8 text-[#004E7E]/30 mb-4" />
                                        <p className="text-foreground/80 text-lg leading-relaxed font-body italic mb-6">
                                            "{(list[activeIdx] as any).text}"
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-display font-bold text-foreground text-xl">{(list[activeIdx] as any).name}</p>
                                        {(list[activeIdx] as any).role && (
                                            <p className="text-muted-foreground text-sm font-body">{(list[activeIdx] as any).role}</p>
                                        )}
                                        {(list[activeIdx] as any).company && (
                                            <span className="inline-block mt-2 px-3 py-1 bg-[#004E7E]/10 text-[#004E7E] text-xs rounded-full font-semibold">
                                                {(list[activeIdx] as any).company}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
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
