import React, { useState } from "react";
import {
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";

import Logo from "../../assets/logo.png";
import { text } from "../../constants";
import "./Navbar.scss";
import SocialLinks from "./SocialLinks/SocialLinks";

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const handleClick = () => setMobileNav(!mobileNav);

    return (
        <div className="app__navbar">
            <div className="app__navbar-logo">
                <img src={Logo} alt="Logo" />
            </div>

            {/* menu */}
            <ul className="app__navbar-links">
                {text.navItems.map((navLink, index) => (
                    <li key={"nav-link-" + index + 1}>
                        <Link to={navLink.linkTo} smooth={true} duration={500}>
                            {navLink.linkText}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="app__navbar-minimized">
                {!mobileNav ? <FaBars size={25} /> : <FaTimes size={25} />}
            </div>

            {/* Mobile menu */}
            <ul className={!mobileNav ? "hidden" : "app__navbar-mobile"}>
                {text.navItems.map((navLink, index) => (
                    <li
                        className="app__navbar-mobile-item"
                        key={"nav-mobile-link-" + index + 1}
                    >
                        <Link
                            onClick={handleClick}
                            to={navLink.linkTo}
                            smooth={true}
                            duration={500}
                        >
                            {navLink.linkText}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Social icons */}
            <SocialLinks />
        </div>
    );
};

export default Navbar;
