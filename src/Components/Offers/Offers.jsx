import React from 'react'
import './offers.css'
import { BiRightArrowCircle } from 'react-icons/bi';
import logo from '../../Assets/image2.png'

const Offers = () => {
  return (
    <section className='offersContainer'>

          <div className="offerContent">
            <div className="title">
              <h2>Special Offer</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam repellat ullam accusantium? Ea, ratione.</p><br />
              </div>
            <div className="offerCardContainer">
              
            <div className="offerCard">
              {/* <img src={require('../../Assets/image2.png')} /> */}
              
              <div className="freeVoucher">
              
                <h1>&nbsp;&nbsp;&nbsp;Free Voucher Tour</h1>
                
              </div>
              <div class="triangle-down"></div>
              <div className="tourDestination">
                <h1>Tour to Lempuyang Temple</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores.</p>
                <div className="voucherBtn btn">
                  <p>read more</p>&nbsp;&nbsp;&nbsp;
                  <BiRightArrowCircle />
                </div>
              </div>              
            </div>
            <div className="offerCard">
              {/* <img src={require('../../Assets/image2.png')} /> */}
              <div className="freeVoucher">
                <h1>&nbsp;&nbsp;&nbsp;Free Voucher Tour</h1>
              </div>
              <div class="triangle-down"></div>
              <div className="tourDestination">
                <h1>Tour to Lempuyang Temple</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores.</p>
                <div className="voucherBtn btn">
                  <p>read more</p>&nbsp;&nbsp;&nbsp;
                  <BiRightArrowCircle />
                </div>
              </div>              
            </div>
            <div className="offerCard">
              {/* <img src={require('../../Assets/image2.png')} /> */}
              <div className="freeVoucher">
                <h1>&nbsp;&nbsp;&nbsp;Free Voucher Tour</h1>
              </div>
              <div class="triangle-down"></div>
              <div className="tourDestination">
                <h1>Tour to Lempuyang Temple</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores.</p>
                <div className="voucherBtn btn">
                  <p>read more</p>&nbsp;&nbsp;&nbsp;
                  <BiRightArrowCircle />
                </div>
              </div>              
            </div>

            </div>

            <button className='btnSeemore btn'>Click here to see more offers</button>
            
          </div>

    </section>
  )
}

export default Offers
{/* <div className="cardContainer">
  <div className="card">
    <div className="freeText">
      <p>Free Voucher Tour</p>
    </div>
    <div className="Location">
      <h1>Tour to lempuyang</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, quibusdam quaerat. Illo voluptate temporibus officiis!</p>
      <button className='btn'>Test</button>
    </div>
  </div>
</div> */}