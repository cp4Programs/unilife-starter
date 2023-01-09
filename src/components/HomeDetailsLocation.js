import React from 'react'

function HomeDetailsLocation({ propertyData }) {

    return (
        <div className="hd-det-loc-container">
            <div className="address-properties-container">
                <div className="hd-address">
                    <p>{propertyData?.address?.street}</p>
                    <p>{propertyData?.address?.city}</p>
                    <p>{propertyData?.address?.postcode}</p>
                </div>
                <div className="hd-properties">
                    <p>Bedrooms {propertyData?.bedroom_count}</p>
                    <p>Bathrooms {propertyData?.bathroom_count}</p>
                    <p>Property Type {propertyData?.preoperty_type}</p>
                    <p>Price {propertyData?.rent}</p>
                    <p>Furnished Type {propertyData?.furnished}</p>
                    <p>Available from {propertyData?.availability}</p>
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