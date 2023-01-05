import React from 'react'
import '../styles/propertycard.css'
import { FaPoundSign } from 'react-icons/fa'
import { MdBed } from 'react-icons/md'
import { MdOutlineBathtub } from 'react-icons/md'
import { MdOutlineLocationOn } from 'react-icons/md'
import { BsHouseDoor } from 'react-icons/bs'
import { Link } from 'react-router-dom'



function PropertyCard({ property }) {

    console.log(property)

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
            <div className="property-pics">
                <Link to={`homedetails/${cityId}`} ><BsHouseDoor />View Home</Link>
            </div>

        </div>

    )
}

export default PropertyCard