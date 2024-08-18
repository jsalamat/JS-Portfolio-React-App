import React from 'react'

const Navbar = () => {
  return (
    <div className="block">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
              <a className="navbar-brand   p-2  text-white h5" href="#"><span className="header-logo">&lt;JSDEV&gt;</span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item pe-5 ">
                  <a className="nav-link text-white" href="#home">Home</a>
                </li>
                <li className="nav-item pe-5">
                  <a className="nav-link  text-white" href="#about">About</a>
                </li>
                <li className="nav-item pe-5 ">
                  <a className="nav-link  text-white" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item pe-5">
                  <a className="nav-link  text-white" href="#contact">Contact</a>
                </li>   
              </ul>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar