import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserLoggedData from "../utils/UserContext";

// i am making resta  card component
export const Restacard = (props) => {


    // const {loggedinUser}=useContext(UserLoggedData)
    const {resData} = props;
    console.log(resData);
    const {avgRating, cuisines, cloudinaryImageId, name, sla, costForTwo } = resData;
    const {loggedinUser}=useContext(UserLoggedData)

    return (

        <div className=" bg-sky-100 rounded-lg hover:border-x-4">
                 <img src={CDN_URL+cloudinaryImageId} className=" w-72 h-60 rounded-md"/>
                 <div className=" w-full">
                     <h2 className="card-heading">{name}</h2>
                     <p>{costForTwo}</p>
                     <p className="info">Rating   {avgRating} <i className="ri-star-fill"></i> <span>Delivery</span>{sla.deliveryTime} mins</p>
                     <p className=" overflow-hidden text-ellipsis whitespace-nowrap">{cuisines.join(" , ")}</p>
                     <p>User : {loggedinUser}</p>

                 </div>
            </div>

    )
}


