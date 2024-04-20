import { CDN_URL } from "../utils/constant";
export const ItemCards = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="flex justify-between border-b  border-gray-300 items-center px-4 ">
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

            <div className="relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt=""
                className=" w-32  h-28 rounded-md"
              />
            
            </div>
          </div>
        );
      })}
    </div>
  );
};
