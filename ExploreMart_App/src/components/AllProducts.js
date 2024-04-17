import useAllProduct from "../utils/useAllProduct"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom";
import FetchCategoryList from "./FetchCategories";

// this is a AllProduct page for our application
const AllProduct = () => {

    const { PopularData } = useAllProduct();
    const {Fetchcategory}=FetchCategoryList();
    console.log(Fetchcategory);

    return (
        <>
            <div>
                <div className="filter-by-category">
                    <select>
                        <option></option>
                    </select>
                </div>

                {/* Search Container */}
                <div className="search-container">
                    <input type="text"></input>
                    <button className='srch-btn'>Search</button>
                </div>
            </div>

            <div className="all-product-list">
                {
                    PopularData.map((check) => {
                        return <Link to={"/ProductDetail/" + check.id} key={check.id}> <ProductCard cardData={check} /></Link>
                    })
                }
            </div>
        </>
    )
}

export default AllProduct;