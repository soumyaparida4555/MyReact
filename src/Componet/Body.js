import ResturantCard from "./ResturantCard";
import {useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import FoodBanner from "./FoodBanner";
import { TopResturantChain } from "./TopResturantChain";
import { Link } from "react-router-dom";





const Body=()=>
{

   const [foodBanner,setFoodBanner]=useState([]);
   const [topResChain,settopResChain]=useState([]);
   
   const [listResturant,setlistResturant]=useState([]);
   const [filterdResturant,setfilterdResturant]=useState([]);
   const [searchBtn,setsearchBtn]=useState("");




    useEffect(()=>
   {
      fetchData();

   },[])

  const fetchData= async()=>{


    
       const get= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.3243113&lng=76.5863882&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
       const json= await get.json();

       
      
      
       setFoodBanner(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        settopResChain(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         
         setlistResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);          
         setfilterdResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);



    }
  
      
      
      
   

       

    return listResturant.length===0?<Shimmer/>:( 
    <div className="body">
      
      <div className="banner-container">
       <h2>What's on your mind?</h2>
        <div className="food-banner" >
       {foodBanner.map((bann)=>
       {
         return( <FoodBanner key={bann.id} food={bann} />)
       })}
        </div>
      </div>
       
       <hr className="next-line"></hr>
      <div className="chain-main">
      <h2>Top restaurant chains in Mysore</h2>
     <div className="res-chain-container">
      {topResChain.map((res)=>
      {
        return <Link className="res-chain-link" key={res.info.id} to={"/restaruant/"+res.info.id}><TopResturantChain   chain={res}/></Link> 
      })}
     </div>
     
     <div className="online-container">
       <h2>Restaurants with online food delivery in Mysore</h2>
     <div className="container-online">
        
     </div>

     </div>

      </div>
      <hr className="next-line"></hr>
      <div className="search-bar">
      <div className="search-container">
       <input className="text-bar" type="tex" placeholder="Enter your resturant" value={searchBtn} onChange={(e)=>
         {
            

            setsearchBtn(e.target.value);
         }
       }></input>
       <button type="submit" onClick={()=>
         {
            const rtRest=listResturant.filter((resturant)=>
            {
              return  resturant.info.name.toLowerCase().includes(searchBtn.toLowerCase());
            })
            setfilterdResturant(rtRest);
         }
       }>Search</button>
      </div>
       <button type="submit" onClick={()=>
         {
            const topRes= listResturant.filter((rest)=>
            {
               return rest.info.avgRating>4;
               
            })

            setfilterdResturant(topRes);
         }
      } >Top Rated Resturant</button>

   </div>
   <div className="resturant-container"> 
     {filterdResturant.map((restro)=>(
      <Link to={"/restaruant/"+restro.info.id} className="resturant-card-link" key={restro.info.id}> <ResturantCard  resdata={restro}/></Link>
     )
   )}
    
   </div>

 </div>
 )

}

export default Body;