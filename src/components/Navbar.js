import React from "react";

const Navbar = ({score, highScore}) => {
    return(
        <div className="navbar-box">
            <h1 className="navbar-header">Titanfall 2 Memory Game
            <h2 className="navbar-desc">Click on as many original characters as you can!</h2>
            </h1>
            <nav className="scores">
                <p>Score: {score}</p>
                <p>High Score: {highScore} </p>
            </nav>
        </div>
    )
}

export default Navbar;