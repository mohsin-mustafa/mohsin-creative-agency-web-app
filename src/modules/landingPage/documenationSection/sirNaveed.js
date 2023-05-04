import React from 'react'
import documentBgImg from "../../../assests/documentBgImg.png";
// import sirNaveed from "../../../assests/sirNaveed.png";
// import mohsin from "../../../assests/New folder/MohsinGroup.JPG";
// import sir from "../../../assests/New folder/sir naveed.JPG";

export default function SirNaveed() {
  return (



    <div class=" mt-[60px] ">
      <div className='justify-center bg-cover w-full px-6  '
        style={{ 
          backgroundImage: `url(${documentBgImg})` }}
      >
        <div className='max-w-[70rem] mx-auto xl:pb-[210px] container  pb-12 lg:pb-[100px] px-0 md:px-6 lg:px-6 xl:px-0'>
          {/* <img src={sirNaveed} alt='img not found' /> */}
          {/* <img src={mohsin} alt='img not found' className='rounded-xl shadow-custom-box-shadow-service' /> */}
          {/* <img src={sir} alt='img not found' className='rounded-xl' /> */}
          <iframe className='w-[100%] mt-10 height="480"  aspect-video rounded-xl  shadow-custom-box-shadow-service'
            src="https://www.youtube.com/embed/64uOzjR2h90"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  );
};
