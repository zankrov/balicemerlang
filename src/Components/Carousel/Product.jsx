import React from 'react'
export default function product() {
  return (
    <div className="promoCard">
        <div className="promoCardImage">
            <img src={require('../../Assets/image6.png')} />
        </div>
        <div className="promoText">
            <h1>50% Discount</h1>
            <h3>Flight Ticket to Singapore</h3>
        </div>
                    
    </div>
  )
}
