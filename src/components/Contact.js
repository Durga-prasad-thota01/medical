import React from 'react'
import './Contact.css';

export default function Contact() {
    return (
        <div>
           <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30447.444331654344!2d78.33892538103811!3d17.46303827201193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c92849a36b%3A0xde0dc034905512fa!2sKondapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1586327231142!5m2!1sen!2sin"
            width={800} height={450}
            frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></p>

      <div className="row">
         <div className="col s4"></div>
             <div className="col s4">  
             
             <h3>Office Addresses</h3>
               <p className="para" > # 2 nd floor 61B, Sriram Nagar Colony, Opposite SBI, 
               Near Chirec International School, Kondapur, Hyderabad, Telangana, INDIA ‐ 500 084.
              </p>
            
                 <p className="para"> Ph: 70 36 77 0007 | 76 450 99 999

                     </p>
            </div>
          <div className="col s4"></div>
       
          </div>
        </div>
    )
}
