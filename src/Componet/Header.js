

import { Logo } from "../Utils/constaint";

const Header=()=>
(

   <div className="container">

 
  <div className="img-logo">

   <img className="logo" src={Logo}></img>

   </div>
   <div className="navbar-item">
      <ul className="item">
       <li>Home</li> 
       <li>Contact</li> 
       <li>About'us</li> 
       <li>Cart</li> 


      </ul>
     
      </div>

 </div>
 
)

export default Header;