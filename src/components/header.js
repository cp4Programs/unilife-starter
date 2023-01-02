import React from 'react'
import '../styles/header.css'
import { BsHouseDoor } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'




function Header() {



    return (

        <div className="header-container">
            <div className="nav-container">
                <div className="nav-left">
                    <p><BsHouseDoor /></p>
                    <Link to='/'><p>UniLife</p></Link>
                </div>
                <div className="nav-right">
                    <p><FiHeart /></p>
                    <p>Shortlist</p>
                    <p><AiOutlineMail /></p>
                    <p>Contact Us</p>
                </div>
            </div>



        </div >



    )

}

export default Header