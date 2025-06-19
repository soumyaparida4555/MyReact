import ResturantCard from "./ResturantCard";
import listOfRestaurant from "../Utils/MockData";


const Body=()=>
{
return <div className="body">
   <div className="search-bar">
      <input type="search" placeholder="search your food"></input>
      <button type="submit"> search</button>

   </div>
   <div className="resturant-container"> 
    
   {listOfRestaurant.map((resturant)=>
   {
      <ResturantCard key={resturant.id} resdata={resturant}/>
   })};

    
   </div>

 </div>
}

export default Body;