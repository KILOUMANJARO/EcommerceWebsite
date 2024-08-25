import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Collection!</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>Kids</p>
                    {/* <img src={hand_icon} alt="" width="50"/> */}
                </div>
                <p>Don't Play</p>
            </div>

            <div className="hero-latest-btn">
                <div>SHOP</div>
                {/* <img src={arrow_icon} alt="" width="30"/> */}
            </div>,
 
        </div>

        <div className="hero-right">
            <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}


