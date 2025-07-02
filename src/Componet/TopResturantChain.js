import { Cdnurl } from "../Utils/constaint";
    

export const TopResturantChain=(props)=>
{

    const {chain}=props;
    
    const{cloudinaryImageId,name,cuisines,avgRating,locality}=chain.info;
    

     return(
        <div className="food-chain">
            
        <img className="food-chain-img" src={Cdnurl+cloudinaryImageId}></img>
        
          <div className="chain-text">  
        <h4>{name}</h4>
          <h5 className="chain-text-rat"> {avgRating}<span className="span-text">{chain.info.sla.slaString}</span></h5>

        <h6 className="chain-text-in">{cuisines.join(",")}</h6>
        <h6 className="chin-text-in">{locality}</h6>
        </div>
        </div>
        
    )

}

