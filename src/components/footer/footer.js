import React from 'react'
import BsFacebook from "../../assests/BsFacebook.svg";
import BsInstagram from "../../assests/BsInstagram.svg";
import BsLinkdin from "../../assests/BsLinkdin.svg";
import BsTwitter from "../../assests/BsTwitter.svg";

export default function Footer() {
    return (

        <div className='flex flex-col md:flex-row justify-between  '>
            <div className='flex justify-center items-start mt-[52px] mb-[68px] '>
                <span class=" sm:text-center dark:text-gray-400
                       text-[#ABAFC7] font-[Poppins] font-medium  text-[16px] leading-6 hover:text-[#FF2D59]  ">©2023
                    <a href="#" className="hover:underline hover:text-[#FCE611]"> Creative Agency™</a>
                </span>
            </div>

            <div className='flex justify-center items-start  mt-[52px] mb-[68px]  '>
                <ul className=" flex    text-[#ABAFC7] font-[Poppins] font-medium  text-[16px] leading-6 hover:text-lg  ">
                    <li>
                        <a href="#" className="mr-4 hover:underline hover:text-[#FCE611]  md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline hover:text-[#FCE611] md:mr-6 ">Works</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline hover:text-[#FCE611] md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline hover:text-[#FCE611] md:mr-6 ">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline hover:text-[#FCE611]">About</a>
                    </li>
                </ul>
            </div>
            <div className='flex   items-start space-x-7 md:space-x-4 mx-auto md:mx-0   mt-0 md:mt-11  mb-[60px] '>
                <a href=""> <img src={BsFacebook} alt="" className='h-10 w-10' /></a>

                <a href=""><img src={BsInstagram} alt="" className='h-10 w-10' /></a>

                <a href=""><img src={BsLinkdin} alt="" className='h-10 w-10' /></a>

                <a href=""><img src={BsTwitter} alt="" className='h-10 w-10' /> </a>
            </div>
        </div>



    )
}
