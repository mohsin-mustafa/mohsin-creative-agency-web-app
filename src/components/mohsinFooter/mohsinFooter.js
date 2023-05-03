import React from 'react'
import logo from "../../assests/logo.svg";
import footerMapImage from "../../assests/footerMapImage.png";
import footerLine from "../../assests/footerLine.png";
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';


export default function MohsinFooter() {
  return (

    <div className='bg-[#00113B]    '>

      <div className='container max-w-[1140px] mx-auto px-5 xl:px-0  pt-[200px]  '>




        <div className='flex flex-col md:flex-row  justify-between'>

          <div className='flex flex-col   '>


            {/* <div className='flex justify-start items-start'> */}
            <Link to="/">
              <img src={logo} alt="" className='mt-[70px]  -ml-7 ' />
            </Link>
            {/* </div> */}
            <p className="max-w-[360px] text-[#FFFFFF] text-left font-[Poppins] font-medium  text-[16px] leading-6 opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure  dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>


          </div>





          {/* <div className='justify-start text-left md:text-center mx-9'>
        <div className='justify-start  text-left ml-[123.45px]'>
                  <p className='text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7 mt-20'>Our Office</p>

          <img src={footerMapImage} alt="" className='mt-8 mx-4 md:mx-[100px]' />


          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7 mt-20'>Contact</p>

          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 mt-8'>
            Jl KH Samanhudi <br /> Metro Atom Plaza Bl <br /> AKS 1/11, Dki Jakarta
          </p>
          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 mt-5'>info@yourdomain.com</p>
          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 mt-5'>+62 (0) 000 0000 00</p>

        </div>
        </div> */}


          <div className=' text-left  '>

            <p className='text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7 mt-20'>Our Office</p>

            <img src={footerMapImage} alt="" className='max-w-[80%] md:max-w-[388px] max-h-[227px] mt-8 ml-0 md:ml-auto' />


          </div>


          {/* <div class="container  px-[100px]  ">
          <div class="justify-start text-left  md:text-right md:flex lg:items-center  ">
            <div class="order-last  mb-6  md:mb-0  max-w-md">
              <p className='text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7 mt-20'>Our Office</p>
              <img src={footerMapImage} alt="" className='mt-8 mx-4 md:mx-[100px]' />


            </div>

          </div>
        </div> */}



          {/* <div class="container      "> */}
          <div class="text-left    ">
            {/* <div class="order-last  mb-6  md:mb-0  max-w-md"> */}
            <p className=' text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7 mt-20 '>Contact</p>
            <p className='text-[#FFFFFF]  font-[Poppins] font-medium text-[16px] leading-[30px] opacity-75 mt-8
              max-w-[172px]'>Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</p>

            <p className='max-w-[172px] text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 opacity-75 mt-5'>info@yourdomain.
              <br />com</p>
            <p className='max-w-[172px] text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 opacity-75 mt-5'>+62 (0) 000 0000 00</p>

            {/* </div> */}

          </div>
          {/* </div> */}


        </div>





        {/* Custom Create but not working */}
        {/* <div className='flex flex-col md:flex-row  justify-between px-3 md:px-[160px]  text-left mt-20'>

        <div className=''>logo
          <a href="/">
            <img src={logo} alt="" className='scale-150' height={48} width={48} />
          </a>
          <p className=' text-[#FFFFFF] text-left font-[Poppins] font-medium  text-[16px] leading-6 mt-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eaque dignissimos, unde vitae animi explicabo ipsum quisquam rem numquam quasi quae neque consequuntur illo aspernatur quibusdam quis maiores, saepe mollitia.</p>
        </div>
        <div className='mt-8 mx-4 md:mx-[100px]'>Our Office
          <p className=' text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7 '>Our Office</p>
          <img src={footerMapImage} alt="" className='mt-8 mx-4 md:mx-[100px]' />


        </div>
        <div className='mx-2 md:mx-[100px]'>Contact
          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7  '>Contact</p>
          <p class="text-[#EEEEEE] font-Poppins font-[Poppins] text-[16px] leading-[30px] tracking-[4%] mt-8">

            Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta

          </p>

          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 mt-5'>info@yourdomain.com</p>
          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 mt-5'>+62 (0) 000 0000 00</p>
        </div>

      </div> */}







        <div className=' mt-11'>

          <img src={footerLine} alt="" className='w-full ' />
        </div>


        <Footer />
      </div>
    </div>

  );
};
