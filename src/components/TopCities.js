import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CitiesCard from './CitiesCard'
import '../styles/citiescard.css'
import { Link } from 'react-router-dom'

function TopCities() {

    const [cities, setCities] = useState([])


    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/cities`)
            .then(res => {
                setCities(res.data.response.slice(0, 9))
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div className="top-cities-container">
            <h1>Student accomodations in our top cities</h1>
            <div className="cities-grid-container">
                {
                    cities.map((item) => {
                        return <CitiesCard citiesCard={item} />
                    })
                }
            </div>
            <Link to={'seeallcities'} ><button>See All Cities</button></Link>
        </div >
    )
}

export default TopCities