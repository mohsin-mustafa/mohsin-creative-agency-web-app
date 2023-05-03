import React from 'react'
import CompanyLogos from './companyLogos';


export default function GreatCustomer() {
  return (

    <div class="container   max-w-[1120px] mx-auto px-5 xl:px-0  mt-[100px] xl:mt-[200px] ">
      <div className='text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7 pb-[20px] '>
        Some of Our Great Customers
      </div>

      <div className='text-[#111029] font-[Poppins] font-semibold  text-[25px] leading-7 xl:text-[42px] lg:text-[23px]  xl:leading-[56px] tracking-[-0.1px] max-w-[1120px]'>
        Some of the companies we have worked with
      </div>

      <CompanyLogos />
    </div>

  );
};
