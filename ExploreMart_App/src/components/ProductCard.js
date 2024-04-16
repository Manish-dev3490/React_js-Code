// making product card insidde this file

const ProductCard=(props)=>{
    const {cardData}=props
    const {brand,category,description,images,price,rating,stock,title}=cardData;
    return (
        <>
        <div className="product-card">
        <img src={images[0]}/>
        <p className="brand-title">{brand}  {title}</p>
        <p className="tag">{price}</p>
        <p className="tag">Stock  {stock}</p>
        <span className="tag">Category <span>{category.toUpperCase()}</span></span>
        <button className="cart-button">Add to Cart</button>
        </div>
        </>
    )
}

export default ProductCard;