import React from 'react';
import {Link} from 'react-router-dom';

export default function Navi() {
    return (
       
        <nav>
        <div class="nav-wrapper black">
          <ul class=" hide-on-med-and-down">
          <li class="tab">
             <li><Link to="/">Home</Link></li>   
             <li><Link to="/About">About us</Link></li> 
             <li><Link to="/Products">Products</Link></li> 
             <li><Link to="/Contact">Contact us</Link></li>
             
           
           </li>
          </ul>
        </div>
      </nav>
            
       
    )
}
