import React, {useState} from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import { text } from '../../constants'
import './Navbar.scss';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={Logo} alt='Logo Image'/>
            </div>

            {/* menu */}
            <ul className='app__navbar-links'>
                {text.navItems.map((navLink, index) =>
                    <li key={'nav-link-' + index+1}>
                        <Link
                            to={navLink.linkTo}
                            smooth={true}
                            duration={500}
                        >
                            {navLink.linkText}
                        </Link>
                    </li>
                )}
                {/*<li>*/}
                {/*    <Link to='home' smooth={true} duration={500}>*/}
                {/*        Home*/}
                {/*    </Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to='about' smooth={true} duration={500}>*/}
                {/*        About*/}
                {/*    </Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to='skills' smooth={true} duration={500}>*/}
                {/*        Skills*/}
                {/*    </Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to='work' smooth={true} duration={500}>*/}
                {/*        Work*/}
                {/*    </Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to='contact' smooth={true} duration={500}>*/}
                {/*        Contact*/}
                {/*    </Link>*/}
                {/*</li>*/}
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='app__navbar-minimized'>
                {!nav ? <FaBars size={25}/> : <FaTimes/>}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'app__navbar-mobile'
                }
            >
                <li className='app__navbar-mobile-item'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='app__navbar-mobile-item'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='app__navbar-mobile-item'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='app__navbar-mobile-item'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='app__navbar-mobile-item'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='app__navbar-social-menu'>
                <ul>
                    <li className='app__navbar-social-item bg-blue-600'>
                        <a
                            className='app__navbar-social-item-link'
                            href='https://www.linkedin.com/'
                        >
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='app__navbar-social-item bg-[#333333]'>
                        <a
                            className='app__navbar-social-item-link'
                            href='https://www.github.com/'
                        >
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='app__navbar-social-item bg-[#db2777]'>
                        <a
                            className='app__navbar-social-item-link'
                            href='https://www.google.com/gmail/about/'
                        >
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='app__navbar-social-item bg-[#565f69]'>
                        <a
                            className='app__navbar-social-item-link'
                            href='#'
                        >
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
