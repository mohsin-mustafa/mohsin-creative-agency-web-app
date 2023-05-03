import React from 'react'
import TestimonialCards from './testimonialCards';

export default function Testimonial() {
    return (

        <div className='bg-[#F9F9FD]'>
            <div class="container  max-w-[1120px] mx-auto  md:mx-auto   ">
                <div className='text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7 pt-[100px] pb-[20px]'>
                    Testimonials
                </div>
                <div className='text-[#111029] font-[Poppins] font-semibold mx-6 lg:mx-auto text-[20px] leading-7 md:text-[25px] xl:text-[42px] xl:leading-[56px] tracking-[-0.1px]  '>
                    Some testimonials from our customers
                </div>
                <TestimonialCards />
            </div>
        </div>
    );
};
