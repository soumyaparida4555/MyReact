import React from "react";
import {createRoot} from "react-dom/client";

import Body from "./Componet/Body";
import Header from "./Componet/Header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./Componet/Error";
import FoodCorporate from "./Componet/FoodCorporate";
import Contact from "./Componet/Contact";
import RestaruantMenu from "./Componet/RestarurantMenu";





const Applayout=()=>
{
   
   return( <div>
   <Header/>
     <Body/>
     
       </div>

   )
}

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Applayout/>,
  errorElement:<Error/>,
},

{
  path:"/contact",
  element:<Contact/>,
},
{
  path:"/corporate",
  element:<FoodCorporate/>,
},
{
 path:"/restaruant/:resid",
 element:<RestaruantMenu/>,
 errorElement:<Error/>
}





])




const Access=createRoot(document.querySelector("#parent"));

Access.render(<RouterProvider router={appRouter}/>);
