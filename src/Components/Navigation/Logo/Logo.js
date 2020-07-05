import React, {useState} from 'react';
import './Logo.css'

function Logo() {

    const [animated, setAnimated] = useState(false)

    const animationOn = () => {
        if (animated === true) {
            setAnimated(false)
        }
        else {
            setAnimated(true)
        }
    }

    let animeClass = animated ? 'animation-on' : 'animation-off'

    return (
        <div className="logo-main" onMouseEnter={animationOn} onMouseLeave={animationOn}>
            <div className="logo-text">
                <div>Placement</div>
                <div>Saga</div>
            </div>
            <div className={`logo-cont ${animeClass}`}>
                {"{"}
                <div className="logo-lines">
                    <div className="logo-line1"></div>
                    <div className="logo-line2"></div>
                    <div className="logo-line3"></div>
                    <div className="logo-line4"></div>
                </div>
                {"}"}
            </div>
        </div>
    )
}

export default Logo;
