import React from 'react'

import Dropdown from "./dropdown/Dropdown";
import { faqsData } from "../../../constent/Constent";
import accordionBgImg from "../../../assests/accordionBgImg-2.png";


const FrequentlyAsked = () => {





    return (

        <div className=' sm:py-[12.5rem] py-24  relative '>
            <div className=' container max-w-[1120px]   mx-auto px-5 xl:px-0 md:mx-auto '> 
                <div className='mb-[3.8rem] '>
                    <p className='text-center text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7 pb-[20px]'>Frequently Ask Question</p>
                    <h1 className='text-center text-[#111029] font-[Poppins] font-semibold  text-[20px] leading-7 md:text-[25px] xl:text-[42px] xl:leading-[56px] tracking-[-0.1px]'>Some of our frequently asked questions</h1>
                </div>
                {
                    faqsData.map((item) => {
                        return <Dropdown faqsData={item} />
                    })
                }
            </div>
            <div>
                <img className=' absolute -z-50 h-[900px] top-[15%]' src={accordionBgImg} alt='accordion image bottom' />
            </div>
        </div>
    )
}

export default FrequentlyAsked;