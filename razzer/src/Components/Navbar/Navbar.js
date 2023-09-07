import React from 'react'
import'./Navbar.css'
import logoWeb from './razer-logo.svg'
import './fontawesome-free-6.4.0-web/css/all.min.css'

const Navbar = () => {
  return (
    <div>
  <nav className="navbar  bg-body-tertiary">
    <div className="container sticky">
      <a className="navbar-brand" href="#">
        <img className="web-brand" src={logoWeb} alt="Razzer" width={30} height={24} />
      </a>
      <a href="#" className="navbar-item">Store</a>
      <a href="#" className="navbar-item">PC</a>
      <a href="#" className="navbar-item">Console</a>
      <a href="#" className="navbar-item">Mobile</a>
      <a href="#" className="navbar-item">Lifestyle</a>
      <a href="#" className="navbar-item">Services</a>
      <a href="#" className="navbar-item">Community</a>
      <a href="#" className="navbar-item">Support</a>
      <i className="fa-solid fa-magnifying-glass search" />
      <i className="fa-regular fa-cart-shopping cart" />
    </div>
  </nav>
  <div className="promotion">
    All orders over US$79 will enjoy free standard shipping to the United States.
  </div>
</div>

  )
}

export default Navbar