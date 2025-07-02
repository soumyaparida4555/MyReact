import { banner } from "../Utils/constaint";

 const FoodBanner=(props)=>
{

const {food}=props;
const {imageId}=food;



return( 
         
        
       <div className="banner-food">                
        <img className="banner-img" src={banner+imageId}></img>
       </div>

)





}


export default FoodBanner;