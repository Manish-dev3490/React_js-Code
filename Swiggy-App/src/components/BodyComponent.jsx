import { Restacard } from "./Restacard";
import { useEffect, useState } from "react";
// In body component we have to fetch restaurents card with their live information which we can do through the swiggy orignal production api

export const BodyComponent = () => {
    const [dataList, SetDataList] = useState([]);

    const Fetchdata = async () => {
        try {
            const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const json=await data.json();
            SetDataList(
                json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
            );
            // console.log(dataList);
            console.log(dataList);
        } catch (error) {
            console.error("something error", error);
        }
    };

    useEffect(() => {
        Fetchdata();
    }, []);

    return (
        <div className="Hero-section">
            <div className="Resta-list">
            {
                dataList.map( (card,index)=>{return <Restacard key={index}  resData={card}/>  })
            }
            </div>
        </div>
    );
};
