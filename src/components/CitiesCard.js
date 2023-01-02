import React, { useState } from 'react'
import '../styles/citiescard.css'
import { Link } from 'react-router-dom'

function CitiesCard({ citiesCard }) {
    console.log(citiesCard._id)
    return (
        <div className="card-container">
            <Link to={`citydetails/${citiesCard._id}`}><img src={citiesCard.image_url} /></Link>
            <div className="card-text-container">
                <h3>{citiesCard.name}</h3>
                <p>{citiesCard.property_count} properties</p>
            </div>
        </div>
    )

}

export default CitiesCard