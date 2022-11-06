import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Content() {
 return (
   <div class="resolve">
     <ul class="nav justify-content-center">
           <li className="nav-item">
             <NavLink className="nav-link" to="/overview">
                <span class="mr-9 ml-9 h3 text-warning">Overview</span>
               
             </NavLink>
           </li>

           <li className="nav-item">
             <NavLink className="nav-link" to="/setprofile">
             <span class="mr-9 ml-9 h3 text-warning">SetProfile</span>
             </NavLink>
           </li>

           <li className="nav-item">
             <NavLink className="nav-link" to="/viewtrades">
             <span class="mr-9 ml-9 h3 text-warning">View Trades</span>
             </NavLink>
           </li>
         </ul>
   </div>
 );
}