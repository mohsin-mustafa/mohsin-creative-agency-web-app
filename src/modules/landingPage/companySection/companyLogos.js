import React from 'react'
import icon1 from "../../../assests/icon1.svg";
import icon2 from "../../../assests/icon2.svg";
import icon3 from "../../../assests/icon3.svg";
import icon4 from "../../../assests/icon4.svg";
import icon5 from "../../../assests/icon5.svg";
import icon6 from "../../../assests/icon6.svg";
import icon7 from "../../../assests/icon7.svg";
import icon8 from "../../../assests/icon8.svg";
import icon9 from "../../../assests/icon9.svg";
import icon10 from "../../../assests/icon10.svg";

export default function CompanyLogos() {
    return (
        <div className=' mt-[80px]   lg:mx-5 '>





            <div className='grid place-items-center  grid-cols-1 md:grid-cols-5  gap-16 xl:gap-28'>
                <img src={icon1} alt="" className='' />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" className='pb-3' />
                <img src={icon4} alt="" className='pb-3' />
                <img src={icon5} alt="" className='pb-3' />
            </div>

            <div className='grid place-items-center grid-cols-1 md:grid-cols-5 lg:grid-cols-5  gap-16 xl:gap-28 mt-20'>
                <img src={icon6} alt="" className='pb-3' />
                <img src={icon7} alt="" className='pb-3'  />
                <img src={icon8} alt="" className='pb-3' />
                <img src={icon9} alt="" className='pb-3' />
                <img src={icon10} alt="" className='pb-3' />
            </div>















            {/* <div className='grid grid-cols-1 md:grid-cols-5 gap-x-28 md:gap-x-10 place-content-center '>
            <img src={icon1} alt="" className=' ' />
                <img src={icon2} alt="" className='-mt-2' />
                <img src={icon3} alt="" className='-mt-2' />
                <img src={icon4} alt="" className='-mt-3 ' />
                <img src={icon5} alt="" className='-mt-3 ' />

                <img src={icon6} alt="" /> 
                  <img src={icon7} alt="" />
                  <img src={icon8} alt="" />
                  <img src={icon9} alt="" />
                   <img src={icon10} alt="" />
            </div> */}

            {/* <div className='flex flex-col md:flex-row justify-between  mb-8  '>
                <img src={icon1} alt="" className=' ' />
                <img src={icon2} alt="" className='-mt-2' />
                <img src={icon3} alt="" className='-mt-2' />
                <img src={icon4} alt="" className='-mt-3 ' />
                <img src={icon5} alt="" className='-mt-3 ' />
            </div>
            <div className='flex flex-col md:flex-row  justify-between   '>
                   <img src={icon6} alt="" /> 
                  <img src={icon7} alt="" />
                  <img src={icon8} alt="" />
                  <img src={icon9} alt="" />
                   <img src={icon10} alt="" />
            </div> */}

        </div>

    );
};
