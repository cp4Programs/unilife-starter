import React, { useState } from 'react'
import '../styles/homedetails.css'

function HomeDetailsKeyFeatures({ propertyData }) {

    const [features, setFeatures] = useState([])




    return (
        <div className="hd-features-container">
            <div className="features-content">
                <h1>Key Features</h1>
                <br></br>
                <ul>{propertyData?.key_features && propertyData?.key_features[0]}</ul>
                <ul>{propertyData?.key_features && propertyData?.key_features[1]}</ul>
                <ul>{propertyData?.key_features && propertyData?.key_features[2]}</ul>
                <ul>{propertyData?.key_features && propertyData?.key_features[3]}</ul>
                <ul>{propertyData?.key_features && propertyData?.key_features[4]}</ul>
            </div>
        </div>
    )
}

export default HomeDetailsKeyFeatures