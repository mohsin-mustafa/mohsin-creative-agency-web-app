




import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import LandingPage from '../modules/landingPage/LandingPage';
// import Home from '../modules/landingPage/LandingPage';
import About from "../components/about/about";
import Works from "../components/works/works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='App'>
      <Navbar />
      <LandingPage />
      {/* <Home /> */}
    </div>,

  },
  {
    path: "/works",
    element: <div className='App'>
      <Navbar />
      <Works />
    </div>,
  },
  {
    path: "/about",
    element: <div className='App'>
      <Navbar />
      <About />
    </div>,
  },

]);



function Routing() {
  return (
    <div>


      <RouterProvider router={router} />


    </div>
  );
}
export default Routing;

