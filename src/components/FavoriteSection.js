import React from 'react'
import person from '../assets/person.png'

function FavoriteSection() {

    const personImg = {
        backgroundImage: `url(${person})`,
        height: '37vh',
        width: '50%',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 'auto'
    }

    return (
        <div className="fav-sect-container">
            <div className="fav-sect-lh">
                <div>
                    <h1 className="spacing">Best Selection</h1>
                    <p className="spacing">Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
                </div>
                <div>
                    <h1 className="spacing">Your favorite</h1>
                    <p className="spacing">Shortlist your favourite properties and send enquiries in one click.</p>
                </div>
                <input className="spacing" type="text" placeholder="search & compare" />
            </div>
            <div className="fav-sec-img" style={personImg}></div>
        </div>
    )
}

export default FavoriteSection