import React from 'react'

import emailIcon from "../../assests/emailIcon.svg";
import footerBgImg from "../../assests/footerBgImage.png";

export default function NewProject() {
    return (
        <div className='relative '>
            <div className=' container max-w-[1120px] mx-auto px-5 xl:px-0  mt-[200px]'>
                <div class="max-w-full lg:max-w-[950px] mx-auto xl:max-w-[1120px]   h-[340px]  bg-[#FFCC00]  mb-[200px]   rounded-[20px] ">
                    <div className='text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 pt-16'>
                        Are You Ready For
                    </div>

                    <div className='text-[#FFFFFF] font-[Poppins]  font-semibold text-[25px] md:text-3xl md:text-[42px] leading-[56px] tracking-[-0.1px]  pt-4'>
                        Start a New Project
                    </div>

                    {/* CTA Button Start Now*/}
                    <div className=" ">
                        <button type="button" className="px-[43px] py-[20px] font-[Poppins]  text-[#FFFFFF] bg-[#4C40F7] mt-8 mb-[84px] hover:bg-[#4C40F7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-xl text-base  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        style={{filter: 'drop-shadow(0px 20px 70px rgba(255, 59, 47, 0.6))'}}
                        >
                            Start Now
                            <svg aria-hidden="true" class="w-5 h-5 ml-4 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                </div>

                <div className='z-50 relative -mb-[200px] bg-[#4C40F7] rounded-[20px]   max-w-full lg:max-w-[950px] mx-auto xl:max-w-[1120px] h-[340px]  border border-[#73AD21]'>
                    <div className='text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 pt-16'>
                        Get Notified About Project
                    </div>

                    <div className='text-[#FFFFFF] font-[Poppins] font-semibold  text-3xl md:text-[42px] leading-[56px] tracking-[-0.1px]  pt-4'>
                        Subscribe Now
                    </div>

                    <div className='flex justify-center items-center mt-8'>
                        <div className='max-w-[500px] md:w-full relative'>

                            <input type="text" placeholder='Email ' name="" id="" className='text-[#ABAFC7] font-normal font-[Poppins] px-7 h-[4.8rem] w-full rounded-xl border-2 border-solid ' />
                            <img src={emailIcon} alt="" className='absolute top-[35%] left-[90%]' />


                        </div>
                    </div>
                </div>
            </div>



            <img src={footerBgImg} alt="" className='absolute  top-[-7%] -z-20' />
            <img src={footerBgImg} alt="" className='absolute  top-[52%] -z-20' />






















        </div>


    )
}
