import React from 'react'
import '../styles/propertycard.css'
import { FaPoundSign } from 'react-icons/fa'
import { MdBed } from 'react-icons/md'
import { MdOutlineBathtub } from 'react-icons/md'
import { MdOutlineLocationOn } from 'react-icons/md'
import { BsHouseDoor } from 'react-icons/bs'



function PropertyCard({ property }) {


    return (

        <div className="property-card">
            <img src={property.images[0]} />
            <div className="room-rent">
                <div className="room-rent-lh">
                    <p><FaPoundSign />{property.rent}</p>
                </div>
                <div className="room-rent-rh">
                    <p><MdBed />  {property.bedroom_count}</p>
                    <p><MdOutlineBathtub />  {property.bathroom_count}</p>
                </div>

            </div>
            <div className="furnishings">
                <div className="type-furnish">
                    <p> {property.property_type}</p>
                    <p>{property.furnished}</p>
                </div>
                <p className="location"><MdOutlineLocationOn /> {property.address.street} {property.address.city} {property.address.postcode}</p>
            </div>
            <div className="property-pics"><BsHouseDoor /><a>View Home</a></div>
        </div>

    )
}

export default PropertyCard