import { useParams } from "react-router-dom";
import useRestaMenuData from "../utils/useRestaMenuData";

// In this component i will make a detail page of restaurents by  there id and this  concept is known as dynamically routing a diffrent url components will inside my url
export const RestaurentDetailPage = () => {
  const { resId } = useParams();

  const { RestaMenuData, categoryData } = useRestaMenuData(resId);
  const categoryList = categoryData.filter((check) => {
    return check?.card?.card?.itemCards;
  });
  console.log(categoryList);
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

      {
        categoryList.map((category=>{

            const {title,itemCards}=category.card.card
            return(
            <div>
                <div><span>{title}</span>({itemCards.length})</div>
            </div>
            )
        }))
      }

    </div>
  );
}
