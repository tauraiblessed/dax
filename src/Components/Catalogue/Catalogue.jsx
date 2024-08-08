import React from 'react'
import './Catalogue.css'
import laptops from '../../assets/laptops.jpg';
import tablets from '../../assets/tablets.jpg';
import desktops from '../../assets/desktop.jpg';


import laptop from '../../assets/laptop_icon.png';
import tablet from '../../assets/tablet_icon.png';
import desktop from '../../assets/desktop_icon.png';

const Catalogue = () => {
  return (
    <div className='catalogue'>

        <div className="products">
            <img src={laptops} alt="" />
            <div className="caption"> 
            <img src={laptop} alt="" />                
                <p>Laptops for all sizes.</p>              
            </div>
        </div>

        <div className="products">
            <img src={tablets} alt="" />
            <div className="caption"> 
            <img src={tablet} alt="" />                
                <p>Tablets for all your needs.</p>
            </div>
        </div>

        <div className="products">
            <img src={desktops} alt="" />
            <div className="caption">
                <img src={desktop} alt="" />                
                <p>Desktop Computers for all purposes.</p>
            </div>
        </div>

    </div>
  )
}

export default Catalogue