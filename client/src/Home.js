import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/Navbar";
import Content from "./Content";
import Overview from "./components/Overview";
import SetProfile from "./components/SetProfile";
import ViewTrades from "./components/ViewTrades";


 
const Home = () => {
 return (
   <div>
     <Navbar />
     <Content />
     <Routes>
              <Route path='/overview' element={<Overview />} />
              <Route path='/setprofile' element={<SetProfile />} />
              <Route path='/viewtrades' element={<ViewTrades/>} />
          </Routes>
   </div>
 );
};
 
export default Home;