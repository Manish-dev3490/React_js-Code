// making product card insidde this file

const ProductCard = (props) => {
    const { cardData } = props
    const { brand, category, description, images, price, rating, stock, title } = cardData;
    return (
        <>
            <div className="product-card">
                <img src={images[0]} />
                <p className="brand-title">{brand}  {title}</p>
                <p className="tag">Price<span>{price}</span> </p>
                <p className="tag">Stock<span> {stock}</span></p>
                <span className="tag">Category <span>{category.toUpperCase()}</span></span>
                <p className="desc">{description}</p>

            </div>
        </>
    )
}

export default ProductCard;