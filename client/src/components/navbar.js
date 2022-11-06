import React from "react";

import { BsFillChatLeftFill } from 'react-icons/bs';
//npm install react-icons --save


// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.

import Logo from "./Logo";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid ">
          <a class="navbar-brand " href="#"><Logo /></a>
          <div>
            <ul class="navbar-nav ">
              <li class="nav-item">
                
          <button type="button" class="btn btn-primary"><BsFillChatLeftFill /></button>
              </li>

              <li class="nav-item">
                <h1> &nbsp; </h1>
              </li>
              <li class="nav-item">
                
        <button type="button" class="btn btn-primary">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}