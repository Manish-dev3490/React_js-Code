import { Restacard } from "./Restacard";
import useBodydata from "../utils/useBodyData";
import { useEffect, useState } from "react";
import { ShimmerUi } from "./shimmerUI";
import { Link } from "react-router-dom";
// In body component we have to fetch restaurents card with their live information which we can do through the swiggy orignal production api

export const BodyComponent = () => {
  
  const [InputSearch, SetInputsearch] = useState("");


  const {dataList,FilterList,SetFilterList}=useBodydata();
 


  return dataList.length === 0 ? (
    <ShimmerUi />
  ) : (
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
          <button
            className="search-btn"
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
        {FilterList.map((card) => {
          return (
            <Link to={"/restaurent/" + card.info.id}>
              <Restacard resData={card.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
