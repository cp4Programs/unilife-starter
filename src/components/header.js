import React from 'react'
import '../styles/header.css'
import cover from '../assets/cover.png'


function Header() {

    return (
        <div className="header-container">
            <div className="nav-container">
                <div className="nav-left">
                    UniLife
                </div>
                <div className="nav-right">
                    <p>Shortlist</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div>
                <img clasName="banner" style={{ width: '100%' }} src={cover} />
            </div>
        </div>




    )

}

export default Header