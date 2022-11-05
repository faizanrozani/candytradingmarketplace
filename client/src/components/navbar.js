import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import Logo from "./Logo";

// Here, we display our Navbar
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Logo />
                <div class="container">
                <div class="row">
    <div class="col-6">
      
    </div>
    <div class="col-3">
    
    </div>
    <div class="col-3">
     
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      button one
    </div>
    <div class="col-3">
      button two
    </div>
  </div>
  
</div>
            </nav>
            
        </div>
    );
}