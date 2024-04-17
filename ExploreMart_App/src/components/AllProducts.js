import useAllProduct from "../utils/useAllProduct"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom";
// this is a AllProduct page for our application

const AllProduct=()=>{
    const {PopularData}=useAllProduct();
    console.log(PopularData +"inside all products");
    return (
       <div className="all-product-list">
        {
            PopularData.map((check)=>{
                return <Link to={"/ProductDetail"+check.id} key={check.id}> <ProductCard  cardData={check}/></Link>
            })
        }
       </div>
    )
}

export default AllProduct;