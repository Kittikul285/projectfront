import React from 'react'
import './Hero.css'

import hero_imae from '../Assets/portrait-5601950_640.jpg'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>สินค้ามาใหม่เท่านั้น</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>ใหม่</p> 
                </div>
                <p>คอลเลกชัน</p>
                <p>สำหรับทุกคน</p>
            </div>
            
        </div>
        <div className="hero-right">
            <img src={hero_imae} alt="" />
        </div>
    </div>
  )
}

export default Hero