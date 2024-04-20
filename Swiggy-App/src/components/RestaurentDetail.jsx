import { useParams } from "react-router-dom";
import useRestaMenuData from "../utils/useRestaMenuData";
import { RestaurentCategory } from "./RestaurentCategory";



export const RestaurentDetailPage = () => {

    const { resId } = useParams();
    const { RestaMenuData, categoryData } = useRestaMenuData(resId);
    const categoryList = categoryData.filter((check) => {
        return check?.card?.card?.itemCards;
    });
    const { cuisines, name } = RestaMenuData;
    const cuisinesString = Array.isArray(cuisines) ? cuisines.join(" ") : "";


   
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
                   <RestaurentCategory key={index} data={category}/>
                )
            })}
        </div>
    );
};
