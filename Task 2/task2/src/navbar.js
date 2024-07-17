    import React from 'react';
    import './Navbar.css';


    function Navbar() {
    return (
        <div>
        <nav className="navbar">
            <div className="navbar-left">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            </div>
            <div className="navbar-center">
            <span>Landing</span>
            </div>
            <div className="navbar-right">
            <button className="buy-now">Buy Now</button>
            </div>
        </nav>
        <div>

        </div>
        </div>
    );
    }

    export default Navbar;
