import React from 'react'


import WorkingGallery from './workingGallery';
import workingBgImage from "../../../assests/workingBgImage.png";


export default function WorkingSpace() {
    return (
        <div className='relative '>

            <div class="container  max-w-[1120px] mx-auto px-5 xl:px-0 mt-20 xl:mt-[200px]  ">
                <div className='text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7 pb-[20px]'>
                    Working space
                </div>

                <div className='text-[#111029] font-[Poppins] font-semibold  text-[25px] xl:text-[42px] leading-[56px] tracking-[-0.1px] '>

                    Let’s meet our interior room decoration
                </div>
                <WorkingGallery />
            </div>

            <img src={workingBgImage} alt="" className='absolute top-[17%] -z-20'  />
            <img src={workingBgImage} alt="" className='absolute top-[60%] -z-20'  />
        </div>
    );
};
