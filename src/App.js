import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Offers from './Components/Offers/Offers'
import Why from './Components/Why/Why'
import Promo from './Components/Promo/Promo'
import Feedbacks from './Components/Feedbacks/Feedbacks'
import Partners from './Components/Partners/Partners'
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'
// import Webpak from './Components/Home/Webpak'
const App = () => {
  return (
    
    <>

    <Navbar />
    <Home />
    <Offers />
    <Why />
    <Promo />
    <Feedbacks />
    <Partners />
    <Footer />
    <Carousel />
    {/* <Webpak /> */}
    

  </>
  )
}

export default App