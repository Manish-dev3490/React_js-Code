import 'remixicon/fonts/remixicon.css'
// In this i am going to ccreate Header component

 export const HeaderComponent=()=>{
    return (
        <header className="Header">
            <div className="logo-section">
                <h3>Apna <span>Bazaar</span></h3>
            </div>

            <div className="navigation-section">
                <ul>
                    <li>Home</li>
                    <li>All Products</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Help</li>
                </ul>
            </div>

            <div className="login-cart-darkmode">
                <div className="light-darkmode">
                <i className="ri-sun-fill"></i>
                <i className="ri-moon-fill dark-mode" ></i>
                </div>
                <button className="login-logout">Login</button>
                <div className="cart"><i className="ri-shopping-cart-line"></i></div>
            </div>
        </header>
    )
}