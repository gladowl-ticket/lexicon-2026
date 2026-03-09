import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const campuse_life = [
  {
    heading: "Flower Arrangement Workshop at Conrad",
    img: "1",
  },
  {
    heading: "Courtyard by Marriott, Hinjewadi",
    img: "2",
  },
  {
    heading: "Adhik Group",
    img: "3",
  },
  {
    heading: "Amanora The Fern",
    img: "4",
  },
  {
    heading: "Courtyard By Marriott, Chakan",
    img: "5",
  },
  {
    heading: "Dhanukar Farm",
    img: "6",
  },
  {
    heading: "Fairfield By Marriott, Kharadi",
    img: "7",
  },
  {
    heading: "Pune Darshan",
    img: "8",
  },
  {
    heading: "Fratelli Wines",
    img: "9",
  },
  {
    heading: "Conrad",
    img: "10",
  },
  {
    heading: "Courtyard By Marriott",
    img: "11",
  },
  {
    heading: "Fairfield",
    img: "12",
  },
  {
    heading: "Marriott Suites",
    img: "13",
  },
  {
    heading: "The Fern",
    img: "14",
  },
  {
    heading: "W Goa",
    img: "15",
  },
  {
    heading: "Paul John Distillery",
    img: "16",
  },
  {
    heading: "Students Townhall by Institute Director",
    img: "17",
  },
  {
    heading: "The Art of Cake Making by Chef Disha Patel",
    img: "18",
  },
  {
    heading: "Glass of Glory",
    img: "19",
  },
  {
    heading: "Healthy Tiffin Competition for Parents",
    img: "20",
  },
  {
    heading: "Housekeeping Management by Mr. Pravin Kadlag",
    img: "21",
  },
  {
    heading: "How to become a Social Media Influencer",
    img: "22",
  },
  {
    heading: "Pride Group Recce",
    img: "23",
  },
  {
    heading: "International Coffee Day",
    img: "24",
  },
  {
    heading: "Ganpati Theme Lunch",
    img: "25",
  },
  {
    heading: "Ganpati Celebration",
    img: "26",
  },
  {
    heading: "International Housekeeping Week",
    img: "27",
  },
  {
    heading: "Gurpal Singh's Session",
    img: "28",
  },
  {
    heading: "Fresher's Party",
    img: "29",
  },
  {
    heading: "Lexicon IHM holds curriculum vetting events",
    img: "30",
  },
  {
    heading: "Regional Indian Cuisine with Chef Anuj Gushain",
    img: "31",
  },
  {
    heading: "Housekeeping Competition",
    img: "32",
  },
  {
    heading: "Chef Day Competion",
    img: "33",
  },
  {
    heading: "Mathieu Teisseire",
    img: "34",
  },
  {
    heading: "Bartenders Day",
    img: "35",
  },
  {
    heading: "Chocolate Workshop with Chef Danish Khan",
    img: "36",
  },
  {
    heading: "Royal Awadhi Cuisine with Chef Mujeeb ur Rehman",
    img: "37",
  },
  {
    heading: "Flower Arrangement Workshop",
    img: "38",
  },
  {
    heading: "Independence Day",
    img: "39",
  },
  {
    heading: "Teachers Day",
    img: "40",
  },
  {
    heading: "Diversity & Inclusion",
    img: "41",
  },
  {
    heading: "Woman in Leadership",
    img: "42",
  },
  {
    heading: "Life Skills Workshop",
    img: "43",
  },
  {
    heading: "Woman's Day",
    img: "44",
  },
  {
    heading: "Culinary Fusion",
    img: "45",
  },
  {
    heading: "Fruit Mixing",
    img: "46",
  },
  {
    heading: "Principals Conclave",
    img: "47",
  },
];

const CampusLife = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
  <section id="campus-life" className="py-12  bg-background overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <span className="text-[#004E7E] text-sm font-semibold tracking-widest uppercase font-body">A Vibrant Community Beyond Classrooms</span>
        <h2 className="font-display mb-8 text-[40px] leading-tight font-black text-[#002244] uppercase tracking-wide mt-3">
          Campus Life <span className="text-[#004E7E]">@Lexicon</span>
        </h2>
      </motion.div>

      {/* carousel with drag and navigation - center aligned with zoom on center slide */}
      <Carousel
        setApi={setApi}
        opts={{ align: "center", containScroll: "trimSnaps", dragFree: true, loop: true }}
        className="relative"
      >
        <CarouselContent>
          {campuse_life.map((item, idx) => (
            <CarouselItem key={idx} className="lg:basis-1/3">
              <div className="relative w-full h-[220px] md:h-[300px] rounded-lg overflow-hidden">
                <img
                  src={`./campus_life/${item.img}.png`}
                  alt={item.heading}
                  className="h-full w-full object-cover transition-transform duration-500"
                />

                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold">{item.heading}</h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex gap-3 justify-center mt-8">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
      </Carousel>
    </div>
  </section>
  );
};

export default CampusLife;
