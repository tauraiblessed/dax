import React from 'react'
import './Gallery.css'
import prod1 from '../../assets/product_1.jpg'
import prod2 from '../../assets/product_2.jpg'
import prod3 from '../../assets/product_3.jpg'

const Gallery = () => {
  return (
    <div className='company'>
        <div className="gallery">
            <img src={prod1} alt="" />
            <img src={prod2} alt="" />
            <img src={prod3} alt="" />
            <img src={prod1} alt="" />
            <img src={prod2} alt="" />
            <img src={prod3} alt="" />
        </div>
        <center><div className="btn dark-btn">See more here <img src="" alt="" /></div></center>
    </div>
  )
}

export default Gallery