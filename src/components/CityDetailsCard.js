import React, { useState, useEffect } from 'react'
import '../styles/citiescard.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function CityDetailsCard({ citiesCard }) {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/properties`)
            .then(res => {
                console.log(res.data.data)
                setProperties(res.data.data[0]._id)
            })
            .catch(err => console.log(err))
    })



    return (
        <div className="card-container">
            <Link to={`citydetails/${citiesCard._id}`}><img src={citiesCard.image_url} /></Link>
            <div className="card-text-container">
                <h3>{citiesCard.name}</h3>
                <p>{citiesCard.property_count} properties</p>
            </div>
        </div>
    )
}

export default CityDetailsCard