import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './Navbar.css';
import logoWeb from './razer-logo.svg';
import './fontawesome-free-6.4.0-web/css/all.min.css';
import Store from '../Store/Store';
import PC from '../PC/PC';
import Console from '../Console/Console';
import Mobile from '../Mobile/Mobile';
import Lifestyle from '../Lifestyle/Lifestyle';
import Services from '../Services/Services';
import Community from '../Community/Community';
import Support from '../Support/Support';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [inputSearch, setInputSearch] = useState(false);

  return (
    <div>
      <div className="fixed z-20 w-screen ">
        <nav className="navbar  bg-body-tertiary flex">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img className="web-brand" src={logoWeb} alt="Razzer" width={30} height={24} />
            </Link>

            {inputSearch ? (
              <>
                <Input className="relative w-[80%] h-[5vh] items-center top-0 rounded-none bg-[#222] text-white border-[#222] " />
                <i className="fa-solid fa-x cancel absolute z-50 left-[80%]" onClick={() => setInputSearch(false)}></i>
              </>
            ) : (
              <>
                <Link to="/store" className="navbar-item">
                  Store
                </Link>
                <Link to="/pc" className="navbar-item">
                  PC
                </Link>
                <Link to="/console" className="navbar-item">
                  Console
                </Link>
                <Link to="/mobile" className="navbar-item">
                  Mobile
                </Link>
                <Link to="/lifestyle" className="navbar-item">
                  Lifestyle
                </Link>
                <Link to="/services" className="navbar-item">
                  Services
                </Link>
                <Link to="/community" className="navbar-item">
                  Community
                </Link>
                <Link to="support" className="navbar-item">
                  Support
                </Link>
              </>
            )}

            <i className="fa-solid fa-magnifying-glass search" onClick={() => setInputSearch(true)} />
            <Link to="/adminpage">
              {' '}
              <i className="fa-regular fa-cart-shopping cart" />
            </Link>
          </div>
        </nav>
      </div>
      <div className="pt-[60px]">
        <div className="promotion">All orders over US$79 will enjoy free standard shipping to the United States.</div>
      </div>

      <Routes>
        <Route path="/store/*" element={<Store />} />
        <Route path="/pc" element={<PC />} />
        <Route path="/console" element={<Console />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/services" element={<Services />} />
        <Route path="/community" element={<Community />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
};

export default Navbar;
