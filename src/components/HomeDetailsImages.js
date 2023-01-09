import React, { useState } from 'react'
import '../styles/homedetails.css'

function HomeDetailsImages({ propertyData }) {



    return (
        <div className="hd-imgs-container">
            <div className="hd-solo-img">
                <img src={propertyData?.images && propertyData?.images[0]} />

            </div>
            <div className="hd-small-imgs">
                <img src={propertyData?.images && propertyData?.images[1]} />
                <img src={propertyData?.images && propertyData?.images[2]} />
                <img src={propertyData?.images && propertyData?.images[3]} />
            </div>
        </div>

    )
}

export default HomeDetailsImages