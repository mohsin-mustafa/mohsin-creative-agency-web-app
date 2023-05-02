import React from 'react'
import Routing from './routing/routing';
import './App.css';
import './index.css';



const App = () => {
  return (
    <div>

      <Routing />
    </div>
  )
}

export default App;











// // import './App.css';

// // import LandingPage from './modules/landingPage/landingPage';
// // import "./theme.css";

// import React from 'react';
// import './index.css';

// import {
//   createBrowserRouter,
//   RouterProvider,

// } from "react-router-dom";
// import Navbar from "./components/navbar/navbar";
// import Home from './modules/landingPage/LandingPage';
// import About from "./components/about/about";
// import Works from "./components/works/works";
// import './App.css';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div className='App'>
//       <Navbar />
//       <Home />
//     </div>,

//   },
//   {
//     path: "/works",
//     element: <div className='App'>
//       <Navbar />
//       <Works />
//     </div>,
//   },
//   {
//     path: "/about",
//     element: <div className='App'>
//       <Navbar />
//       <About />
//     </div>,
//   },

// ]);







// function App() {



//   return (

//     <RouterProvider router={router} />
//   );
// }


// export default App;
