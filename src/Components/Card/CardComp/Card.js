import React from 'react';
import './Card.css'

export default function Card(props) {
  return (
        <div className={`card-styled ${props.topRight && 'card-topRight'} ${props.topLeft && 'card-topLeft'} ${props.bottomRight && 'card-bottomRight'} ${props.bottomLeft && 'card-bottomLeft'} ${props.bgSkyBlue && 'bg-sky_blue'} ${props.bgDarkBlue && 'bg-dark_blue'} ${props.bgOrange && 'bg-orange'} ${props.bgLightOrange && 'bg-light_orange'} ${props.bgPurple && 'bg-purple'} ${props.bgMedBlue && 'bg-med_blue'}`}>
            {props.children}
        </div>
  );
}

