import React, { useState } from 'react'
import '../styles/homedetails.css'

function HomeDetailsImages({ propertyData }) {
    console.log(propertyData)


    return (
        <div>
            <div className="hd-imgs-container">
                <img src={propertyData.images[0]} />
                <div className="hd-small-imgs">
                    <img src={propertyData.images[1]} />
                    <img src={propertyData.images[2]} />
                    <img src={propertyData.images[3]} />
                </div>
            </div>
        </div>

    )
}

export default HomeDetailsImages