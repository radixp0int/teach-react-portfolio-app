import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "./SocialLinks.scss";

const SocialLinks = () => {
  return (
    <div className="app__navbar-social-menu">
      <ul>
        <li className="app__navbar-social-item bg-blue-600">
          <a
            className="app__navbar-social-item-link"
            href="src/components/Navbar/Navbar"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="app__navbar-social-item bg-[#333333]">
          <a
            className="app__navbar-social-item-link"
            href="https://github.com/kawaiishishi"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="app__navbar-social-item">
          <a
            className="app__navbar-social-item-link"
            href="https://mail.com"
          >
            Email <HiMail size={30} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks