import React from 'react'
// import { Card } from 'flowbite-react';
import testimonial1 from "../../../assests/testimonial1.png";
import testimonial2 from "../../../assests/testimonial2.png";
import testimonial3 from "../../../assests/testimonial3.png";
import testimonial4 from "../../../assests/testimonial4.png";
import testimonial5 from "../../../assests/testimonial5.png";
import testimonial6 from "../../../assests/testimonial6.png";
import star from "../../../assests/star.svg";

export default function TestimonialCards() {
    return (
        <div className='px-0 md:px-5 lg:px-5 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 place-items-center mt-[100px] '>
    {/* // <div className='  flex flex-col-1 flex-wrap justify-center items-center md:flex-cols-2 lg:flex-cols-3  gap-8 mt-[60px] pb-[100px]' > */}
            {/* Grid 1 */}
            <div className=" bg-[#FFFFFF] rounded-[20px] mb-[60px] shadow-custom-box-shadow-testimonial w-[300px] md:w-full xl:w-[352px] h-[357px] lg:h-[370px] xl:h-[357px] mx-auto md:mx-0">


                <div className="flex flex-col items-center    ">
                    <img
                        className=" h-[120px] w-[120px] rounded-full -mt-[23px] md:-mt-7 scale-150"
                        src={testimonial1}
                        alt="Bonnie image" />

                    <h1 className='mb-2  text-[#111029] font-[Poppins] font-semibold text-2xl  cursor-pointer'>  Ronald Richards</h1>
                    <h2 className=" text-[#ABAFC7]  font-[Poppins] font-medium  text-base  cursor-pointer">   Google inc.</h2>

                    <div className="mt-4 flex space-x-3 lg:mt-6">                                                 { /* text-['18px']  */}

                        <p className="cursor-pointer flex items-center rounded-lg   pb-6  md:max-w-[360px] px-8 text-center text-[#70798B] font-[Poppins] font-normal text-[15px] xl:text-[18px] leading-8 "
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod  tempor incididunt.
                        </p>
                    </div>
                    <div className='flex pb-11 space-x-1'>

                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>

            {/* Grid 2 */}
            <div className=" bg-[#FFFFFF] rounded-[20px] mb-[60px]  hover:shadow-custom-box-shadow-testimonial w-[300px] md:w-full xl:w-[352px] h-[357px] lg:h-[370px] xl:h-[357px] mx-auto md:mx-0">


                <div className="flex flex-col items-center  ">
                    <img
                        className="mb-3 h-[120px] w-[120px] rounded-full -mt-[43px] md:-mt-11"
                        src={testimonial2}
                        alt="Bonnie image" />

                    <h1 className='mb-2  text-[#111029] font-[Poppins] font-semibold text-2xl cursor-pointer'> Guy Hawkins</h1>
                    <h2 className=" text-[#ABAFC7]  font-[Poppins] font-medium  text-base  cursor-pointer">  Paypal inc.</h2>

                    <div className="mt-6 flex space-x-3 lg:mt-6">

                        <p className="cursor-pointer flex items-center rounded-lg   pb-6 md:max-w-[360px] px-8 text-center text-[#70798B] font-[Poppins] font-normal text-[15px] xl:text-[18px] leading-8 "
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod  tempor incididunt.
                        </p>
                    </div>
                    <div className='flex pb-11 space-x-1'>

                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
            {/* Grid 3 */}
            <div className="bg-[#FFFFFF]  rounded-[20px] mb-[60px]  hover:shadow-custom-box-shadow-testimonial w-[300px] md:w-full xl:w-[352px] h-[357px] lg:h-[370px] xl:h-[357px]  mx-auto md:mx-0"  >


                <div className="flex flex-col items-center   ">
                    <img
                        className="mb-3 h-[120px] w-[120px] rounded-full -mt-[43px] md:-mt-11"
                        src={testimonial3}
                        alt="Bonnie image" />

                    <h1 className='mb-2  text-[#111029] font-[Poppins] font-semibold text-2xl  cursor-pointer'>  Kristin Watson</h1>
                    <h2 className=" text-[#ABAFC7]  font-[Poppins] font-medium  text-base  cursor-pointer">   Microsoft inc.</h2>

                    <div className="mt-6 flex space-x-3 lg:mt-6">

                        <p className="cursor-pointer flex items-center rounded-lg   pb-6 max-w-[398px] px-8 text-center text-[#70798B] font-[Poppins] font-normal text-[15px] xl:text-[18px] leading-8 "
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod  tempor incididunt.
                        </p>
                    </div>
                    <div className='flex pb-11 space-x-1'>

                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
            {/* Grid 4 */}
            <div className="bg-[#FFFFFF]  rounded-[20px] mb-[100px]   hover:shadow-custom-box-shadow-testimonial w-[300px] md:w-full  xl:w-[352px] h-[357px] lg:h-[370px] xl:h-[357px]  mx-auto md:mx-0">


                <div className="flex flex-col items-center   ">
                    <img
                        className="mb-3 h-[120px] w-[120px]rounded-full -mt-[43px]"
                        src={testimonial4}
                        alt="Bonnie image" />

                    <h1 className='mb-2  text-[#111029] font-[Poppins] font-semibold text-2xl cursor-pointer '> Robert Fox</h1>
                    <h2 className=" text-[#ABAFC7]  font-[Poppins] font-medium  text-base  cursor-pointer">Facebook inc.</h2>

                    <div className="mt-6 flex space-x-3 lg:mt-6">

                        <p className="cursor-pointer flex items-center rounded-lg   pb-6 max-w-[398px] px-8 text-center text-[#70798B] font-[Poppins] font-normal text-[15px] xl:text-[18px] leading-8 "
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod  tempor incididunt.
                        </p>
                    </div>
                    <div className='flex pb-11 space-x-1'>

                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>


            {/* Grid 5 */}
            <div className="bg-[#FFFFFF]  rounded-[20px] mb-[100px]   hover:shadow-custom-box-shadow-testimonial w-[300px] md:w-full xl:w-[352px] h-[357px] lg:h-[370px] xl:h-[357px]  mx-auto md:mx-0">


                <div className="flex flex-col items-center    ">
                    <img
                        className="mb-3 h-[120px] w-[120px] rounded-full -mt-[43px]"
                        src={testimonial5}
                        alt="Bonnie image" />

                    <h1 className='mb-2  text-[#111029] font-[Poppins] font-semibold text-2xl  cursor-pointer'> Savannah Nguyen</h1>
                    <h2 className=" text-[#ABAFC7]  font-[Poppins] font-medium  text-base  cursor-pointer">   Twitter inc.</h2>

                    <div className="mt-6 flex space-x-3 lg:mt-6">

                        <p className="cursor-pointer flex items-center rounded-lg   pb-6 md:max-w-[398px] px-8 text-center text-[#70798B] font-[Poppins] font-normal text-[15px] xl:text-[18px] leading-8 "
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod  tempor incididunt.
                        </p>
                    </div>
                    <div className='flex pb-11 space-x-1'>

                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
            {/* Grid 6 */}
            <div className="bg-[#FFFFFF] rounded-[20px] mb-[100px]  hover:shadow-custom-box-shadow-testimonial w-[300px] md:w-full xl:w-[352px] h-[357px] lg:h-[370px] xl:h-[357px]  mx-auto md:mx-0">


                <div className="flex flex-col items-center   ">
                    <img
                        className="mb-3 h-[120px] w-[120px] rounded-full -mt-[43px]"
                        src={testimonial6}
                        alt="Bonnie image" />

                    <h1 className='mb-2  text-[#111029] font-[Poppins] font-semibold text-2xl  cursor-pointer'>  Courtney Henry </h1>
                    <h2 className=" text-[#ABAFC7]  font-[Poppins] font-medium  text-base  cursor-pointer">  Apple inc.</h2>

                    <div className="mt-6 flex space-x-3 lg:mt-6">

                        <p className="cursor-pointer flex items-center rounded-lg   pb-6 md:max-w-sm px-8 text-center text-[#70798B] font-[Poppins] font-normal text-[15px] xl:text-[18px] leading-8 "
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod  tempor incididunt.
                        </p>
                    </div>
                    <div className='flex pb-11 space-x-1'>

                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>

        </div>

    );
};
