import React from 'react'
import '../styles/homedetails.css'

function HomeDetailsDescription({ propertyData }) {


    return (

        <div className="hd-description-container">
            <div className="description-content">
                <h1>Description</h1>
                <br></br>
                <p>{propertyData.property_description}</p>
            </div>

        </div>
    )
}

export default HomeDetailsDescription