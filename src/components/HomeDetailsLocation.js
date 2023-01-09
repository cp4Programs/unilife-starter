import React from 'react'
import '../styles/homedetails.css'
import { FaPoundSign } from 'react-icons/fa'
import { MdBed } from 'react-icons/md'
import { MdOutlineBathtub } from 'react-icons/md'

function HomeDetailsLocation({ propertyData }) {

    return (
        <div className="hd-det-loc-container">
            <div className="address-properties-container">
                <div className="address-properties-card">
                    <div className="hd-address">
                        <h1>{propertyData?.address?.street}, {propertyData?.address?.city},</h1>
                        <h1>{propertyData?.address?.postcode}</h1>
                    </div>
                    <div className="hd-properties">
                        <div className="hd-properties-style">
                            <p>Bedrooms </p>
                            <h2><MdBed /> {propertyData?.bedroom_count}</h2>
                        </div>
                        <div className="hd-properties-style">
                            <p>Bathrooms </p>
                            <h2><MdOutlineBathtub />{propertyData?.bathroom_count}</h2>
                        </div>
                        <div className="hd-properties-style">
                            <p>Property Type </p>
                            <h3>{propertyData?.property_type}</h3>
                        </div>
                        <div className="hd-properties-style">
                            <p>Price </p>
                            <h2><FaPoundSign />{propertyData?.rent}</h2>
                        </div>
                        <div className="hd-properties-style">
                            <p>Furnished Type </p>
                            <h3>{propertyData?.furnished}</h3>
                        </div>
                        <div className="hd-properties-style">
                            <p>Available from </p>
                            <h3>{propertyData?.availability}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hd-loc-btn-container">
                <button>Shortlist</button>
                <button>Book Viewing</button>
            </div>
        </div>
    )
}

export default HomeDetailsLocation