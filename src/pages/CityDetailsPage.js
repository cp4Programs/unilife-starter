import React, { useEffect, useState } from 'react'
import BannerText from '../components/BannerText'
import Search from '../components/Search.js'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'

function CityDetails() {

    const { cityId } = useParams()
    const [propertiesData, setPropertiesData] = useState([])


    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
            .then(res => {
                setPropertiesData(res.data.response)
                console.log(res.data.response)
            })
            .catch(err => console.log(err))

    }, [])


    return (
        <div >
            <BannerText title="Search Accommodation" text="Whatever you’re after, we can help you find the right student accommodation for you. " />
            <Search />
            <div className="property-card-container">
                {
                    propertiesData?.map(item => {
                        return <PropertyCard property={item} />
                    })
                }

            </div>

        </div >

    )

}

export default CityDetails