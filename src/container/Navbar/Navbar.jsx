import React, { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

import Logo from "../../assets/logo.png";
import { text } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

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
                {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? "hidden" : "app__navbar-mobile"}>
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
            <div className="app__navbar-social-menu">
                <ul>
                    <li className="app__navbar-social-item bg-blue-600">
                        <a
                            className="app__navbar-social-item-link"
                            href="https://www.linkedin.com/"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="app__navbar-social-item bg-[#333333]">
                        <a
                            className="app__navbar-social-item-link"
                            href="https://www.github.com/"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="app__navbar-social-item bg-[#db2777]">
                        <a
                            className="app__navbar-social-item-link"
                            href="https://www.google.com/gmail/about/"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="app__navbar-social-item bg-[#565f69]">
                        <a className="app__navbar-social-item-link" href="google.com">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
