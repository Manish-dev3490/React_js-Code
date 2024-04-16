// making product card insidde this file

const ProductCard=(props)=>{
    const {cardData}=props
    const {brand,category,description,images,price,rating,stock,title}=cardData;
    return (
        <>
        <div className="product-card">
        <img src={images[0]}/>
        <p className="brand-title">{brand}<span>{category}</span></p>
        <h2>{price}</h2>
        <h3>{rating}</h3>
        </div>
        </>
    )
}

export default ProductCard;