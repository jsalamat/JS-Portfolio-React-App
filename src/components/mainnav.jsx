import React from 'react';
import '../assets/css/mainnav.css';

const MainNav = () => {
    return (
        <header className="main-header bg-dark" id="top">
            <div className="top-nav container">
                <div>
                    <a className="navbar-brand p-2 text-white h5" href="#top">
                        <span className="header-logo">&lt;JSDEV&gt;</span>
                    </a>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label className="menu-button-container" htmlFor="menu-toggle">
                    <div className="menu-button"></div>
                </label>
                <ul className="menu">
                    <li className="nav-item pe-5">
                        <a className="nav-link text-white" href="#home">Home</a>
                    </li>
                    <li className="nav-item pe-5">
                        <a className="nav-link text-white" href="#about">About</a>
                    </li>
                    <li className="nav-item pe-5">
                        <a className="nav-link text-white" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item pe-5">
                        <a className="nav-link text-white" href="#contact">Contact</a>
                    </li>   
                </ul>
            </div>
        </header>
    );
};

export default MainNav;
