import React from 'react'
import heroImage from "../../../assests/New folder/image.webp";
import heroImage1 from "../../../assests/New folder/bg-image-1.png";
import GetStartedButton from './getStartedButton';

const FirstSection = () => {
    return (



        <div className='relative '>
        <div className='md:pb-[12.5rem] pb-20 pl-6 md:pl-20 lg:pl-10 xl:pl-[160px] pr-6 '>
            <div className='flex gap-6 flex-col-reverse lg:flex-row justify-center lg:justify-between items-center xl:flex-nowrap flex-wrap'>
                <div className='md:mt-28 mt-14 text-left'>
                  {/* <h1 className='font-semibold xl:text-[3.5rem] lg:max-w-[320px] xl:max-w-[565px] text-[1.875rem] lg:[2.2rem] text-[#111029]  max-w-full  tracking-[-0.4px]'> Make your business <span className='text-[#FF6800] xl:text-[4rem]'> more powerful </span>
                            with us</h1> */}
                        {/* <p className='font-semibold text-3xl leading-9 xl:text-[3.5rem] xl:mt-3 mt-0 text-[#111029]'></p> */}
{/* <hr /> */}
<h1 className='font-semibold font-[Poppins] text-[20px] xl:text-[3.5rem] lg:max-w-[330px] xl:max-w-[700px] xl:leading-[72px] lg:text-[1.875rem] lg:[2.2rem] text-[#111029]  max-w-full  tracking-[-0.4px]'> Make your business <span className='text-[#FF6800] xl:text-[4rem]'> more powerful </span>
                            with us</h1>
                        
                    <p className='     my-6
                    text-[#6B6B6B] font-[Poppins] font-normal text-[18px] leading-[32px] tracking-[-0.4px] text-left lg:max-w-[450px] xl:max-w-[350px]
                    '>We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</p>
                    <div className='flex justify-start'>
                        <GetStartedButton />
                        {/* <Button title='Get Started' /> */}
                    </div>
                </div>
                <div className='md:w-[70%] xl:w-[67%] lg:w-[45%]  w-full mt-10'>
                    <img className='w-full  ' src={heroImage} alt='img' />
                </div>
            </div>
        </div>
        <img className='absolute   top-[15%] -z-20 ' src={heroImage1} alt='wave' />

    </div>






        // <div className='relative '>
            
        //     <div className='flex flex-wrap lg:flex-nowrap justify-center '>

        //     <div className='md:mt-28 mt-14 text-left'>
        //                 <h1 className=' font-semibold lg:max-w-sm  md:max-w-full tracking-[-0.4px] w-full text-3xl leading-9 xl:text-[3.5rem] text-[#111029] md:leading-[4.5rem]'>
        //                     <span className=' whitespace-pre-wrap lg:whitespace-nowrap'>Make your business</span> <span className='text-[#FF6800] whitespace-nowrap'> more powerful </span>
        //                 </h1>
        //                 <p className='font-semibold text-3xl leading-9 xl:text-[3.5rem] text-[#111029]'>with us</p>
        //                 <p className=' font-normal text-lg leading-8 text-[#6B6B6B] md:max-w-md lg:max-w-[365px] max-w-full my-6'>We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</p>
        //                 <div className='flex justify-start'>
        //                     < GetStartedButton />
        //                 </div>
        //             </div>
        //         <div className='flex md:w-[70%] xl:w-[55%] lg:w-[50%]  w-full mt-10'>

        //             <img src={heroImage} alt="" className='w-full   ' />
        //         </div>
        //     </div>


        //     <img src={heroImage1} alt="" className='absolute top-[15%]' />

        // </div>
    )
}

export default FirstSection;