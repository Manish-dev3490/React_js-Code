import FetchProductDetail from "./FetchProductDetail";

// In this file i am going to implemenet the functionality of the Product Detail when user will click on product app willl bring user to this page which is product detail page

const ProductDetail = () => {

    const { FetchedData } = FetchProductDetail();
    console.log(FetchedData);
    const { id, price, rating, brand, discountPercentage, stock, title, description, category, thumbnail } = FetchedData;
    return (
        <div className="product-detail-page">
            <img src={thumbnail}></img>


            <div className="product-info">
                <p className="brand-title">{brand}  {title}</p>
                <p className="tag">Price<span>{price}</span> </p>
                <p className="tag">Id of Product<span>{id}</span> </p>

                <p className="tag">Stock<span> {stock}</span></p>
                <p className="tag">Rating<span>{rating}</span></p>
                <p className="tag">Discount<span>{discountPercentage}</span></p>
                <p className="tag">Title<span> {title}</span></p>
                
                <span className="tag">Category <span>{category}</span></span>
                <h2>{description}</h2>

                <button className="cart-button">Add to Cart</button>

            </div>

        </div>
    )

}




export default ProductDetail;