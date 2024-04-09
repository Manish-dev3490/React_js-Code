

// i am making resta  card component
export const Restacard = (props) => {


    const {resData} = props;
    const {avgRating, cuisines, cloudinaryImageId, name, sla, costForTwo } = resData;
    const CDN_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";


    return (

        <div className="Resta-card">
                 <img src={CDN_URL+cloudinaryImageId} />
                 <div className="card-body">
                     <h2 className="card-heading">{name}</h2>
                     <p>{costForTwo}</p>
                     <p className="info">Rating   {avgRating} <i className="ri-star-fill"></i> <span>Delivery</span>{sla.deliveryTime} mins</p>
                     <p className="cuisines">{cuisines.join(" , ")}</p>

                 </div>
            </div>

    )
}


