import { Restacard } from "./Restacard";
import { useContext, useEffect, useState } from "react";
import { ShimmerUi } from "./shimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserLoggedData from "../utils/UserContext";
// In body component we have to fetch restaurents card with their live information which we can do through the swiggy orignal production api

export const BodyComponent = () => {
  const [dataList, SetDataList] = useState([]);
  const [InputSearch, SetInputsearch] = useState("");
  const [FilterList, SetFilterList] = useState([]);
  const {loggedinUser,setName}=useContext(UserLoggedData)

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h2>Looks like your internet connection is off</h2>;


  return dataList.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="Hero-section flex items-center justify-center flex-col">
      <div className="top-rated-filter py-6 flex items-center justify-center gap-6">
        <div className=" flex items-center gap-5">
          <input
            type="text"
            value={InputSearch}
            onChange={(e) => {
              SetInputsearch(e.target.value);
            }}
            className=" bg-cyan-200 text-black px-6 py-2 rounded-md"
            placeholder="Enter your dish"
          />
          <button
            className="bg-black text-white px-2 py-2 rounded-md"
            onClick={() => {
              const FilteredList = dataList.filter((check) => {
                return check.info.name
                  .toLowerCase()
                  .includes(InputSearch.toLowerCase());
              });

              SetFilterList(FilteredList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="bg-black text-white py-2 px-4 rounded-md"
          onClick={() => {
            const filterRestarents = dataList.filter((check) => {
              return check.info.avgRating > 4.2;
            });
            SetFilterList(filterRestarents);
          }}
        >
          Top Rated Restaurents
        </button>

        <input
          type="text"
          value={loggedinUser}
          onChange={(e) => {

            setName(e.target.value)
          }}
          className="bg-cyan-200 text-black px-6 py-2 rounded-md"
          placeholder="Enter your name"
        />
      </div>

      <div className="Resta-list flex items-center gap-16 flex-wrap justify-center">
        {FilterList.map((card) => {
          return (
            <Link
              key={card.info.id}
              className=" w-72 h-80 "
              to={"/restaurent/" + card.info.id}
            >
              <Restacard resData={card.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
