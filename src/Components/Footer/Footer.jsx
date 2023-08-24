import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className="footerContainer">
        <div className="footerContent">
            <div className="footerLogo">
                <h3>Logo</h3>
                <ul>
                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti omnis aliquid possimus debitis. Quam.</p> </li>
                    <li>Logo</li>
                </ul>
            </div>
            <div className="footerAbout">
                <h3>About Us</h3>
                <ul>
                    <li><p>Privacy policy</p></li>
                    <li><p>Company profile</p></li>
                    <li><p>Term & Conditions</p></li>
                    <li><p>Contact</p></li>
                </ul>
            </div>
            <div className="footerSearch">
                <h3>Search</h3>
                <ul>
                    <li>Tour</li>
                    <li>Flight</li>
                    <li>Attraction</li>
                </ul>
            </div>
            <div className="footerTouch">
                <h3>Get In Touch</h3>
                <ul>
                    <li>
                        <h3>E-Mail</h3>
                        <p>balicemerlangtours@gmail.com</p>
                    </li>
                    <li>
                        <h3>WhatsApp</h3>
                        <p>+62 812-3456-7890</p>
                    </li>
                    <li>
                        <h3>Denpasar,ID</h3>
                        <p>Jl. Tukad Ayung No.5 Denpasar - Bali</p>
                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer