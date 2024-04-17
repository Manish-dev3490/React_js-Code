import FetchProductDetail from "./FetchProductDetail";

// In this file i am going to implemenet the functionality of the Product Detail when user will click on product app willl bring user to this page which is product detail page

const ProductDetail=()=>{

    const {FetchedData}=FetchProductDetail();
    console.log(FetchedData);
    const {id,price,rating,discountPercentage,stock,title,description,category,images}=FetchedData;

        return (
            <div className="product-detail-page">
                <img src={images[0]}></img>
                <h2>{description}</h2>
            </div>
        )
    
    }


  

export default ProductDetail;