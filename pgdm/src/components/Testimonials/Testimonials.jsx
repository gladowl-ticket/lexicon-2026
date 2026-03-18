import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { TestiModal } from "./TestiModal";
import "./Testimonials.css";

const testimonialsData = [
  "ZjOLI8VYPTc?si=CWnA_0CPbNhG9hia",
  "cUmNlS0ZTaI?si=U64orB8QBBYiq_hx",
  "9TXlelwX1gU?si=r5_oFQcTAnE0btrs",
  "3F5pIu3ZaRE?si=vWnAQfJIEMyH4EKL",
  "lKtB43dlusE?si=Lddf6YFyIYhIXORD",
  "9FAjG9AcrCs?si=nsywCf_n8KAUAWkz",
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      dragFree: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const openModal = (video) => {
    const id = video.split("?")[0]; // remove extra params
    setActiveVideo(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveVideo("");
  };

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins()?.autoplay?.play?.();
  }, [emblaApi]);

  return (
    <section id="testimonials">
      <div className="container py-12">
        <div className="flex justify-center pb-8">
          <h2 className="text-4xl lg:text-5xl text-blue-950 font-bold text-center">
            Student Testimonials
          </h2>
        </div>
        <div className="w-full">
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {testimonialsData.map((url, index) => {
                  const videoId = url.split("?")[0];

                  return (
                    <div key={index} className="embla__slide">
                      <div
                        className="w-full h-[220px] md:h-[300px] rounded-lg overflow-hidden"
                        onClick={() => openModal(url)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                          alt="thumbnail"
                          className="video-thumb"
                        />

                        <div className="play-btn">▶</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="embla__controls flex justify-center mt-8 gap-2">
              <button
                className="embla__prev p-2 bg-blue-950 text-white border-0 rounded-full cursor-pointer"
                onClick={goToPrev}
                aria-label="Previous slide"
              >
                <BsArrowLeft />
              </button>
              <button
                className="embla__next p-2 bg-blue-950 text-white border-0 rounded-full cursor-pointer"
                onClick={goToNext}
                aria-label="Next slide"
              >
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <TestiModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoId={activeVideo}
      />
    </section>
  );
};

export default Testimonials;
