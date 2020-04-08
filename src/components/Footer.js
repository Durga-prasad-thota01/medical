import React from 'react'
import './Footer.css';

import {Link} from 'react-router-dom'
export default function Footer() {
    return (
        <div>
        <footer class="page-footer black"> 
        <div className="row">
        <div className="col s2"> </div>

        <div className="col s4"> 
      <img  className="logoimg foot" src="./images/orignal.png"  />
        
        </div>
        <div className="col s6"></div>
        
        
        </div>
        <div class="container">

          <div class="row">

            <div class="col l6 s12">
              
              <p class="grey-text text-lighten-4" style={{fontSize:"20px"}}>We are committed to offer our distributors and end users the best and latest Medical Devices that are innovative and provide patients with comfort, speedy recovery and value for money.

              We believe that customers should not be short changed and should get what they pay for.</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Useful Links</h5>
              <ul>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/About">About Us</Link></li>   
                 <li><Link to="/Products">Products</Link></li>  
                   <li><Link to="/Contact">Contact Us</Link></li>   
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          © 2014 Copyright Text
          
          </div>
        </div>
      </footer>

        </div>
    )
}
