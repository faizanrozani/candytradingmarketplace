import React from "react";

import { BsFillChatLeftFill } from 'react-icons/bs';
//npm install react-icons --save


// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

//import Logo from "./Logo";

// Here, we display our Navbar
export default function Navbar() {
    return (
        <div class="nav-container">
          <h1 class="header-title bg-warning display-4">Candy Trading Place</h1>
          <div class="null">

          </div>
          <div class="flt">
            <button type="button" class="btn btn-warning flt-button btn-mar btn-lg">Login</button>
          <button type="button" class="btn btn-warning flt-button btn-mar btn-lg"><BsFillChatLeftFill /></button>
          </div>
          
       
          
        </div>
    );
}