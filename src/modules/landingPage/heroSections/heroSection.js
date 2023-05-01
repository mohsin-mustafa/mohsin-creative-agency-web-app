import React from 'react'
import GetStartedButton from './getStartedButton';
import heroImage from "../../../assests/heroImage.png";

export default function HeroSection() {
  return (

    




    <div className='relative '

    // style={{ backgroundImage: `url(${heroImage})` }}

    >
      <div class="container max-w-[1160px] mx-auto px-5    flex flex-col-reverse  items-start  md:flex-row ">

        {/* Left   */}
        <div className=' flex flex-col items-start   '>

          <div className='pt-[113px] flex flex-col '>
            <p className='  text-[#111029] font-[Poppins] font-semibold text-[56px] leading-[72px] tracking-[-0.4px] text-left ' >
              Make your business


            </p>
            <p className='text-[#FF6800] font-[Poppins] font-semibold text-[56px] leading-[72px] tracking-[-0.4px] text-left'>
              more powerful
            </p>
            <p className='text-[#111029] font-[Poppins] font-semibold text-[56px] leading-[72px] tracking-[-0.4px] text-left'>
              with us
            </p>


            <p className='text-[#6B6B6B] font-[Poppins] font-normal text-[18px] leading-[32px] tracking-[-0.4px] text-left md:max-w-[365px]'>
              We provide various services to make <br/> your business grow and get bigger.Your satisfaction is our first priority.
            </p>
          </div>

          <div className='flex  justify-start md:justify-start mt-6 '>
            <GetStartedButton />

          </div>


        </div>

        {/* Right */}
        {/* <div className=' flex justify-end  '>
        <img src={heroImage} alt="" className='w-[100%]  ' />



      </div> */}






      </div>

      <img src={heroImage} alt="" className='absolute top-[0%] mt-2 md:-mt-16 -z-50' />
    </div>





  );
};
