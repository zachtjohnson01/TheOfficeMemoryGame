import React from "react";
import "./navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => (
    <nav className="navbar">
        <ul className="nav navbar-nav">
            <li className="brand">Clicky Game</li>
            <li className="">Click an image to begin!</li>
            <li>Score: 0 | Top Score: 0</li>
        </ul>
    </nav>
);

export default Navbar;
