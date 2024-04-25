import React from 'react'
import { RoyalCardsArray } from '../../Array'
import { CardsStyled } from "./style"
import { PiMusicNotesFill } from "react-icons/pi";


function Cards() {
    return (
        <>

            <CardsStyled>
                {RoyalCardsArray.map((item, index) => (
                    <div className='Royal-Cards-Section' key={index}>
                        <div className='Royal-Card'>
                            <div className='Image-Section'>
                                <PiMusicNotesFill className="Cards-Logo" />
                                <span className='Number'>{item.number}</span>

                            </div>

                            <div className='Card-Text-Section'>    <span className='Card-Title'>{item.name}</span>
                                <span className='Card-Text'>{item.title}</span></div>


                        </div>
                    </div>
                ))}
            </CardsStyled>
        </>
    )
}

export default Cards