import React from 'react';
import { ServicesStyled } from './style';
import Moblogo from "../../assets/image/mobile.png"
import LogoCards from '../Logo-Cards/LogoCards';
function Range() {
    return (
        <ServicesStyled>
            <div className="container">
                <div className="header-Main-Section">
                    <span className='title'>Explore Our Diverse Range of Services and Offerings</span>
                    <span className='Text'>Explore a range of services designed to enhance your musical journey, from personalized recommendations to immersive experiences, we're here to elevate your connection with music like never before.</span>



                </div>
                <div className='Image-Section'>
                    <LogoCards />
                    <img className="Mobile-Logo" src={Moblogo} alt="" />
                </div>
                <div className='Image-Section'>
                    <LogoCards />
                    <LogoCards />
                </div>
            </div>
        </ServicesStyled>
    );
}

export default Range;
