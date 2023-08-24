import React from 'react'
import './why.css'
const Why = () => {
  return (
    <div className="whyContainer">
        <div className="whyContent">
            <h1 id='judulatas'>Why Choose Bali Cemerlang Tour?</h1>   
            <div className="whyImage">
                <img src={require('../../Assets/image10.png')} />
            </div>
            <div className="whyDeskripsi">
                <h1 id='judulbawah'>Why Choose Bali Cemerlang Tour?</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, illo?</p>
                <ul class="a">
                    <li>✔️Beest in price range</li>
                    <li>✔️Experienced for more than 10 years</li>
                    <li>✔️A variety of accommodations to choose from</li>
                </ul>
            <button className='aboutUsBtn btn'>
                <h1>About Us</h1>
            </button>
                
            </div>
        </div>
    </div>
  )
}

export default Why