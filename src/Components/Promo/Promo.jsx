import React from 'react'
import './promo.css'
import Promocard from './Promocard'
const promo = () => {
  return (
    <div className="promoContainer">
        <div className="promoContent">
            <div className="title">
                <h2>Promo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam repellat ullam accusantium? Ea, ratione.</p><br />
            </div>

            <Promocard />
            {/* <div className="promoCardContainer">
                <div className="promoCard">
                    <div className="promoCardImage">
                        <img src={require('../../Assets/image6.png')} />
                    </div>
                    <div className="promoText">
                        <h1>50% Discount</h1>
                        <h3>Flight Ticket to Singapore</h3>
                    </div>
                    
                </div>
                <div className="promoCard">
                    <div className="promoCardImage">
                        <img src={require('../../Assets/image7.png')} />
                    </div>
                    <div className="promoText">
                        <h1>Special price</h1>
                        <h3>Glaungan Kuningan Day</h3>
                    </div>
                    
                </div>
                <div className="promoCard">
                    <div className="promoCardImage">
                        <img src={require('../../Assets/image8.png')} />
                    </div>
                    <div className="promoText">
                        <h1>40% Off</h1>
                        <h3>Ubud Tour</h3>
                    </div>
                    
                </div>
                <div className="promoCard">
                    <div className="promoCardImage">
                        <img src={require('../../Assets/image9.png')} />
                    </div>
                    <div className="promoText">
                        <h1>Family Pack</h1>
                        <h3>Special Price</h3>
                    </div>
                    
                </div>
                
                
            </div> */}
        </div>
        
    </div>
  )
}

export default promo