import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CitiesCard from './CitiesCard'
import '../styles/citiescard.css'

function TopCities() {

    const [cities, setCities] = useState([])

    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/cities`)
            .then(res => {
                setCities(res.data.response)
            })
            .catch(err => console.log(err))

    }, [])

    console.log(cities)
    return (
        <div className="top-cities-container">
            <h1>Student accomodations in our top cities</h1>
            <div className="cities-grid-container">
                {
                    cities.map((item) => {
                        return <CitiesCard cities={item} />
                    })
                }
            </div>
            <button>See All Cities</button>
        </div>
    )
}

export default TopCities