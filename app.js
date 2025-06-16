import React from "react";
import {createRoot} from "react-dom/client";

/*
*Header
-logo
-nav items
*Body
-search bar
-resturant container
-resturant card
*Footer
-Copyright
-links
-Address
-Contact

*/

const Header=()=>
(
   <div className="header">
      <div className="logo-item">
       <img className="logo" src="html\MyReact\logo.png" alt="logo"></img>
      </div>
      <div className="Nav-item">
       <ul className="items">
       <li>Home</li>
       <li>cart</li>
       <li>Contact</li>
       <li>About'us</li>
       </ul>

      </div>

   </div>
)





const App=()=>(

    <div className="Applayout">
    <Header/>
   </div>
   
)


const add=createRoot(document.querySelector("#chin"));

add.render(<App/>);