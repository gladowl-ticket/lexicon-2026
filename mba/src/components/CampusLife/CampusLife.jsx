import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import './CampusLife.css';

const img = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

const CampusLife = () =>{
    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        loop: true,
        align: "start",
        slidesToScroll: 1,
        dragFree: true
      },
      [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    const goToPrev = () => emblaApi?.scrollPrev();
    const goToNext = () => emblaApi?.scrollNext();

    useEffect(() => {
      if (!emblaApi) return;
      emblaApi.plugins()?.autoplay?.play?.();
    }, [emblaApi]);

    return(
        <section>
            <div className="container py-12 bg-gray-100">
                <div className="flex justify-center pb-8">
                    <h2 className="text-4xl lg:text-5xl text-blue-950 font-bold">Life @Lexicon</h2>
                </div>
                <div className="w-full">
                    <div className="embla">
                        <div className="embla__viewport" ref={emblaRef}>
                            <div className="embla__container">
                                {img.map((id) => (
                                    <div key={id} className="embla__slide">
                                        <div className="w-full h-[220px] md:h-[300px] rounded-lg overflow-hidden">
                                            <img src={`./campus-life/${id}.jpg`} alt="Campus Life" className="h-full w-full object-cover" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="embla__controls flex justify-center mt-8 gap-2">
                            <button className="embla__prev p-2 bg-blue-950 text-white border-0 rounded-full cursor-pointer" onClick={goToPrev} aria-label="Previous slide">
                                <BsArrowLeft />
                            </button>
                            <button className="embla__next p-2 bg-blue-950 text-white border-0 rounded-full cursor-pointer" onClick={goToNext} aria-label="Next slide">
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CampusLife;
