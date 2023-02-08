import React, { useState } from 'react'
import { useGlobalContext } from '../../hook/Context'
import './Nav.css'


import { FiPercent, FaRandom, BiInfoCircle,CgClose} from 'react-icons/all'

const Nav = () => {
    const { color, setColor,
        countBox, setCountBox, generateRandomColor } = useGlobalContext();
    const [isInfo, setIsInfo] = useState(false);

    const toggleInfo = () => {
        setIsInfo(prev => !prev)
    }

    return (
        <div className='nav'>
            <div className="innerNav">
                <div className="logoBox">
                    <h1>RainBox</h1>
                </div>
                <div className="inputBox">
                    <div className="colorOuter ripple">
                        <input type="color" onChange={(ev) => setColor(ev.target.value)} value={color} name="" id="" />
                    </div>
                    <input type="text" onChange={(ev) => setColor(ev.target.value)} value={color} name="" id="" />
                    <div className="numberOuter">
                        <FiPercent />
                        <input type="number" onChange={(ev) => setCountBox(ev.target.value)} step={0.1} value={countBox} name="" id="" />
                    </div>
                </div>

                <div className="rightBox">
                    <div className="randomBtn ripple" onClick={generateRandomColor}>
                        <BiInfoCircle size={20} className='' onClick={toggleInfo} />
                    </div>
                    <div className="randomBtn ripple" title='Random Color generator' onClick={generateRandomColor}>
                        <FaRandom size={20} className='' />
                    </div>
                </div>

                {isInfo && (
                    <div className="infoBox">
                        <div className="innerInfo">
                            <div className="iconBox">
                                <h1>Info</h1>
                                <CgClose  onClick={toggleInfo} size={20} className='ripple' />
                            </div>
                            <p>Hi my name is <b>Salman</b> and I am Developer.
                                Just try to built something beautiful.If you see
                                something missing in it feel free suggest me.
                                You can message in this email address.
                            </p>
                           <div className="emailBox">
                           <p>Email: <b>salman512512512@gmail.com</b></p>
                            <p>Github: <a href="https://github.com/SalmanBajwa-web">SalmanBajwa-web</a> </p>
                           </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}

export default Nav