import React from "react";

const Programs = () => {
  return (
    <section>
      <div
        className="max-w-8xl pb-12 px-4 lg:px-20 bg-yellow-100 py-6"
        id="program"
      >
        <div className="flex flex-wrap-reverse relative">
          <div className="w-full lg:w-6/12">
            <img
              src="./programs/bg.png"
              className="w-full object-contain rounded-lg"
              alt=""
            />
          </div>
          <div className="w-full lg:w-7/12 relative lg:absolute lg:py-4 top-0 right-0 flex flex-col justify-center 2xl:justify-between h-full">
            <div className="bg-red-800 rounded-lg p-4 lg:p-8 text-white shadow-lg mb-6 lg:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Program Offered
              </h2>
              <h3 className="text-2xl font-bold mb-2">
                POST GRADUATE DIPLOMА IN MANAGEMENT
              </h3>
              <p className="text-justify text-sm mb-4">
                The 2-year, full-time AICTE-approved PGDM program at Lexicon
                MILE develops well-rounded business leaders with practical
                skills and strategic insights. Blending core principles with
                experiential immersions, the program equips students with
                critical thinking, leadership acumen, and a global perspective.
              </p>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2 text-white-800">
                  Specialisations:
                </h4>

                <ul className="space-y-3">
                  <li className="special-li">
                    <span className="bullet"></span>
                    PGDM – Marketing and Finance
                  </li>

                  <li className="special-li">
                    <span className="bullet"></span>
                    PGDM – Research & Business Analytics
                  </li>

                  <li className="special-li">
                    <span className="bullet"></span>
                    PGDM – Finance, Marketing & HRM*
                  </li>
                </ul>
                <div className="">
                  <p class="pt-3 text-white-600 text-sm">
                    Electives: HR, Finance, Marketing and Research & Business
                    Analytics
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-bold">Eligibility:</h4>
              <ul>
                <li>
                  Passed any Bachelors Degree of minimum 3 years duration.
                </li>
                <li>
                  Obtained at least 50% marks (45% marks in case of candidates
                  belonging to reserved category) in the qualifying examination.
                </li>
                <li>
                  Acceptable entrance exams: CAT, MAT, СМАТ, МН-СЕТ, ХАТ, ATMA,
                  GMAT, CUET.
                </li>
              </ul>
            </div>

            <div className="border rounded-lg bg-white p-4 lg:p-8 hidden 2xl:block">
              <h4 className="text-xl font-bold text-center mb-4">
                Industry Integrated Degrees with Top Global Corporations.
              </h4>
              <div className="flex flex-wrap w-full">
                <div className="w-1/3 lg:w-2/12 h-[80px]">
                  <img
                    src="./placement/01.png"
                    className="h-full object-contain"
                    alt=""
                  />
                </div>
                <div className="w-1/3 lg:w-2/12 h-[80px]">
                  <img
                    src="./placement/02.png"
                    className="h-full object-contain"
                    alt=""
                  />
                </div>
                <div className="w-1/3 lg:w-2/12 h-[80px]">
                  <img
                    src="./placement/03.png"
                    className="h-full object-contain"
                    alt=""
                  />
                </div>
                <div className="w-1/3 lg:w-2/12 h-[80px]">
                  <img
                    src="./placement/04.png"
                    className="h-full object-contain"
                    alt=""
                  />
                </div>
                <div className="w-1/3 lg:w-2/12 h-[80px]">
                  <img
                    src="./placement/05.png"
                    className="h-full object-contain"
                    alt=""
                  />
                </div>
                <div className="w-1/3 lg:w-2/12 h-[80px]">
                  <img
                    src="./placement/06.png"
                    className="h-full object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg bg-white p-4 lg:p-8 block 2xl:hidden mt-8">
          <h4 className="text-xl font-bold text-center mb-4">
            Industry Integrated Degrees with Top Global Corporations.
          </h4>
          <div className="flex flex-wrap w-full">
            <div className="w-1/3 lg:w-2/12 h-[80px]">
              <img
                src="./placement/01.png"
                className="h-full object-contain"
                alt=""
              />
            </div>
            <div className="w-1/3 lg:w-2/12 h-[80px]">
              <img
                src="./placement/02.png"
                className="h-full object-contain"
                alt=""
              />
            </div>
            <div className="w-1/3 lg:w-2/12 h-[80px]">
              <img
                src="./placement/03.png"
                className="h-full object-contain"
                alt=""
              />
            </div>
            <div className="w-1/3 lg:w-2/12 h-[80px]">
              <img
                src="./placement/04.png"
                className="h-full object-contain"
                alt=""
              />
            </div>
            <div className="w-1/3 lg:w-2/12 h-[80px]">
              <img
                src="./placement/05.png"
                className="h-full object-contain"
                alt=""
              />
            </div>
            <div className="w-1/3 lg:w-2/12 h-[80px]">
              <img
                src="./placement/06.png"
                className="h-full object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
