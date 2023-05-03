




import React, { useState } from 'react'
import Logo from "../../assests/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";
// import { FaFacebook } from "react-icons/fa";
// import { BsGithub } from "react-icons/bs";
// import { ImLinkedin2 } from "react-icons/im";
// import { GrSkype } from "react-icons/gr";
// import { BsCloudMoonFill } from "react-icons/bs";
// import LandingPage from '../../modules/landingPage/landingPage';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showTabs, setShowTabs] = useState()




    function toggleTabs() {
        setShowTabs(!showTabs);
    }
    // const [nav, setNav] = useState(false);
    // const [isDarkMode, setIsDarkMode] = useState(false);
    // function toggleDarkMode() {
    //     setIsDarkMode(!isDarkMode);
    //   }



    // const handleNav = () => {
    //     setNav(!nav);
    // };


    return (


        // <div className={isDarkMode ? "dark-mode" : ""}>

        <div>

            <div className="sticky top-0 w-full h-20  z-[100%]  container max-w-[1160px] mx-auto px-5 mt-7">


                <div className="flex  justify-between items-center w-full h-full  py-10  ">
                    <a href={"/"}>
                        <img src={Logo}
                            alt=""

                            className=" rounded-full -ml-4  " />
                    </a>


                    <div>
                        <ul className="hidden md:flex items-center gap-[5.1rem] ">
                            <li className="border-b border-transparent  uppercase hover:border-b hover:border-gray-300
                            text-[#4C40F7] font-[Poppins] font-semibold text-[20px] leading-7  hover:text-[#FCE611] duration-500">

                                <Link to="/">Home</Link>
                            </li>

                            <li className="border-b border-transparent  uppercase hover:border-b hover:border-gray-300
                            text-[#6B6B6B] font-[Poppins] font-semibold text-[20px] leading-7 hover:text-[#FCE611] duration-500">

                                <Link to="/works">Works</Link>
                            </li>

                            <li className="border-b border-transparent  uppercase hover:border-b hover:border-gray-300
                            text-[#6B6B6B] font-[Poppins] font-semibold text-[20px] leading-7 hover:text-[#FCE611] duration-500">

                                <Link to="/about">About</Link>
                            </li>
                            {/* <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300">

                                <a href={"/contact"}>Contact</a>
                            </li> */}
                        </ul>

                        {/* Mobile Nav Hamburger */}
                        {/* <div onClick={handleNav} className="md:hidden"> */}
                        <div onClick={toggleTabs} className="md:hidden">
                            <AiOutlineMenu size="20" className='mr-5' />

                        </div>
                    </div>

                    {/* <BsCloudMoonFill onClick={toggleDarkMode} /> */}



                    <div className="hidden md:block px-[35px]   rounded-xl  py-[19px] bg-[#4C40F7] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 "

                        style={{ filter: 'drop-shadow(-15px 10px 30px rgba(76, 64, 247, 0.25))' }}
                    >
                        {/* <Link to="/"> */}

                        <button type="button" className="text-[#FFFFFF]  font-[Poppins] font-semibold text-[16px] leading-[26px]  text-center inline-flex items-center ">
                            Contact us
                            {/* <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                        </button>
                        {/* </Link> */}

                    </div>





                </div>
            </div>


            {/* Mobile Nav */}

            {showTabs ? (
                <div className='flex justify-center md:hidden'>
                    <ul className=' text-[#6B6B6B] flex flex-col items-center gap-10'>
                        <li className='font-semibold text-sm' >
                            <Link to="/">Home</Link>
                        </li>
                        <li className='font-semibold text-sm' >
                            <Link to="/works">Works</Link>
                        </li>
                        <li className='font-semibold text-sm '>
                            <Link to="/about">About</Link>
                        </li>
                        <Link to="/">
                            <div className='bg-[#4C40F7] cursor-pointer rounded-xl shadow-xl shadow-[#4C40F740] px-5 py-3 text-white'>Contact us</div>
                        </Link>
                        <li></li>
                    </ul>
                </div>)
                : null
            }



            {/* Mobile Nav */}
            {/* <div className={`${nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}`}>

                <div className={`${nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-white p-10 ease-in duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}  `}>
                    <div className="flex w-full items-center justify-between">
                        <a href={"/"}>
                            <img src={Logo}
                                alt=""
                                width={100}
                                height={100}
                                className="w-16 h-16 rounded-full bg-[#54ca95]" />
                        </a>

                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                            <AiOutlineClose />

                        </div>
                    </div>

                    <div className="border-b border-cyan-300 my-5">
                        <p className="w-[85%] md:w-[90%] py-4">Mohsin Mustafa | Fullstack Developer</p>
                    </div>


                    <div className="py-4 flex flex-col">
                        <ul className="uppercase text-sm">
                            <a href={"/"}>
                                <li className="py-4">Home</li>
                            </a>
                            <a href={"/works"}>
                                <li className="py-4">Works</li>
                            </a>
                            <a href={"/About"}>
                                <li className="py-4">About</li>
                            </a>
                            <a href={"/contact"}>
                                <li className="py-4">Contact</li>
                            </a>
                        </ul>


                        <div className="py-40  ">
                            <p className="uppercase tracking-widest text-[#54ca95] w-full sm:w-[80%]">Let&apos;s Connect</p>
                            <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                                <a url={"https://www.facebook.com/"}>
                                    <FaFacebook />

                                </a>
                                <a url="https://www.github.com">
                                    <BsGithub />
                                </a>

                                <a url="https://www.linkdin.com">
                                    <ImLinkedin2 />
                                </a>
                                <a url="https://www.skype.com">
                                    <GrSkype />
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div> */}




            {/* <LandingPage /> this is called in bottom*/}
            {/* </div> */}


        </div>
    );
};
