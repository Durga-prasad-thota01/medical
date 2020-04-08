import React from 'react'
import './Products.css';

export default function Products() {


    return (
        <div>
           <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
              
                <div className="row  prmar" >
            <div className="col s4">
            <img  className="pro" src ="./images/cannulaa.png"/>
            <p style={{fontWeight:"500"}}>Neotech RAM Cannula</p>
           </div>
           <div className="col s4">
           <img  className="pro" src ="./images/glass.png"/>
           <p style={{fontWeight:"500"}}>NeoShades with Tabs</p>

           </div>
           <div className="col s4">
           <img className="pro" src ="./images/acee.png"/>
           <p style={{fontWeight:"500"}}>Ace Connector</p>
           </div>
           

           <div className="row " style={{marginTop:"10px"}}>
            <div className="col s4">
            <img  className="pro"src ="./images/armour.png"/>
            <p style={{fontWeight:"500"}}>Neotech RAM Cannula</p>

           </div>
           <div className="col s4">
           <img  className="pro"src ="./images/fdl.png"/>
           <p style={{fontWeight:"500"}}>FDI Walking Stick</p>

           </div>
           <div className="col s4">
           <img  className="pro" src ="./images/gastictube.png"/>
           <p style={{fontWeight:"500"}}>Nasogastric Tube</p>

           </div>
           </div>
           
           </div>
           
           
           
           </div>
           <div className="col s1"></div>
           </div>
        </div>
    )
}
