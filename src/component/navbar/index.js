import React, { useState } from "react";
import { NavbarSection } from "./style";

import navlogo from "../../assets/image/navlogo.png";
import { useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";

function Navbar() {
    const navigate = useNavigate();

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <NavbarSection>
            <nav className="navbar">
                <div className="container">
                    <img className="nav-Logo" src={navlogo} alt="" onClick={() => navigate("/")} />
                    <div className={`nav-elements  ${showNavbar && "active"}`}>
                        <div className="navLinks">
                            <span
                                className="NavLink"
                            // onClick={() => navigate("/how-it-work")}
                            >
                                Home
                            </span>
                            <span className="NavLink" onClick={() => navigate("/blog")}>About</span>
                            <span className="NavLink" onClick={() => navigate("/testimonials")}>Features</span>
                            <span className="NavLink" onClick={() => navigate("/about")}>Testimonials </span>
                            <span className="NavLink" onClick={() => navigate("/contact")}>Community </span>
                            <span className="NavLink" >Privacy Policy </span>
                            <button className="Quote-Button" onClick={() => navigate("/quote")} >Join Now</button>
                        </div>


                    </div>

                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <Hamburger />
                    </div>
                </div>
            </nav>
        </NavbarSection>
    );
}

export default Navbar;
