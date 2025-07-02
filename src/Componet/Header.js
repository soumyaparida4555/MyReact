

import { useState } from "react";
import { Logo } from "../Utils/constaint";

const Header=()=>
{

   const [btnHeader,setbtnHeader]=useState("Login");
   

 return(  <div className="container">

 
  <div className="img-logo">

   <img className="logo" src={Logo}></img>

   </div>
   <div className="navbar-item">
      <ul className="item">
       <li>Home</li> 
       <li>Contact</li> 
       <li>About'us</li> 
       <li>Cart</li> 
      
       <button className="header-btn" onClick={()=>
         {
          return  btnHeader.toLowerCase()=="login"?setbtnHeader("Logout"):setbtnHeader("Login");
         }
       }>{btnHeader}</button>
      

      </ul>
     
      </div>

 </div>
 )
}

export default Header;