import React from 'react'
import OurServicesCard from "./ourServicesCard";
import serviceBgImage from "../../../assests/serviceBgImage.png";


export default function OurServices() {
  return (
    <div className='relative '    >

      <div class="container  max-w-[1120px] mx-auto  mt-10 lg:mt-0 xl:mt-[50px] ">
        <div className='text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7 pb-[20px]'>
          Our Services
        </div>

        <div className='text-[#111029] text-center mx-6 lg:mx-auto xl:max-w-[1120px] lg:max-w-[650px] max-w-full font-[Poppins] font-semibold text-[18px] leading-7 md:text-[20px] lg:text-[25px] lg:leading-[40px] xl:text-[42px] xl:leading-[56px] tracking-[-0.1px]'>

          The various services we provide to make your business more powerful
        </div>
        <OurServicesCard />
      </div>

      <img src={serviceBgImage} alt="" className='absolute top-[50%] -z-20' />


    </div>
  );
};
