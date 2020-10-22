import React from 'react';
import {Link} from 'react-router-dom';


export default function Nav() {
    return (
      
      <div className="row" style={{}}>
      <div className="col s2" > 
      <Link to="/">
      <img style={{height:"100px",width:"280px",marginTop:"22px"}} className="logoimg" src="./images/orignal.png"  /> </Link>
      </div>
      <div className="col s6" > </div>
      <div className="col s4"  > 

      <div className="row">
      <div  className="col s1">
        <i  style={{marginTop:"17px", marginLeft: "24px"}} class="material-icons">location_on</i>
        </div>
        <div  className="col s11"> 
        <p style={{marginRight:"134px"}}>2 nd floor 61B,Sriram Nagar Colony, Opposite SBI Atm ,Near Chirec International School,Kondapur, Hyderabad, Telangana, INDIA ‐ 500 084.<br/>
        Ph: 70 36 77 0007 | 76 450 99 999 </p>
      </div>
      <div className="row " style={{margin:"0px"}}>
      <div  className="col s1">
      <i  style={{marginLeft:"28px",marginTop:"0px"}} class="material-icons">mail</i>
      </div>
      <div  className="col s11"> 
      <p style={{marginRight:"160px",marginTop:"0px"}}>enquiry@singexmedtech.com</p>
    </div>
    </div>
      </div>

      



      </div>
      
      </div>
      
      
        
      



      

        
    )
}



 
      
