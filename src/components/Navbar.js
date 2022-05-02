import React from "react";

const Navbar = () => {
    return(
        <div className="navbar-box">
            <h1 className="navbar-header">Titanfall 2 Memory Game
            <h2 className="navbar-desc">Click on as many original characters as you can!</h2>
            </h1>
            <nav className="scores">
                <p>Score:</p>
                <p>High Score: </p>
            </nav>
        </div>
    )
}

export default Navbar;