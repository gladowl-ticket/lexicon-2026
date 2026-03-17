import React from "react";

const About = () =>{
return(
<section>
    <div className=" pb-12 max-w-8xl px-4 lg:px-20 " id="about">
        <div className="flex flex-wrap-reverse items-center ">
            <div className="w-full lg:w-1/2 lg:pe-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-950 lg:mt-0 mt-4 hidden lg:block">About Lexicon Mile</h2>
                <p className="text-justify">Founded in 2009 a s part of the Lexicon Group of Institutes (est. 2006),
                    Lexicon MILE represents the
                    Group's commitment t o building leaders who thrive in a borderless world. With a presence across
                    preschools, K-12 schools, hospitality, media, fitness, and specialized training academies, the
                    Lexicon ecosystem is a holistic platform for talent development.</p>
                <br />
                <p className="text-justify">At Lexicon MILE, our philosophy-One Student at a Time-has evolved into the
                    global positioning of, "A Mentor Every MILE." We invest deeply in the personal journey of each learner, combining academic
                    rigor, mentorship from industry leaders, and global exposure to shape Day Zero
                    Professionals-graduates who step into the workforce ready to lead from day one.</p>
            </div>
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-950 lg:mt-0 mt-4 lg:hidden">About Lexicon Mile</h2>
                <img src="./about/1.jpg" className="w-full object-cover h-full rounded-lg border " alt="" />
            </div>
        </div>
        <div className="flex flex-wrap items-center pt-8 lg:pt-12">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-950 lg:hidden">About the University of South Wales,
                    UK</h2>
                <img src="./about/2.jpg" className="w-full object-cover h-full rounded-lg border " alt="" />
            </div>
            <div className="w-full lg:w-1/2 lg:ps-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-950 lg:block hidden">About the University of South Wales,
                    UK</h2>
                <p className="text-justify">The University of South Wales, UK, brings over 100 years of academic
                    excellence to the partnership. Accredited by the Privy Council and assured by the Quality Assurance
                    Agency (QAA), USW has earned its place among the UK's most industry-focused universities.</p>
                <br />
                <p className="text-justify">It's global alumni community spans more than 120 countries, and its
                    credentials in professional education, innovation, and applied research make it a natural partner
                    for Lexicon MILE. Together, we deliver a Global MBA that combines Indian dynamism with UK academic
                    heritage.</p>
            </div>

        </div>
    </div>
</section>
);
}

export default About;