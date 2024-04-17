import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom';

// this is a header file 
const HeaderComponent = () => {
    
    const changeBar=(e)=>{
        
            let activeLink=document.querySelector(".active");
            activeLink.classList.remove("active");
            e.target.classList.add("active");   
    }
    return (
        <>
            <div className="header">
                <h2>Explore <span className='mart'>Mart</span></h2>
                <div className="navigation-bar">
                    <ul>
                        <Link to={"/"}> <li className='active-bar active' onClick={changeBar}>Home</li></Link>
                        <Link to={"/About"}><li className='active-bar ' onClick={changeBar}>About</li></Link>
                        <Link to={"/AllProduct"}><li className='active-bar ' onClick={changeBar}>All Products</li></Link>
                        <Link to={"/Contact"}><li className='active-bar' onClick={changeBar}>Contact</li></Link>

                    </ul>
                </div>

                <div className="search-container">
                    <input type="text"></input>
                    <button className='srch-btn'>Search</button>
                </div>

                <div className="user-profile-info">
                    <div className="user"><i className="ri-user-fill"></i></div>
                    <button className="login-btn">Login</button>
                    <div className="cart-section"><i className="ri-shopping-cart-2-line"></i></div>
                </div>

            </div>
        </>
    )
}

export default HeaderComponent;