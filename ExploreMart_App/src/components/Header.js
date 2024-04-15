import 'remixicon/fonts/remixicon.css'

// this is a header file 
const HeaderComponent=()=>{
    return (
        <>
        <div className="header">
            <h2>Explore <span className='mart'>Mart</span></h2>
            <div className="navigation-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>All Products</li>
                    <li>Help</li>
                    <li>Contact</li>

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