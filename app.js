import React from "react";
import {createRoot} from "react-dom/client";


const Heading3=function()    //it iz basically a normal function through we create react componet usin jsx
{
   return <h3> Raju</h3>
        
   
}

const Heading2=()=>(
     
        <h2>chintu</h2>
    
)


const Number=10000;
 const Heading=()=>(
    <div id="parent">
      
        
  <h1 id="head"> {Number}Soumya</h1>
   <Heading2/>
   {Heading3()}    
   <Heading3/>
   <Heading3></Heading3>
                          
  </div>
 )



const add=createRoot(document.querySelector("#chin"));

add.render(<Heading></Heading>);