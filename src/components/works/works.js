import React from 'react'
import NewProject from '../newProject/newProject';
import MohsinFooter from '../mohsinFooter/mohsinFooter';
import Testimonial from '../../modules/landingPage/testimonialSection/testimonial';

const Works = () => {
  return (
    <div className='mt-[100px]'>




      <div className='mb-[3.8rem] '>
        <p className='text-center text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7 pb-[20px]'>This is Works Page</p>
        <h1 className='text-center text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7 md:text-[25px] xl:text-[42px] xl:leading-[56px] tracking-[-0.1px]'>Figma don't permission to design this page "Works"
        </h1>
        <h1 className='text-center mt-[50px] text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7 md:text-[25px] xl:text-[42px] xl:leading-[56px] tracking-[-0.1px]'>Figma is required to design for this page "Works"
        </h1>
      </div>


      <Testimonial />
      <NewProject />
      <MohsinFooter />
    </div>
  )
}

export default Works;