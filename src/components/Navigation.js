import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return <div>
        <Link to="/" className="home" >Home</Link>
        <Link to="/about" className="about">About</Link>
    </div>
}

export default Navigation;
