import { motion } from "framer-motion";


const Collaborations = () => (
  <section id="partners" className="pt-12 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center "
      >
        <h2 className="font-display lg:text-[40px] text-[32px] leading-tight font-black text-[#002244] uppercase tracking-wide mt-3">
          Strong Industry  <span className="text-[#004E7E]">Collaborations</span>
        </h2>
      </motion.div>
      <div className="flex flex-wrap mt-6">
        <div className="lg:w-[20%] w-[33%] px-2 lg:h-[100px] h-[80px] mb-4">
            <img src="./collab/1.png" className="p-2 border w-full object-contain rounded-md h-full" alt="" />
        </div>
        <div className="lg:w-[20%] w-[33%] px-2 lg:h-[100px] h-[80px] mb-4">
            <img src="./collab/2.png" className="p-2 border w-full object-contain rounded-md h-full" alt="" />
        </div>
        <div className="lg:w-[20%] w-[33%] px-2 lg:h-[100px] h-[80px] mb-4">
            <img src="./collab/3.png" className="p-2 border w-full object-contain rounded-md h-full" alt="" />
        </div>
        <div className="lg:w-[20%] w-[33%] px-2 lg:h-[100px] h-[80px] mb-4">
            <img src="./collab/4.png" className="p-2 border w-full object-contain rounded-md h-full" alt="" />
        </div>
        <div className="lg:w-[20%] w-[33%] px-2 lg:h-[100px] h-[80px] mb-4">
            <img src="./collab/5.png" className="p-2 border w-full object-contain rounded-md h-full" alt="" />
        </div>
        <div className="lg:w-[20%] w-[33%] px-2 lg:h-[100px] h-[80px] mb-4">
            <img src="./collab/6.png" className="p-2 border w-full object-contain rounded-md h-full" alt="" />
        </div>
        <div className="lg:w-[20%] w-[33%] px-2 lg:h-[100px] h-[80px] mb-4">
            <img src="./collab/7.png" className="p-2 border w-full object-contain rounded-md h-full" alt="" />
        </div>
        <div className="lg:w-[20%] w-[33%] px-2 lg:h-[100px] h-[80px] mb-4">
            <img src="./collab/8.png" className="p-2 border w-full object-contain rounded-md h-full" alt="" />
        </div>
        <div className="lg:w-[20%] w-[33%] px-2 lg:h-[100px] h-[80px] mb-4">
            <img src="./collab/9.png" className="p-2 border w-full object-contain rounded-md h-full" alt="" />
        </div>
        <div className="lg:w-[20%] w-[100%] px-2 lg:h-[100px] h-[80px] mb-4">
            <img src="./collab/10.png" className="p-2 border w-full object-contain rounded-md h-full" alt="" />
        </div>
      </div>
    </div>
  </section>
);

export default Collaborations;
