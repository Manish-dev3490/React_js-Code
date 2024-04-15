// this is a header file 
const HeaderComponent=()=>{
    return (
        <>
        <div className="header">
            <h2>Explore <span>Mart</span></h2>
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
                <button>Search</button>
            </div>

        <div className="user-profile-info">
            <div className="user"></div>
            <div className="login-section"></div>
            <div className="cart-section"></div>
        </div>

        </div>
        </>
    )
}

export default HeaderComponent;