/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './navbar.css'; // Ensure this path is correct
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState('navBar');
  
  const showNav = () => {
    setActive('navBar activeNavbar');
  }
  
  const removeNavbar = () => {
    setActive('navBar');
  }
  
  return (
    <section className='navBarsection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdTravelExplore className="icon" /> ExploreIndia
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="btn">BOOK NOW</a>
            </li>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar" aria-label="Close menu">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar" aria-label="Open menu">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}

export default Navbar;
