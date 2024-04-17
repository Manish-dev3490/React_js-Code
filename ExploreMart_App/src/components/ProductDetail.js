import FetchProductDetail from "./FetchDetail"
// In this file i am going to implemenet the functionality of the Product Detail when user will click on product app willl bring user to this page which is product detail page

const ProductDetail=()=>{

    const {FetchedData}=FetchProductDetail();

    return (
        <div className="product-detail-page">
            <img src={""}></img>
            <h2></h2>
        </div>
    )
}

export default ProductDetail;