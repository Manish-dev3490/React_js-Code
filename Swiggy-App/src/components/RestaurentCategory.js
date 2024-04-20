import { ItemCards } from "./ItemCards";
import { useState } from "react";

export const RestaurentCategory = ({ data }) => {
    const [ShowItems, setShowItems] = useState(false)
    console.log(data);

    function handleClick() {
        return setShowItems(!ShowItems)
    }

    return (
        <div className="w-6/12 bg-gray-100 my-4 py-4 ">
            <div className="px-4 flex justify-between items-center cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-md">
                    {data.card.card.title} (
                    {data.card.card.itemCards.length})
                </span>

                <span>⬇️</span>
            </div>

            {ShowItems && <ItemCards data={data.card.card.itemCards} />}

        </div>
    )
} 