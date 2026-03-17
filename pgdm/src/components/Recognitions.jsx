import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import rankingimg from "../assets/rankings/rank.png";
import "./Recognitions.css"

const rankings = [
  {
    title: "Top 100 Institutes in India for Digital Distinction",
    org: "Technology Conformance to NEP – ASSOCHAM 2022",
    logo: { src: rankingimg, alt: "Ranking Logo", style: { width: "50px", height: "50px", borderRadius: "8px" } },
  },
  {
    title: "Best B-School in Leadership Excellence",
    org: "BW Education Future of Management Awards 2023",
    logo: { src: rankingimg, alt: "Ranking Logo",style: { width: "50px", height: "50px", borderRadius: "8px" } }  ,
  },
  {
    title: "Best Private Management Institute in India for Placements",
    org: "CEGR 2022",
    logo: { src: rankingimg, alt: "Ranking Logo",style: { width: "50px", height: "50px", borderRadius: "8px" }},
  },
   {
    title: "Best Management for Institute for Placements",
    org: "Integrated Chambers of Commerce and Industry , 2020",
    logo: { src: rankingimg, alt: "Ranking Logo",style: { width: "50px", height: "50px", borderRadius: "8px" } },
  },
];

const awards = [
  {
    title: "Dewang Mehta National Education Award",
    org: "Best Emerging B-School",
    logo: { src: rankingimg, alt: "Ranking Logo" },
  },
  {
    title: "BBC Knowledge Education Leadership Award",
    org: "Best Academic & Industry Interface",
    logo: { src: rankingimg, alt: "Ranking Logo" },
  },
  {
    title: "AsiaOne World’s Greatest Brand Award",
    org: "Singapore",
    logo: { src: rankingimg, alt: "Ranking Logo" },
  },
  {
    title: "Lead Lab Centre of Excellence Award",
    org: "For nurturing youth leadership",
    logo: { src: rankingimg, alt: "Ranking Logo" },
  },
];

export default function RankingsAwards() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="recognition-section container my-[5rem]">
        <div className = "flex flex-row gap-12">
            <div className = "w-1/2">
                <h2 className = "py-6 rankings-title" data-aos="fade-up">
                    Rankings
                </h2>
                <div className = "flex flex-col gap-4" >
                    {
                        rankings.map((ranking, index) => (
                            <div key={index} className="flex gap-4 items-center my-3" data-aos="fade-up">
                                <img src={ranking.logo.src} alt={ranking.logo.alt} className="me-3" />
                                <div>
                                    <h5 className = "ranking-heading">{ranking.title}</h5>
                                    <p>{ranking.org}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
          
            <div className = "w-1/2 flex flex-col gap-4">
                 <h2 className = "py-6 rankings-title" data-aos="fade-up">
                    Awards
                </h2>
                  <div >
                    {
                        awards.map((awards, index) => (
                            <div key={index} className="flex gap-4 items-center my-3" data-aos="fade-up">
                                <img src={awards.logo.src} alt={awards.logo.alt} className="me-3" />
                                <div>
                                    <h5 className = "ranking-heading">{awards.title}</h5>
                                    <p>{awards.org}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  );
}