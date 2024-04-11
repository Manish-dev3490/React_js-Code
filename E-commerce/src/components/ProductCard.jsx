import { FetchDataFromApi } from "./FetchDataApi"
import { useEffect } from "react"

// In this file  i  am making a product card component which will be reuse in every product list

 export const ProductCard = () => {

    useEffect(()=>{
        FetchDataFromApi();
    },[]);


    return (
        <div className="product-card">
            <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/m/d/p/28-lds-1b-blst-non-stretch-holy-chic-original-imagr6vk3hx7zhpb.jpeg?q=20&crop=false" />
            <p>BIVIEM Flared Women Dark Blue Jeans - Buy BIVIEM Flared Women Dark Blue Jeans Online at Best Prices in India | </p>
                <p>Price 800 </p>
                <button className="Add-to-cart-btn">Add to cart</button>
        </div>
    )
}