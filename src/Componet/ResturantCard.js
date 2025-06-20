



const ResturantCard=(props)=>
{
   const {resdata}=props;
   
   const {name,cuisines,costForTwo,avgRating}= resdata.data;
   
  
 return <div className="res-card-1">
 
          <img className="img-card-1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b14cd9fc40129fcfb97aa7e621719d07"></img>  
          
      <h3>{name}</h3>     
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
   </div>
 
}

export default ResturantCard;