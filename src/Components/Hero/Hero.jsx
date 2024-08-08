import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We are the leading company in providing IT products and services.</h1>
            <p>Through our comprehensive approach to technology consulting,
             we empower organizations with the tools and strategies to exce
              in an increasingly digital landscape.</p>
              <button className="btn">Explore More.. <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero