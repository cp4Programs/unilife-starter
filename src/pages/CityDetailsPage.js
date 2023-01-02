import React, { useEffect, useState } from 'react'
import BannerText from '../components/BannerText'
import Search from '../components/Search.js'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CityDetailsCard from '../components/CityDetailsCard'

function CityDetails() {

    const cityId = useParams()

    const [cities, setCities] = useState([])

    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/cities`)
            .then(res => {
                console.log(res.data.response)
                setCities(res.data.response.slice(0, 9))
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div>
            <BannerText title="Search Accommodation" text="Whatever you’re after, we can help you find the right student accommodation for you. " />
            <Search />

            <p>City Details for <CityDetailsCard citiesCard={cities} /></p>

        </div>

    )

}

export default CityDetails