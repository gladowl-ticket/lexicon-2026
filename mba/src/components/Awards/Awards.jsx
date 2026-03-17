import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import './Awards.css'

const Awards = () => {
const [selectedIndex, setSelectedIndex] = useState(0)
const [scrollSnaps, setScrollSnaps] = useState([])

const autoplay = Autoplay({
  delay: 4000,
  stopOnInteraction: false,
  stopOnMouseEnter: true
})

const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: "start",
    slidesToScroll: 1,
    dragFree: false
  },
  [autoplay]
)

const goToPrev = () => emblaApi?.scrollPrev()
const goToNext = () => emblaApi?.scrollNext()

useEffect(() => {
if (!emblaApi) return

setScrollSnaps(emblaApi.scrollSnapList())
emblaApi.on('select', () => {
setSelectedIndex(emblaApi.selectedIndex())
})

emblaApi.plugins()?.autoplay?.play?.()
}, [emblaApi])

const awardsData = [
    {
        title: "Top 100 Institutes in India for Digital Distinction",
        desc: "Technology Conformance to NEP – ASSOCHAM 2022",
        img: "1"
    },
    {
        title: "Best B-School in Leadership Excellence",
        desc: "BW Education Future of Management Awards 2023",
        img: "2"
    },
    {
        title: "Best Private Management Institute in India for Placements",
        desc: "CEGR 2022",
        img: "3"
    },
    {
        title: "Best Management for Institute for Placements",
        desc: "Integrated Chambers of Commerce and Industry , 2020",
        img: "4"
    },
    {
        title: "Dewang Mehta National Education Award",
        desc: "Best Emerging B-School",
        img: "5"
    },
    {
        title: "BBC Knowledge Education Leadership Award",
        desc: "Best Academic & Industry Interface",
        img: "5"
    },
    {
        title: "AsiaOne World’s Greatest Brand Award",
        desc: "Singapore",
        img: "5"
    },
    {
        title: "Lead Lab Centre of Excellence Award",
        desc: "For nurturing youth leadership",
        img: "5"
    },
];

return (
<section>
    <div className="max-w-8xl px-4 lg:px-20 pb-12">
        <div className="flex justify-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-950">Rankings & Awards</h2>
        </div>
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                   { awardsData.map((award, index)=>(
                     <div key={index} className="embla__slide w-[20%]">
                        <div className="award-card">
                            <img src={`/awards/${award.img}.png`} className="award-img h-[60px]" />
                            <h4 className="award-title mb-0">{award.title}</h4>
                            <p className="award-desc">{award.desc}</p>
                        </div>
                    </div>
                   )                    
                   )}
                </div>
            </div>

            <div className="embla__controls flex justify-center mt-8 gap-2">
                <button className="embla__prev p-2 bg-blue-950 text-white border-0 rounded-full cursor-pointer "
                    onClick={goToPrev} aria-label="Previous slide">
                    <BsArrowLeft />
                </button>
                <button className="embla__next p-2 bg-blue-950 text-white border-0 rounded-full cursor-pointer "
                    onClick={goToNext} aria-label="Next slide">
                    <BsArrowRight />
                </button>
            </div>

        </div>
    </div>
</section>
)
}

export default Awards