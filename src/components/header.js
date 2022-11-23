import React from 'react'
import '../styles/header.css'
import cover from '../assets/cover.png'
import { BsHouseDoor } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'



function Header() {

    const bannerStyle = {
        backgroundImage: `url(${cover})`,
        height: '60vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    }

    const bannerText = {
        color: 'white',
        fontSize: '24px',
        position: 'absolute',
        top: '50%',
        left: '50%',
    }


    return (

        <div className="header-container">
            <div className="nav-container">
                <div className="nav-left">
                    <p><BsHouseDoor /></p>
                    <p>UniLife</p>
                </div>
                <div className="nav-right">
                    <p><FiHeart /></p>
                    <p>Shortlist</p>
                    <p><AiOutlineMail /></p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div style={bannerStyle}>
                <p style={bannerText}>Find Student Homes with Bills Included</p>
            </div>

        </div >



    )

}

export default Header