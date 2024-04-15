import { Hero_image } from "../utils/constant"
import 'remixicon/fonts/remixicon.css'
import usePopularProduct from "../utils/usePopularProduct"


// In this file i will make a hero section of the application

const HeroSection=()=>{
    const {PopularData,setPopulardata}=usePopularProduct();
    console.log(PopularData);

    return (
        <>
        <div className="hero-section">
            <img src={Hero_image}></img>

            <div className="info-boxes">
                <button> <i className="ri-truck-fill"></i> Free Shipping</button>
                <button> <i className="ri-tv-2-fill"></i> Authentic Products</button>
                <button> <i className="ri-truck-fill"></i> Easy Return</button>
                <button> <i className="ri-bank-card-fill"></i> Secure Payment</button>

            </div>

            <h2>Popular <span>Products</span></h2>

            <div className="product-list">
           
            </div>
        </div>
        </>
    )
}

export default HeroSection;