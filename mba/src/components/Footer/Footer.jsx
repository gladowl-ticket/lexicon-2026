import React from 'react';

const Footer = () =>{
return(
<section className="py-6 bg-[#060B14]">
    <div className="container flex justify-center">

        <div className=" pb-4 border-b border-gray-400 w-full md:w-1/2">
            <div className="flex justify-center ">
                <img className='h-20' src="./logo/white_logo.png" alt="" />
            </div>
        </div>

    </div>
    <div className="container">
        <div className="flex justify-center items-center text-white text-sm my-4">
            <div className="flex flex-wrap items-center justify-center text-center gap-1 text-sm">
  <span>© 2026 Lexicon. All rights reserved. | Designed and Developed by </span>

  <img
    src="./logo/gladowl_logo.webp"
    className="h-4 sm:h-6 "
    loading="lazy"
    alt="Gladowl Logo"
  />
</div>

        </div>
    </div>
</section>
);
}

export default Footer;