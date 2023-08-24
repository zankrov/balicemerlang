import React, { useState,useRef,useEffect } from 'react'
import {FiMenu} from 'react-icons/fi'
import classNames from 'classnames'
import Logo from '../../Assets/Logo.png'
import './navbar.css'
import { RxPerson } from 'react-icons/rx';


import { FiSearch } from 'react-icons/fi';



const Navbar = () => {


    const[color,setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }


    window.addEventListener('scroll',changeColor)


  //buat hamburger diluar klik nutup===================================
  useEffect( () => {
    document.addEventListener("click", handleClickOutside, true)
  }, [] )

  const refOne = useRef(null)
  const refTwo = useRef(null)

  const handleClickOutside = (e) => {
    if(!refOne.current.contains(e.target ? e.target : '') && !refTwo.current.contains(e.target ? e.target : '')) {
      console.log("Clicked outisde ....")
      setIsOpen(false) //ini ngeset biar nutup
    } else {
      console.log("klik inside DIV ..")
    }
  } 
  //end dec....................................................

  // ini buat hamburger menu bukak tutup pake npm clases===================
  const [isOpen,setIsOpen]=useState(false);
  const onClickHeader=()=>{
    setIsOpen(!isOpen)
  }
  //...........................................................
  

  return (
    
    <section className='navBarSection'>
        <div className={color ? 'header header-bg' : 'header'}>
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <img src={Logo} alt="" />
                </a>
            </div>
            <div className="navBar flex">
                <div className={classNames('navbar-nav', {'active':isOpen})} ref={refTwo}>
                    <ul className="navList">
                        <li className="navItem">
                            
                        </li>                    
                        <li className="navItem">
                            <a href="" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Tour</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Flight</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Attractions</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navList2 flex">
                        
                    <h1><FiSearch /></h1>
                    <h1 ><RxPerson /></h1>
                    <h1 id='hamburger-menu'ref={refOne} onClick={onClickHeader}><FiMenu/></h1>

                </div>

                
            </div>
        </div>

    </section>
  )
}

export default Navbar