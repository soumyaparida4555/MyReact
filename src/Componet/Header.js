

import { useEffect, useState } from "react";
import { Logo } from "../Utils/constaint";
import { Link } from "react-router-dom";




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
      <Link className="header-link" to={"/contact"}> <li className="link-header-1">Food Corporate</li></Link>
      <Link className="header-link" to={"/contact"}> <li className="link-header-1">Offers</li ></Link>
       <li className="link-header-1">Help</li> 
      <li className="link-header-1">Sign In</li>
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