import React, { useState } from 'react'
import top from "../../../../assests/top.svg";

function Dropdown({ faqsData }) {

    const [show, setShow] = useState(false)

    console.log('faqsData', faqsData);


    return (
        <div className='mb-8 '>
            <div className={`${show ? ' border-[#4C40F7]' : 'border'} bg-white  border rounded-lg sm:p-8 p-6 `}>
                <div className='flex justify-between gap-8 items-center'>
                    <h1 className='text-left text-[#111029] font-[Poppins] font-medium text-base '>{faqsData?.question}</h1>
                    <div onClick={() => setShow(!show)}>
                        <img className={`${show ? 'rotate-180' : 'rotate-0'}`} src={top} alt='' />
                    </div>
                </div>

                {show ?
                    <div>
                        <hr className='mt-6' />
                        <p className='font-normal text-left text-[#6B6B6B] font-[Poppins] text-[18px] leading-8 mt-7  max-w-[1056px]'>{faqsData?.ans}</p>
                    </div>
                    : ""
                }
            </div>
        </div>
    )
}

export default Dropdown;