import React from 'react'
import '../styles/propertycard.css'




function PropertyCard({ property }) {


    return (

        <div className="property-card">
            <img src={property.images[0]} />
            <div className="room-rent">
                <div className="room-rent-lh">
                    <p>${property.rent}</p>
                </div>
                <div className="room-rent-rh">
                    <p>Bed {property.bedroom_count}</p>
                    <p>Bath {property.bathroom_count}</p>
                </div>

            </div>
            <div className="furnishings">
                <div className="type-furnish">
                    <p> {property.property_type}</p>
                    <p>{property.furnished}</p>
                </div>
                <p className="location">{property.address.street} {property.address.city} {property.address.postcode}</p>
            </div>
            <div className="property-pics"><a>View Home</a></div>
        </div>

    )
}

export default PropertyCard