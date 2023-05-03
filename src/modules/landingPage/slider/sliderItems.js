import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import exclude from "../../../assests/Exclude.png";

import image from "../../../assests/accordionBgImg-1.png";


import sliderarrow1 from "../../../assests/sliderarrow1.svg";
import sliderarrow2 from "../../../assests/sliderarrow2.svg";

const SliderItems = () => {




    // function previous() {
    //     slider.current.slickPrev();
    // }

    // function next() {
    //     slider.current.slickNext();
    // }




    const slider = React.useRef(null);
    const settings = {
        dots: true,
        dotsClass: 'slick-dots li button',

        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    // backgroundColor: "#FFCC00",
                    // borderRadius: "100px",
                    // padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "15px",
                    height: "4px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "2px "
                }}
            >
                {/* {i + 1} */}
            </div>
        ),

        // arrow hide just like in bottom of slider .... or 1 2 3 4
        // arrows: false,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1



    };




    return (


        <div className="bg-[#FE9602] relative">
        <div  className=" relative max-w-[77.7%] mx-auto container mt-[100px] xl:mt-[200px] ">
            <div className=" relative py-[100px]">
                <Slider ref={slider} {...settings} className="">


                    <div className="flex justify-center ">
                        <img src={exclude} alt="" className="text-center mx-auto" />
                        {/* lg:max-w-[748px] sm:max-w-[450px] max-w-[270px] */}
                        <p className="sm:max-w-[450px] max-w-[270px] lg:max-w-[723px]  text-[#FFFFFF]  font-[Poppins] font-normal text-[25px] md:text-[20px] xl:text-[28px] leading-10 tracking-[-0.1px] text-center mx-auto 
                        my-11">We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</p>
                        <p className="max-w-[272px] text-[#FFFFFF] font-semibold text-xl text-center mx-auto mb-2">Mark Garfield</p>
                        <p className="max-w-[272px] text-[#FFFFFF] font-semibold text-xl leading-7 text-center mx-auto mb-6">CEO & Head of Product</p>
                    </div>

                    <div className="flex justify-center ">
                        <img src={exclude} alt="" className="text-center mx-auto" />
                        <p className="sm:max-w-[450px] max-w-[270px]  md:max-w-[723px] text-[#FFFFFF]  font-[Poppins] font-normal text-[28px] leading-10 tracking-[-0.1px] text-center mx-auto 
                        my-11">We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</p>
                        <p className="max-w-[272px] text-[#FFFFFF] font-semibold text-xl text-center mx-auto mb-2">Mark Garfield</p>
                        <p className="max-w-[272px] text-[#FFFFFF] font-semibold text-xl leading-7 text-center mx-auto mb-6">CEO & Head of Product</p>
                    </div>


                    <div className="flex justify-center ">
                        <img src={exclude} alt="" className="text-center mx-auto" />
                        <p className="sm:max-w-[450px] max-w-[270px] md:max-w-[723px] text-[#FFFFFF]  font-[Poppins] font-normal text-[28px] leading-10 tracking-[-0.1px] text-center mx-auto 
                        my-11">We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</p>
                        <p className="max-w-[272px] text-[#FFFFFF] font-semibold text-xl text-center mx-auto mb-2">Mark Garfield</p>
                        <p className="max-w-[272px] text-[#FFFFFF] font-semibold text-xl leading-7 text-center mx-auto mb-6">CEO & Head of Product</p>
                    </div>


                    <div className="flex justify-center ">
                        <img src={exclude} alt="" className="text-center mx-auto" />
                        <p className="sm:max-w-[450px] max-w-[270px] md:max-w-[723px] text-[#FFFFFF]  font-[Poppins] font-normal text-[28px] leading-10 tracking-[-0.1px] text-center mx-auto 
                        my-11">We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.</p>
                        <p className="max-w-[272px] text-[#FFFFFF] font-semibold text-xl text-center mx-auto mb-2">Mark Garfield</p>
                        <p className="max-w-[272px] text-[#FFFFFF] font-semibold text-xl leading-7 text-center mx-auto mb-6">CEO & Head of Product</p>
                    </div>



                </Slider>


                {/* Practice 1 */}

                {/* <button onClick={previous} className="absolute   flex justify-start items-center top-0 left-[45px] right-[-45px] bottom-0">
                    <img src={sliderarrow1} alt="" className="w-11 h-11 rounded-full border" />
                </button>

                <button onClick={next} className="absolute  flex justify-end items-center top-0 left-[-45px] right-[45px] bottom-0 ">
                    <img src={sliderarrow2} alt="" className="w-11 h-11 rounded-full border " />
                </button> */}


                {/* Practice 2 */}

                <button className='absolute top-[50%] left-[0%] rounded-full w-11 h-11 bg-white hover:bg-[#4C40F7] flex justify-center items-center' onClick={() => slider?.current?.slickPrev()}><img src={sliderarrow1} alt='arrow' /></button>
                <button className='absolute top-[50%] right-[0%] rounded-full w-11 h-11 bg-white hover:bg-[#4C40F7] flex justify-center items-center ' onClick={() => slider?.current?.slickNext()}><img src={sliderarrow2} alt='arrow' /></button>



                {/* <div className=''> */}
                {/* </div> */}
            </div>

            {/* <img src={image} alt="" className="absolute h-[500px] right-0" /> */}


        </div>
                <img className='absolute -z-50 w-96 h-[900px] top-[25%] right-0' src={image} alt='accordion image top' />
        </div>
    );
};

export default SliderItems;