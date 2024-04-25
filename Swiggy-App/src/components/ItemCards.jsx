import { CDN_URL } from "../utils/constant";
import {useDispatch} from "react-redux";
import { addItem } from "../utils/CartSlice";
export const ItemCards = ({ data }) => {
  
const dispatch=useDispatch();
  const handleDispatch=()=>{
    dispatch(addItem("pizza-momos"));
  }
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="flex justify-between border-b  border-gray-300 items-center px-4 gap-6 ">
            <div className="flex flex-col  w-full py-6 items-start gap-2">
              <div>{item.card.info.name} </div>
              <span>₹ {item.card.info.price / 100}</span>
              <p className="  text-xs ">
                {item.card.info.description
                  ? item.card.info.description
                  : "No description in this "}
              </p>
              <span>
                {item.card.info.itemAttribute.vegClassifier
                  ? "🟢 BestSellers"
                  : "🔴 Bestsellers"}
              </span>
            </div>

            <div className="">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt=""
                className=" w-32  h-28 rounded-md relative"
              />
            
            </div>
            <button className="bg-black text-white px-4 py-0" onClick={handleDispatch}>Add ➕</button>
          </div>
        );
      })}
    </div>
  );
};
