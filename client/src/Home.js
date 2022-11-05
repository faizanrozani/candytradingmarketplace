import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/Navbar";

import Main from "./components/Main";
 
const Home = () => {
 return (
   <div>
     <Navbar />
     <Main />
     <Routes>
     </Routes>
   </div>
 );
};
 
export default Home;