import React from "react";

const GetStartedButton = () => {
    return (
        <div className=" px-[35px] py-[19px] bg-[#4C40F7] hover:bg-red-500 font-semibold rounded-xl text-base
        focus:ring-4 focus:outline-none   
             focus:ring-blue-300 "
             
             style={{filter: 'drop-shadow(5px 10px 30px rgba(76, 64, 247, 0.5))'}}
             >
            <div className="text-[#FFFFFF]   font-[Poppins]  text-center inline-flex items-center  ">
            
                     
            
                    Get Started
                    <svg aria-hidden="true" className="w-5 h-5 ml-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

               
            </div>

        </div>
    );
};

export default GetStartedButton;
