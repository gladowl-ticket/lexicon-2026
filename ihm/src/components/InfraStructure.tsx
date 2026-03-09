import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const img = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

const InfraStructure = () => (
  <section id="infrastructure" className="py-12 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <span className="text-[#004E7E] text-sm font-semibold tracking-widest uppercase font-body">Modern Spaces that Inspire Learning</span>
        <h2 className="font-display text-[32px] md:text-[40px] leading-tight font-black text-[#002244] uppercase tracking-wide mt-3">
          Our <span className="text-[#004E7E]">Infrastructure</span>
        </h2>
      </motion.div>

      {/* carousel with drag and navigation */}
      <Carousel opts={{ align: "start", containScroll: "trimSnaps", dragFree: true, loop: true }} className="relative">
        <CarouselContent>
          {img.map((id) => (
            <CarouselItem key={id} className="lg:basis-1/3">
              <div className="w-full h-[220px] md:h-[300px] rounded-lg overflow-hidden">
                <img src={`./infrastructure/${id}.png`} alt="Infrastructure" className="h-full w-full object-cover" />
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

export default InfraStructure;
