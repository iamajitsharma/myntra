import React from "react";
import "./Navbar.css";


const Navbar = () => {
    return (
        <header className="containerHeader">
            <nav className="">
                <div className="left">
                <img src="/myntra.svg" alt="image" className="myntra-logo"/>
                    <ul className="">
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Home Living</li>
                        <li>Beauty</li>
                        <li>Studio</li>
                    </ul>
                </div>
                <div className="right">
                <input className="search desktop-searchBar" type="text" placeholder="Search for products, brands and more" value=""/>
                    <div class="rightBox">
                        <div class="profile">
                            Profile
                        </div>
                        <div class="wishlist">
                        
                            WishList
                            </div>
                        <div class="cart-holder">
                      
                            Bag
                            </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar