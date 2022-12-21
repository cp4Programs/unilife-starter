import React from 'react'
import cover from '../assets/cover.png'

function BannerText({ title, text }) {

    const bannerStyle = {
        backgroundImage: `url(${cover})`,
        height: '60vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -2
    }

    const overlayStyle = {
        height: '60vh',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        zIndex: -1,
    }
    const bannerText = {
        color: 'white',
        fontSize: '64px',
        width: '55%',
        textAlign: 'center'
    }

    const subText = {
        color: 'white',
        fontSize: '24px',
        width: '55%',
        textAlign: 'center'
    }



    return (
        <div style={bannerStyle}>
            <div style={overlayStyle}></div>
            <p style={bannerText}>{title}</p>
            <p style={subText}>{text}</p>
        </div>

    )
}

export default BannerText