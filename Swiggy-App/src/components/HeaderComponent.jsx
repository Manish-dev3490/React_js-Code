// I am creating Header  Component for my website  component is anything you can see in application is a component functional based component is just normal javascript function which rreturn the peice of jsx code

const HeaderComponent=()=>{
    return (
        <div className="Header">
            <div>Food Paradise</div>
            <div className="search-box">
                <input type="text" />
                <button className="search-btn">Search</button>
            </div>
            <div className="navigation-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    )
}