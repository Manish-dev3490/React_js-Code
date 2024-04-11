
// In this file  i  am making a product card component which will be reuse in every product list

 export const ProductCard = (props) => {

  const {cardData}=props;
  const {category,description,image,price,title,rating}=cardData;

    return (
        <div className="product-card">
            <img src={image} />
            <p>{category} </p>
                <p>Price Rs {Math.floor(price)} </p>
                <button className="Add-to-cart-btn">Add to cart</button>
        </div>
    )
}