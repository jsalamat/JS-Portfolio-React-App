import React from 'react'



const Footer = () => {
    const currentYear = new Date().getFullYear();
    
  return (
    <div className="bg-dark  text-white py-3 text-center">
        <div><a href="#top" className="footer-logo">&lt;JSDEV&gt;</a> @ {currentYear }. All Rights Reserved </div>
    </div>
  )
}

export default Footer