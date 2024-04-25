import { ItemCards } from "./ItemCards";

export const RestaurentCategory = ({ data, expandItems, setexpandItems, index }) => {

    function handleClick() {

        setexpandItems()


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

            {expandItems ? <ItemCards data={data.card.card.itemCards} /> : false}

        </div>
    )
} 