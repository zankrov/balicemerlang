import React from 'react'
import './home.css'
import { FiSearch } from 'react-icons/fi';
import { FaPlaneDeparture } from 'react-icons/fa';


const Home = () => {
  return (
    <div className="secContainer container">
        <div className="homeTitle">
            <h1>BALI</h1>
        </div>
        <div className="secTitle">
            <p>BOOK A UNIQUE EXPERIENCE ON BALI CEMERLANG TOURS TODAY</p>
        </div>

        <div className="cardContainer">
            <div className="card1">
                <div className="cardBtn">
                    <a href="">
                        <h1><FiSearch/></h1>
                        <p>Tour</p>
                    </a>
                </div>
                <div className="cardBtn">
                    <a href="">
                        <h1><FaPlaneDeparture /></h1>
                        <p>Flight</p>
                    </a>
                </div>
            </div>
            <div className="card2">
                <input type="text" placeholder='Search by City'>
                </input>
            </div>
            <button className='card3'>
                <h1>SEARCH</h1>
            </button>
        </div>

    </div>
  )
}

export default Home