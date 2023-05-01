import React from 'react'
import image1 from "../../../assests/Image1.png";
import image2 from "../../../assests/Image2.png";
import image3 from "../../../assests/Image3.png";
import image4 from "../../../assests/Image4.png";
import image5 from "../../../assests/Image5.png";
import image6 from "../../../assests/Image6.png";


export default function WorkingGallery() {
    return (
        <div className='mt-[60px]  ' >

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'> */}
            <div className='flex flex-col md:flex-row gap-7'>
                {/* 1 */}
                <div className='relative'>
                    <img className="md:h-[400px] h-[400px] mx-auto md:mx-0 md:w-full w-[353px] rounded-lg" src={image1} alt="" />
                    {/* <h1 className='absolute  sm:text-xs md:text-xl text-[#FFFFFF] 
                    top-[650px] left-3  md:top-[300px] md:left-2 lg:top-[350px] lg:left-5  '>Front working space</h1> */}


                    <div className='relative pt-[30px]'>
                        <img className="md:h-[550px] h-[550px] mx-auto md:mx-0 md:w-full w-[353px] rounded-lg" src={image4} alt="" />
                        {/* <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF] 
                        top-[850px] left-3  md:top-[500px] md:left-2 lg:top-[520px] lg:left-5 
                        '>Guest rest room</h1> */}
                    </div>


                </div>
                
                {/* 2 */}
                <div className='relative'>
                    <img className="md:h-[530px] h-[530px] mx-auto md:mx-0 md:w-full w-[352px] rounded-lg" src={image2} alt="" />
                    {/* <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF] 
                    top-[850px] left-3  md:top-[430px] md:left-2 lg:top-[470px] lg:left-5 
                    '>Meeting corner</h1> */}


                    <div className='relative pt-[30px]'>
                        <img className="md:h-[420px] h-[420px] md:w-full w-[352px] mx-auto md:mx-0  rounded-lg " src={image5} alt="" />
                        {/* <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF]   
                        top-[750px] left-3  md:top-[370px] md:left-2 lg:top-[387px] lg:left-5 
                        '>Single working space</h1> */}
                    </div>

                </div>


                {/* 3 */}
                    <div className='relative'>
                    <img className="md:h-[450px] h-[450px] md:w-full w-[353px] mx-auto md:mx-0 rounded-lg" src={image3} alt="" />
                    {/* <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF] 
                    top-[750px] left-3  md:top-[390px] md:left-2 lg:top-[400px] lg:left-5 
                    
                    '>Guest meeting room</h1> */}


                    <div className='relative pt-[30px]'>
                        <img className="md:h-[500px] h-[500px]  md:w-full w-[353px] mx-auto md:mx-0 rounded-lg " src={image6} alt="" />
                        {/* <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF]  
                        top-[850px] left-3  md:top-[450px] md:left-2 lg:top-[470px] lg:left-5 
                        '>Kitchen room</h1> */}
                    </div>

                </div>


            </div>

        </div>
    );
};















           {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                <div className='relative'>
                    <img className="h-auto md:h-[523px] w-full md:w-auto rounded-lg" src={image1} alt="" />
                    <h1 className='absolute  sm:text-xs md:text-xl text-[#FFFFFF]  md:top-[450px] left-0 md:left-5'>Front working space</h1>

                </div>
                <div className='relative'>
                    <img className="h-auto md:h-[605px] w-full md:w-auto rounded-lg" src={image2} alt="" />
                    <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF] md:top-[550px]  md:left-5'>Meeting corner</h1>
                </div>


                <div className='relative'>
                    <img className="h-auto md:h-[579px] w-full md:w-auto rounded-lg" src={image3} alt="" />
                    <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF]  md:top-[530px]  md:left-5'>Guest meeting room</h1>
                </div>
                <div className='relative'>
                    <img className="h-auto md:h-[718px] w-full md:w-auto rounded-lg" src={image4} alt="" />
                    <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF] md:top-[660px] md:left-5'>Guest rest room</h1>
                </div>


                <div className='relative'>
                    <img className="h-auto md:h-[718px] w-full md:w-auto rounded-lg " src={image5} alt="" />
                    <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF]    md:top-[660px]  md:left-5'>Single working space</h1>
                </div>
                <div className='relative'>
                    <img className="h-auto md:h-[718px] w-full md:w-auto rounded-lg " src={image6} alt="" />
                    <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF]  md:top-[660px]  md:left-5'>Kitchen room</h1>
                </div>





            </div> */}