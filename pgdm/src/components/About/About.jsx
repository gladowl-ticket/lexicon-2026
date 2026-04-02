import React from "react";

const About = () => {
return (
<section>
  <div className=" pb-12 max-w-8xl px-4 lg:px-20 " id="about">
    <div className="flex flex-wrap-reverse items-center ">
      <div className="w-full lg:w-1/2 lg:pe-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-950 lg:mt-0 mt-4 hidden lg:block">
          About Lexicon Mile
        </h2>
        <p className="text-justify">
          Founded in 2009 as part of the Lexicon Group of Institutes (est. 2006), Lexicon MILE represents the Group's
          commitment to building leaders who thrive in a borderless world. With a presence across preschools, K–12
          schools, hospitality, media, fitness, and specialized training academies, the Lexicon ecosystem provides a
          holistic platform for talent development.
        </p>
        <br />
        <p className="text-justify">
          At Lexicon MILE, our philosophy — One Student at a Time — has evolved into our global positioning of <span className="font-bold">“A Mentor
          Every MILE.”</span> We invest deeply in each learner’s personal journey, combining academic rigor, mentorship from
          industry leaders, and global exposure to shape <span className="font-bold">Day Zero Professionals,</span> ready to step into the workforce and
          lead from day one.
        </p>
      </div>
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-950 lg:mt-0 mt-4 lg:hidden">
          About Lexicon Mile
        </h2>
        <img src="./about/1.jpg" className="w-full object-cover h-full rounded-lg border " alt="" />
      </div>
    </div>
  </div>
</section>
);
};

export default About;