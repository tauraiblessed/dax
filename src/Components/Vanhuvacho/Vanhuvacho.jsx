import React from 'react'
import './Vanhuvacho.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'

import dax from '../../assets/dax.jpg'

const Vanhuvacho = () => {
  return (
    <div className='vanhu'>
         <img src={back} className='back-btn' alt="" />
        <img src={next} className='next-btn' alt="" />
       

        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={dax} width='100%' alt="" />
                            <div>
                                <h3>Taurai Mamire</h3>
                                <span>ZNDU</span>
                            </div>
                        </div>
                        <p>Choosing to start an IT Company was one of the best decisions
                            I've ever made. The supportive community, state-of-the-art 
                            facilities, and commitment to improving IT infrustucture
                             truly exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={dax} width='100%' alt="" />
                            <div>
                                <h3>Taurai Mamire</h3>
                                <span>ZNDU</span>
                            </div>
                        </div>
                        <p>Choosing to start an IT Company was one of the best decisions
                            I've ever made. The supportive community, state-of-the-art 
                            facilities, and commitment to improving IT infrustucture
                             truly exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={dax} width='100%' alt="" />
                            <div>
                                <h3>Taurai Mamire</h3>
                                <span>ZNDU</span>
                            </div>
                        </div>
                        <p>Choosing to start an IT Company was one of the best decisions
                            I've ever made. The supportive community, state-of-the-art 
                            facilities, and commitment to improving IT infrustucture
                             truly exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={dax} width='100%' alt="" />
                            <div>
                                <h3>Taurai Mamire</h3>
                                <span>ZNDU</span>
                            </div>
                        </div>
                        <p>Choosing to start an IT Company was one of the best decisions
                            I've ever made. The supportive community, state-of-the-art 
                            facilities, and commitment to improving IT infrustucture
                             truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                
            </ul>
        </div>

    </div>
  )
}

export default Vanhuvacho