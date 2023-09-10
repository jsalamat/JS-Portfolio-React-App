import React from 'react'



const Footer = () => {
    let dt = new Date();
    let currentYear = dt.getFullYear();
    
  return (
    <div class="bg-dark  text-white py-3 text-center">
        <div>JSDEV @ {currentYear }. All Rights Reserved </div>
    </div>
  )
}

export default Footer