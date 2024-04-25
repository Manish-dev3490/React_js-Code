import { useSelector } from "react-redux"
import { ItemCards } from "./ItemCards";
// I am making the Help page for  changing the page 

export const CartPage=()=>{
    const CartItems=useSelector((store)=>store.cart.item)
    console.log(CartItems);
    return (
        <>
        <div className="w-6/12 m-auto">
            <ItemCards data={CartItems}></ItemCards>
        </div>
        </>
    )
}
