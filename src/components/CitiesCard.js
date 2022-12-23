import React from 'react'
import '../styles/citiescard.css'

function CitiesCard({ cities }) {


    return (
        <div className="card-container">
            <img src={cities.image_url} />
            <div className="card-text-container">
                <h3>{cities.name}</h3>
                <p>{cities.property_count} properties</p>
            </div>
        </div>
    )

}

export default CitiesCard