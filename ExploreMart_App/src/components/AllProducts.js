import useAllProduct from "../utils/useAllProduct"
import ProductCard from "./ProductCard"
// this is a AllProduct page for our application

const AllProduct=()=>{
    const {PopularData}=useAllProduct();
    console.log(PopularData +"inside all products");
    return (
       <div className="all-product-list">
        {
            PopularData.map((check)=>{
                return <ProductCard key={check.id} cardData={check}/>
            })
        }
       </div>
    )
}

export default AllProduct;