import { Restacard } from "./Restacard";
import { useEffect, useState } from "react";
import { ShimmerUi } from "./shimmerUI";
// In body component we have to fetch restaurents card with their live information which we can do through the swiggy orignal production api

export const BodyComponent = () => {
    const [dataList, SetDataList] = useState([]);
    const [InputSearch, SetInputsearch] = useState("");
    const [FilterList, SetFilterList] = useState([]);

    const Fetchdata = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();
            SetDataList(
                json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
            );
            SetFilterList(
                json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
            );
        } catch (error) {
            console.error("something error", error);
        }
    };


    useEffect(() => {
        Fetchdata();
    }, []);

  

    return  dataList.length === 0 ? <ShimmerUi/>:(

        <div className="Hero-section">
            <div className="top-rated-filter">
                <div className="search-box">
                    <input
                        type="text"
                        value={InputSearch}
                        onChange={(e) => {
                            SetInputsearch(e.target.value);
                        }}
                    />
                    <button className="search-btn" onClick={() => {
                        const FilteredList = dataList.filter((check) => {
                            return check.info.name.toLowerCase().includes(InputSearch.toLowerCase());
                        })

                        SetFilterList(FilteredList);
                    }}>
                        Search
                    </button>
                </div>


                <button
                    className="top-restaurents-card"
                    onClick={() => {
                        const filterRestarents = dataList.filter((check) => {
                            return check.info.avgRating > 4.2;
                        });
                        SetFilterList(filterRestarents);
                    }}
                >
                    Top Rated Restaurents
                </button>
            </div>

            <div className="Resta-list">
                {

                    FilterList.map((card, index) => {
                        return (

                            <Restacard key={index} resData={card.info} />

                        );
                    })


                }
            </div>
        </div>
    );
};
