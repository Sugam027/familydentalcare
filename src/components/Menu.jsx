import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {
    let navs = [
    { pagevalue: 'home', pagename: 'Home', link: '/' },
    { pagevalue: 'about', pagename: 'About us', link: '/about' },
    { pagevalue: 'service', pagename: 'Services', link: '/services' },
    // {pagevalue: 'testimonials', pagename: 'Testimonials', link: '/testimonials'},
    { pagevalue: 'contact', pagename: 'Contacts', link: '/contact' },
  ];
  
  document.addEventListener('DOMContentLoaded', function(){
    let nav = document.querySelector('.navigation')
    document.getElementById('nav-btn').addEventListener('click', function(){
        nav.classList.toggle('toggle');
    })
})
  return (
    <>
      <div className="navigation-background">
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <NavLink to="/">
                <img src='./images/logo.png' width="100%" alt="Logo" />
              </NavLink>
            </div>
            <div className="menu-s" id="nav-btn">
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </div>
            <nav>
              <ul>
                {navs.map((nav, index) => (
                  <li key={index}>
                    <NavLink
                      to={nav.link} // Use curly braces to indicate a JavaScript expression
                      className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                      {nav.pagename}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
