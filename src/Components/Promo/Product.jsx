import React from 'react'
import './product.css'
export default function product() {
  return (
    <div className="productContainer">
        <div className="productImage">
            <img src={require('../../Assets/image6.png')} />
        </div>
        <div className="productText">
            <h1>50% Discount</h1>
            <h3>Flight Ticket to Singapore</h3>
        </div>
                    
    </div>
    
  )
}
