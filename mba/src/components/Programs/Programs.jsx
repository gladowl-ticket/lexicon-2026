import React from 'react';

const Programs = () =>{
return(
<section>
    <div className="max-w-8xl pb-12 px-4 lg:px-20" id="program">
        <div className="flex flex-wrap-reverse relative">
            <div className="w-full lg:w-6/12">
                <img src="./programs/bg.png" className="w-full object-contain rounded-lg" alt="" />
            </div>
            <div
                className="w-full lg:w-7/12 relative lg:absolute lg:py-4 top-0 right-0 flex flex-col justify-center 2xl:justify-between h-full">
                <div className='bg-red-800 rounded-lg p-4 lg:p-8 text-white shadow-lg mb-6 lg:mb-0'>
                    <h2 className='text-4xl lg:text-5xl font-bold mb-4'>Program Offered</h2>
                    <h3 className='text-2xl font-bold mb-2'>Global Master in Business Administration</h3>
                    <p className='text-justify text-sm mb-8'>The University of South Wales, in association with the
                        Lexicon
                        Management Institute of Leadership and Excellence, offer MBA Global Program that provides you
                        with an opportunity to gain three to four months internship experience with companies in the UK
                        and overseas. The Master's program is curated in academic partnership with the University of
                        South Wales (USW), UK, accredited and recognized by the Privy Council. Educational programs at
                        USW are UK-certified educational programs by Quality Assurance Agency.</p>
                    <h4 className="text-xl font-bold">Eligibility:</h4>
                    <p className='text-justify text-sm'>
                        Applicants must hold a bachelor’s degree from a recognized Indian university with a minimum of
                        50% marks or an equivalent CGPA. Students currently in their final year of graduation, set to
                        complete their degree by June 30, 2026, are also eligible to apply. For such candidates,
                        admission will be provisional, and it is mandatory to submit proof of graduation completion by
                        October 1, 2026, to ensure continuity in the program. Failure to provide this documentation may
                        result in withdrawal from the program.
                    </p>
                    <p className='text-justify text-sm mb-2 font-bold'>
                        Applicants must have any of the valid aptitude test score of CAT 2025/ XAT 2026/ CMAT/ MAT/ GMAT.
                    </p>
                </div>
                <div className="border rounded-lg bg-white p-4 lg:p-8 hidden 2xl:block">
                    <h4 className="text-xl font-bold text-center mb-4">Industry Integrated Degrees with Top Global
                        Corporations.</h4>
                    <div className="flex flex-wrap w-full">
                        <div className="w-1/3 lg:w-2/12 h-[80px]">
                            <img src="./placement/01.png" className="h-full object-contain" alt="" />

                        </div>
                        <div className="w-1/3 lg:w-2/12 h-[80px]">
                            <img src="./placement/02.png" className="h-full object-contain" alt="" />

                        </div>
                        <div className="w-1/3 lg:w-2/12 h-[80px]">
                            <img src="./placement/03.png" className="h-full object-contain" alt="" />

                        </div>
                        <div className="w-1/3 lg:w-2/12 h-[80px]">
                            <img src="./placement/04.png" className="h-full object-contain" alt="" />

                        </div>
                        <div className="w-1/3 lg:w-2/12 h-[80px]">
                            <img src="./placement/05.png" className="h-full object-contain" alt="" />

                        </div>
                        <div className="w-1/3 lg:w-2/12 h-[80px]">
                            <img src="./placement/06.png" className="h-full object-contain" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
            <div className="border rounded-lg bg-white p-4 lg:p-8 block 2xl:hidden mt-8">
                    <h4 className="text-xl font-bold text-center mb-4">Industry Integrated Degrees with Top Global
                        Corporations.</h4>
                    <div className="flex flex-wrap w-full">
                        <div className="w-1/3 lg:w-2/12 h-[80px]">
                            <img src="./placement/01.png" className="h-full object-contain" alt="" />

                        </div>
                        <div className="w-1/3 lg:w-2/12 h-[80px]">
                            <img src="./placement/02.png" className="h-full object-contain" alt="" />

                        </div>
                        <div className="w-1/3 lg:w-2/12 h-[80px]">
                            <img src="./placement/03.png" className="h-full object-contain" alt="" />

                        </div>
                        <div className="w-1/3 lg:w-2/12 h-[80px]">
                            <img src="./placement/04.png" className="h-full object-contain" alt="" />

                        </div>
                        <div className="w-1/3 lg:w-2/12 h-[80px]">
                            <img src="./placement/05.png" className="h-full object-contain" alt="" />

                        </div>
                        <div className="w-1/3 lg:w-2/12 h-[80px]">
                            <img src="./placement/06.png" className="h-full object-contain" alt="" />

                        </div>
                    </div>
            </div>
    </div>
</section>
);
}

export default Programs;