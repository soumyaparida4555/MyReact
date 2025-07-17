import { useEffect,useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import { useParams } from "react-router";



import Shimmer from "./Shimmer";
import { menu_url } from "../Utils/constaint";
import { rest_menu_offer_logo } from "../Utils/constaint";





const RestaruantMenu=()=>
{


  const [menuRestaruant,setmenuRestaurant]=useState([]);
  
      
 
const {resid}=useParams();


    useEffect(()=>
    {
      restaruantMenu();

    },[]);

   const restaruantMenu=async ()=>
   {
      const ftch=await fetch(menu_url+resid);

      const json = await ftch.json();

    console.log(json);

     setmenuRestaurant(json?.data);
      
   };

if(menuRestaruant.length===0)
{
    return <Shimmer/>
 } 

  const {name,avgRatingString,totalRatingsString,costForTwoMessage,cuisines,areaName}=menuRestaruant?.cards[2]?.card?.card?.info ;
  const {slaString}=menuRestaruant?.cards[2]?.card?.card?.info?.sla;
  const {offers} =menuRestaruant?.cards[3].card?.card?.gridElements?.infoWithStyle;
          


return(
<div className="restaraunt-menu">
 
 <h1>{name}</h1>
<div className="menu-header-container">
  
  <h5>{avgRatingString}({totalRatingsString}) {costForTwoMessage}  </h5>
 <h5>{cuisines.join()}</h5>
 <h5>Outlet  {areaName}</h5>
 <h5>{slaString}</h5>
  
  
</div>

<h3>Deals For you</h3>
<div className="offer-main-container">
 
{offers.map((res)=>{
    return (   <div className="offer-container"  key={res?.info?.offerIds}>
      <div className="offer-menu">
     <img className="offer-logo" src={rest_menu_offer_logo+res?.info?.offerLogo}></img>
     <h4>{res?.info?.header} </h4>
     </div>
     <div className="offer-info">
      <h6>{res?.info?.description}</h6>
      <h6>{res?.info?.couponCode}</h6>
       </div>
    </div>
    
    )
    
}



)


}

</div>


 





</div>
)


}


export default RestaruantMenu;