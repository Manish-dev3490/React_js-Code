import { useParams } from "react-router-dom";
import useRestaMenuData from "../utils/useRestaMenuData";
import { ItemCards } from "./ItemCards";
import { useState } from "react";



export const RestaurentDetailPage = () => {

    const { resId } = useParams();
    const { RestaMenuData, categoryData } = useRestaMenuData(resId);
    const [ShowItems, setShowItems] = useState(false)
    const categoryList = categoryData.filter((check) => {
        return check?.card?.card?.itemCards;
    });
    const { cuisines, name } = RestaMenuData;
    const cuisinesString = Array.isArray(cuisines) ? cuisines.join(" ") : "";


    function handleClick(){
        return setShowItems(!ShowItems)
    }

    return (
        <div className="flex flex-col items-center justify-center py-6">
            <div className>
                <div className="information-menu flex flex-col items-center gap-2">
                    <h2 className="font-bold  text-2xl">{name}</h2>
                    <p className="font-semibold  text-lg">{cuisinesString}</p>
                </div>
            </div>

            {categoryList.map((category, index) => {
                return (
                    <div key={index} className="w-6/12 bg-gray-100 my-4 py-4 ">
                        <div className="px-4 flex justify-between items-center cursor-pointer" onClick={handleClick}>
                            <span className="font-bold text-md">
                                {category.card.card.title} (
                                {category.card.card.itemCards.length})
                            </span>

                            <span>⬇️</span>
                        </div>

                        {ShowItems && <ItemCards data={category.card.card.itemCards} />}

                    </div>
                );
            })}
        </div>
    );
};
