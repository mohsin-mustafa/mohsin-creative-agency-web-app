import React from 'react'
import tick from "../../../assests/tick.svg";
export default function CustomerSatisfaction() {
    return (

        <div className='bg-[#F9F9FD]'>
            <div className="  container max-w-[1120px] mx-auto px-5 xl:px-0  py-[99px] flex flex-col   lg:flex-row gap-10 xl:gap-20 ">
                {/* left */}
                {/* <div className=" flex flex-col space-y-12 md:w-1/2"> */}

                {/* <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 border      '> */}
                {/* <div className='flex flex-wrap    gap-10     '> */}

                <div className='flex gap-x-10 sm:flex-nowrap flex-wrap  max-w-[580px] justify-center mx-auto'>
                    <div className='sm:mt-10 mt-0 '>

                        <div className='cursor-pointer mt-[56px] mb-[40px] py-3 sm:py-0 mx-auto md:mx-0 w-[270px] h-auto sm:h-[300px] bg-[#FFFFFF] rounded-[20px]   shadow-[#4C40F7] hover:shadow-custom-box-shadow-customer '>
                            <p className='sm:pt-[72px]  text-[#4C40F7] font-[Poppins] font-semibold  text-[56px] leading-[72px] tracking-[-0.4px] '>70K+</p>
                            <p className='mt-5  mx-auto md:mx-[28px] max-w-[214px]  text-[#111029] font-[Poppins] font-normal text-xs sm:text-[18px]  leading-8  '>We have more than customers</p>
                        </div>


                        <div className=' cursor-pointer py-3 sm:py-0 mx-auto md:mx-0 w-[270px] h-auto sm:h-[300px] bg-[#FFFFFF]  rounded-[20px]  shadow-[#4C40F7] hover:shadow-custom-box-shadow-customer '>
                            <p className='sm:pt-[56px]  text-[#FF2D59] font-[Poppins] font-semibold  text-[56px] leading-[72px] tracking-[-0.4px]'>10M+</p>
                            <p className='mt-5  mx-auto  max-w-[214px]  text-[#111029] font-[Poppins] font-normal text-xs sm:text-[18px] leading-8  '>People who are helped because of our hard work</p>

                        </div>
                      

                    </div>
                    <div className='sm:mt-10 mt-0 ' >
                    <div className='mt-10 md:mt-0 cursor-pointer mb-[40px] py-3 sm:py-0 mx-auto md:mx-0 w-[270px] h-auto sm:h-[300px]  bg-[#FFFFFF]  hover:text-teal-100 rounded-[20px]  shadow-[#4C40F7] hover:shadow-custom-box-shadow-customer   '>
                            <p className='sm:pt-[72px] text-[#FF6800] font-[Poppins] font-semibold  text-[56px] leading-[72px] tracking-[-0.4px]' >100+</p>
                            <p className='mt-5  mx-auto  max-w-[214px]   text-[#111029] font-[Poppins] font-normal  text-xs sm:text-[18px] leading-8  '> Projects we have completed</p>

                        </div>

                        <div className='cursor-pointer py-3 sm:py-0 mx-auto md:mx-0 w-[270px] h-auto sm:h-[300px] bg-[#FFFFFF]  rounded-[20px] shadow-[#4C40F7] hover:shadow-custom-box-shadow-customer '>
                            <p className='sm:pt-[72px]  text-[#4ADB61] font-[Poppins] font-semibold  text-[56px] leading-[72px] tracking-[-0.4px] '>200+</p>
                            <p className='mt-5 mx-auto  max-w-[214px]   text-[#111029] font-[Poppins] font-normal   text-xs sm:text-[18px] leading-8 ' >Support from world-renowned companies</p>

                        </div>
                    </div>
                </div>




                {/* </div> */}



                {/* right */}
                <div className="flex flex-col max-w-[460px]  text-left md:text-left mt-5 lg:mt-20 xl:mt-5 pl-0 md:pl-0">

                    <p className='text-[#111029] font-[Poppins] font-semibold text-[20px] md:text-[28px] lg:text-2xl xl:text-[56px] xl:leading-[72px] max-w-[460px]   tracking-[-0.4px] '>Customer satisfaction is our first priority</p>
                    <p className='text-[#6B6B6B] font-[Poppins] font-normal text-sm xl:text-[18px] leading-[32px]  max-w-[460px] mt-[35px] '>We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. Their satisfaction is our pleasure. We strive to provide the best service by:</p>

                    {/* <div className='flex flex-col space-y-4  text-[#6B6B6B] font-[Poppins] font-normal text-[18px] leading-[32px]'> */}
                    <div className='flex mt-[35px] space-x-3'>
                        <img src={tick} alt="" className='w-[27.6px] h-[27.6px]  mt-1   ' />
                        <p className='text-[#6B6B6B] font-[Poppins] font-normal text-sm xl:text-[18px] leading-[32px]'>Provide idea support from our creative team</p>
                    </div>

                    <div className='flex space-x-3 space-y-3'>
                        <img src={tick} alt="" className=' w-[27.6px] h-[27.6px] mt-7  ' />
                        <p className='text-[#6B6B6B] font-[Poppins] font-normal text-sm xl:text-[18px] leading-[32px]'>Provide attractive and professional design services</p>

                    </div>

                    <div className='flex space-x-3 space-y-3'>
                        <img src={tick} alt="" className=' w-[27.6px] h-[27.6px] mt-4 ' />
                        <p className='text-[#6B6B6B] font-[Poppins] font-normal text-sm xl:text-[18px] leading-[32px]'>Support for service 24 hours a week</p>

                    </div>


                    <div className='flex space-x-3 space-y-3'>
                        <img src={tick} alt="" className='w-[27.6px] h-[27.6px] mt-4  ' />
                        <p className='text-[#6B6B6B] font-[Poppins] font-normal text-sm xl:text-[18px] leading-[32px]'> Helping our customers to grow their business</p>

                    </div>
                    <div className='flex space-x-3 space-y-3 '>

                        <img src={tick} alt="" className='w-[27.6px] h-[27.6px] mt-7 ' />
                        <p className=' text-[#6B6B6B] font-[Poppins] font-normal text-sm xl:text-[18px] leading-[32px] xl:max-w-[412px]'>Provide support to market products through  online marketplace </p>
                    </div>

                    {/* </div> */}
                </div>
            </div>
        </div>

    );
};
