import React from "react";
import {createRoot} from "react-dom/client";

import Body from "./Componet/Body";
import Header from "./Componet/Header";










const Applayout=()=>
{
   
   return <div className="App-pg">


    <Header/>
    <Body/>


      </div>

 
}


const Access=createRoot(document.querySelector("#parent"));

Access.render(<Applayout/>);
