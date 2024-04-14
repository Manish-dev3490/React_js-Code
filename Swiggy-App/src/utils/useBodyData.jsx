import { useState,useEffect } from "react"
import { Api_data } from "./constant";
// In this  file i am making a custom hook for optimizing the body component which is having more than one responibility and not following single responsibility principle


const useBodydata=()=>{
    // llocal state variables
    const [dataList, SetDataList] = useState([]);
    const [FilterList, SetFilterList] = useState([]);

    const Fetchdata = async () => {
        try {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
          const json = await data.json();
          SetDataList(
            json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
          );
          SetFilterList(
            json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
          );
          console.log(json);
        } catch (error) {
          console.error("something error", error);
        }
      };
    
      useEffect(() => {
        Fetchdata();
      }, []);


      return {dataList,FilterList}
}

export  default useBodydata;