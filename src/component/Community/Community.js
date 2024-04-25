import React from 'react'
import { CommuntiyStyled } from './style'
import BgLayout2 from "../../Layouts/bgLayout2/bgLayout2"
function Community() {
    return (
        <>   <BgLayout2>
            <CommuntiyStyled>
                <div className='Community-Main-Div'>
                    <div className='Community-Text-Section'>
                        <span className='Title'>Join our community</span>
                        <span className='Text'>UR Music has completely transformed how I experience music. The personalized <br /> playlists curated for me are always spot-on, introducing me to new artists and <br />songs that resonate with my tastes perfectly.</span>
                    </div>
                    <div className="Names-Form">
                        <div className="Form-Box-Text-Bottom">
                            <div className="FormBox">
                                <input
                                    className="NameBox"
                                    type="Name"
                                    placeholder='Enter your email address'


                                />
                            </div>
                            <button className='Button'>Early Access</button>
                        </div>
                    </div>
                    <div className='Time-Section'>
                        <div className='Time-Side'>
                            <span className='Time'>12</span>

                            <span className='Days'>Days</span>
                        </div>
                        <div className='Time-Side'>
                            <span className='Time'>50</span>
                            <span className='Days'>50</span>
                        </div>
                        <div className='Time-Side'>
                            <span className='Time'>25</span>
                            <span className='Days'>Minutes</span>
                        </div>
                    </div>
                </div>
            </CommuntiyStyled>
        </BgLayout2>
        </>
    )
}

export default Community