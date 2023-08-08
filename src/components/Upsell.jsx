import React from 'react'
import CarBackground from '../images/car-bg.jpg'

function Upsell() {
  return (
    <div id="main__upsell__container" style={{backgroundImage: `url(${CarBackground})`}}>
      <div className="upsell_container">
        <h1>Your Ultimate Travel Companion, Rent Now!</h1>
        <h2>GREAT <span>CAR</span>. GREAT <span>PRICE</span>. GREAT <span>SERVICES</span>.</h2>
      </div>
    </div>
  )
}

export default Upsell