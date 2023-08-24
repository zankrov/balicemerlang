import React from 'react'

import './partners.css'

const Partners = () => {
  return (
    <div className="partnersContainer">
        <div className="partnersContent">
            <div className="partnersTitle">
                <h2>Our Partners</h2>
            </div>
            <div className="partnersLogo">
                <img src={require('../../Assets/singaporeairlines.png')} />
            </div>
        </div>
    </div>
  )     
}

export default Partners