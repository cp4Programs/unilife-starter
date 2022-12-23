import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CitiesCard from './CitiesCard'

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
        <div>
            <h1>Student accomodations in our top cities</h1>
            <div>
                {
                    cities.map((item) => {
                        return <CitiesCard cities={item} />

                        // <p key={item.id}>{item.name}</p>
                    })
                }

            </div>
        </div>
    )
}

export default TopCities