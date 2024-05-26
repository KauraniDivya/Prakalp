import React from 'react';
import { Link } from "react-router-dom";
import logo from "./images/79.png";
import navbarlogo from "./images/Sankalp.svg";

const HomeHeader = () => {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-lg p-4 shadow-md min-w-max mx-auto" style={{ borderRadius: "30px" }}>
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-2 mr-40">
          <img src={navbarlogo} alt="Logo" className="h-10" />
          {/* Other logos can be added here if needed */}
        </div>
        <ul className="flex space-x-8 text-gray-800">
          {/* <li>
            <Link to="/">
              <img src={navbarlogo} alt="Navbar Logo" className="h-10"/>
            </Link>
          </li> */}
          <li>
            <Link to="/" className="hover:text-blue-500 active:text-blue-700">Home</Link>
          </li>
          <li>
            <Link to="/projectlist" className="hover:text-blue-500 active:text-blue-700">Explore Projects</Link>
          </li>
          <li>
            <Link to="/cglist" className="hover:text-blue-500 active:text-blue-700">Institutions</Link>
          </li>
          <li>
            <Link to="/crd/dashboard" className="hover:text-blue-500 active:text-blue-700">CRD</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
