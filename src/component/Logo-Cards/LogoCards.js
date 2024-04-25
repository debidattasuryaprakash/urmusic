import React from 'react'
import { CardsArray } from '../../Array'
import BgLayout from "../../Layouts/bgLayout3/bgLayout3"
import { PiMusicNotesFill } from "react-icons/pi";
import { LogoStyled } from './style'
function LogoCards() {
    return (
        <LogoStyled>
            {CardsArray.map((item, index) => (
                <div className='Royal-Cards-Section' key={index}>
                    <div className='Royal-Card'>
                        <BgLayout>

                            <PiMusicNotesFill className="Cards-Logo" />
                            <span className='Number'>{item.number}</span>



                            <div className='Card-Text-Section'>
                                <span className='Card-Title'>{item.name}</span>
                                <span className='Card-Text'>{item.title}</span>
                            </div>
                        </BgLayout>

                    </div>
                </div>
            ))}
        </LogoStyled>
    )
}

export default LogoCards