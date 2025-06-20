import ResturantCard from "./ResturantCard";

import listRes from "../Utils/MockData";






const Body=()=>
(
 <div className="body">
   <div className="search-bar">
      
      <button type="submit" >Top Rated Resturant</button>

   </div>
   <div className="resturant-container"> 
    
   {listRes.map((resturant)=>
   (
      <ResturantCard key={resturant.id} resdata={resturant}/>
   ))};

    
   </div>

 </div>
)

export default Body;