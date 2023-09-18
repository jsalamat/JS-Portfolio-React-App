import React from 'react'



const Footer = () => {
    const currentYear = new Date().getFullYear();
    
  return (
    <div class="bg-dark  text-white py-3 text-center">
        <div>JSDEV @ {currentYear }. All Rights Reserved </div>
    </div>
  )
}

export default Footer