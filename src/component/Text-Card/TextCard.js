import React from 'react'

import { CardsStyled } from "./style"

import Dot from "../../assets/image/dot.png"
function TextCard() {
    return (
        <>
            <CardsStyled>
                <div className='Card-Title-Container'>

                    <div className='Card-Title-Section'>
                        <span className='Text-1'>Discover UR <br />
                            Music: Our Story</span>
                        <span className='Text'>Unveiling the passion, creativity, and dedication behind UR Music. Learn about our journey, mission, and the team driving the evolution of musical discovery.</span>
                    </div>
                    <div className='Dot-Card'>

                        <img className="Dot-Logo" src={Dot} alt="" />
                    </div>
                    <div className='Title-Section'>
                        <div className='Title-Container'>
                            <span className='Title-Text'> Music is the universal language that transcends <br /> boundaries, speaks to the soul, and unites humanity in<br /> rhythm and harmony.</span>
                            <span className='Title'> - Jhonny Lennon </span>
                        </div>

                    </div>
                </div>
            </CardsStyled>
        </>
    )
}

export default TextCard