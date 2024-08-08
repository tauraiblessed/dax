import React from 'react'
import './About.css'
import aboutImg from '../../assets/aboutImage.jpg'
import playIcon from '../../assets/playIcon.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={aboutImg} alt="" className='about-image' />
            <img src={playIcon} alt="" className='play-icon'/>
        </div>

        <div className="about-right">
            <h3>
                ABOUT DAX.COM
            </h3>

            <h2>
                Leading in IT 
            </h2>
            <p>Established in 2024, DAX.COM is a leading information technology company that has 
                been at the forefront of digital transformation. Headquartered in the heart of Harare Zimbabwe, 
                DAX.COM has built a reputation for delivering innovative and cutting-edge technology solutions
                 to a diverse range of clients, from small startups to multinational corporations. With a team of
                 highly skilled engineers, developers, and consultants, the company has consistently demonstrated
                 its ability to tackle complex challenges and provide customized, best-in-class services.
                 </p>
           
        </div>
    </div>
  )
}

export default About