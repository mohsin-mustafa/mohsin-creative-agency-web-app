import React from 'react'

// import Navbar from '../../components/navbar/navbar';
import FirstSection from "./FirstSection/firstSection";
// import HeroSection from './heroSection/heroSection';

import OurServices from './servicesSection/ourServices';
import OurDocumentation from "./documenationSection/OurDocumentation";
import SirNaveed from './documenationSection/sirNaveed';
// import Customer from './customer/customer';
import CustomerSatisfaction from './customerSection/CustomerSatisfaction';
import WorkingSpace from './workingSpaceSection/workingSpace';
import GreatCustomer from './companySection/greatCustomer';
import SliderItems from './slider/sliderItems';


import FrequentlyAsked from './frequently/frequentlyAsked';
// import FrequentlyAskedQuestions from './frequentlyAskedQuestionSection/frequentlyAskedQuestions';
import Testimonial from './testimonialSection/testimonial';

import NewProject from '../../components/newProject/newProject';
import MohsinFooter from '../../components/mohsinFooter/mohsinFooter';








export default function LandingPage() {
  return (
    <div className=''>

      {/* <Navbar  /> */}
      <FirstSection />
      {/* <HeroSection /> */}
      <OurServices />
      <OurDocumentation />
      <SirNaveed />
      <CustomerSatisfaction />
      {/* <Customer /> */}

      <WorkingSpace />

      <GreatCustomer />
      <SliderItems />
      <FrequentlyAsked />
      {/* <FrequentlyAskedQuestions /> */}
      <Testimonial />
      <NewProject />
      <MohsinFooter />

      {/* <MohsinButton /> */}
      {/* <SliderMohsin /> */}
    </div>
  );
};
