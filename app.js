import React from "react";
import {createRoot} from "react-dom/client";


const Heading2=()=>(

        <h2>chintu</h2>
    
)

 const Heading=()=>(
    <div id="parent">
        <Heading2/>
  <h1 id="head">Soumya</h1>
  </div>
 )


const add=createRoot(document.querySelector("#chin"));

add.render(<Heading/>);