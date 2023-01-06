import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import HomeDetailsImages from '../components/HomeDetailsImages'
import HomeDetailsLocation from '../components/HomeDetailsLocation'
import '../styles/homedetails.css'

function HomeDetailPage() {
    const { propertyId } = useParams()
    const [propertiesData, setPropertiesData] = useState()
    console.log(propertyId)

    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/properties/city/${propertyId}`)
            .then(res => {
                setPropertiesData(res.data.response)
                console.log(res.data.response)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="home-details-page-container">
            <div className="home-details-lh-container">
                <HomeDetailsImages />
            </div>
            <div className="home-details-rh-container">
                <HomeDetailsLocation />
            </div>
        </div>
    )
}

export default HomeDetailPage