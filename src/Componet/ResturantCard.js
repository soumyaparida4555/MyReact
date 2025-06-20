
import {Cdnurl} from "../Utils/constaint";


const ResturantCard=(props)=>
{
   const {resdata}=props;
   
   const {name,cuisines,costForTwo,avgRating}= resdata.data;
   
  
 return <div className="res-card-1">
 
          <img className="img-card-1" src={Cdnurl}></img>  
          
      <h3>{name}</h3>     
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
   </div>
 
}

export default ResturantCard;