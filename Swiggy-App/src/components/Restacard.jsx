import { CDN_URL } from "../utils/constant";

// i am making resta  card component
export const Restacard = (props) => {


    const {resData} = props;
    const {avgRating, cuisines, cloudinaryImageId, name, sla, costForTwo } = resData;


    return (

        <div className=" bg-sky-100 rounded-lg hover:border-x-4">
                 <img src={CDN_URL+cloudinaryImageId} className=" w-72 h-60 rounded-md"/>
                 <div className=" w-full">
                     <h2 className="card-heading">{name}</h2>
                     <p>{costForTwo}</p>
                     <p className="info">Rating   {avgRating} <i className="ri-star-fill"></i> <span>Delivery</span>{sla.deliveryTime} mins</p>
                     <p className=" overflow-hidden text-ellipsis whitespace-nowrap">{cuisines.join(" , ")}</p>

                 </div>
            </div>

    )
}


