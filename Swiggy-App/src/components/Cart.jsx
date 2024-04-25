import { useSelector } from "react-redux"
import { ItemCards } from "./ItemCards";
import { useDispatch } from "react-redux";
import { deleteCart } from "../utils/CartSlice";
// I am making the Help page for  changing the page 

export const CartPage=()=>{
    const dispatch=useDispatch();
    const handleClear=()=>{
        dispatch(deleteCart())
    }
    const CartItems=useSelector((store)=>store.cart.item)
    console.log(CartItems);
    return (
        <>
        <div className="w-6/12 m-auto flex flex-col gap-4 items-center my-6 ">
            <button className=" px-3 py-1 bg-black text-white rounded-md" onClick={handleClear}>Clear Cart</button>
            <ItemCards data={CartItems}></ItemCards>
        </div>
        </>
    )
}
