import { useEffect} from "react"
import { useState } from "react";
import { menu_data } from "../utils/constant";
import { useParams } from "react-router-dom";
// In this component i will make a detail page of restaurents by  there id and this  concept is known as dynamically routing a diffrent url components will inside my url

export const RestaurentDetailPage = () => {

    const [RestaMenuData, setRestaMenuData] = useState("");

    const {resId}=useParams();


    const fetchData = async () => {
        const response = await fetch(menu_data+resId);

        const json = await response.json();
        setRestaMenuData(json.data?.cards[2].card.card.info);
    }
    useEffect(() => {
        fetchData();
    }, [])

    console.log(RestaMenuData);
    const {city,id,labels,totalRatingsString,costForTwoMessage,avgRating,cloudinaryImageId,name,feeDetails}=RestaMenuData;

    return (
        <div  className="Restaurent-detail-page">
            <div className="intro-card">
                <div className="first-section">
                <p>Home / {city} / {name}</p>
                <h2>{name}</h2>
                </div>

                <div className="information-menu">
                    <p className="para-info"><i className="ri-star-fill"></i> <h2>{avgRating} ({totalRatingsString}) . {costForTwoMessage}</h2></p>
                    <span>{}</span>
                    <h4>Outlet <p>{city}</p></h4>
                    <h4>{} mins</h4>
                    <div><i class="ri-riding-line"></i> <span>{} | $31 Delivery fee will apply</span></div>
                    <div>Total {}</div>
                </div>
            </div>
        </div>
    )
}