import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import HomeDetailsImages from '../components/HomeDetailsImages'
import HomeDetailsLocation from '../components/HomeDetailsLocation'
import '../styles/homedetails.css'

function HomeDetailPage() {
    const { propertyId } = useParams()
    const [propertyData, setPropertyData] = useState([])


    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
            .then(res => {
                setPropertyData(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="home-details-page-container">
            <div className="home-details-lh-container">
                <HomeDetailsImages propertyData={propertyData} />
            </div>
            <div className="home-details-rh-container">
                <HomeDetailsLocation propertyData={propertyData} />
            </div>
        </div>
    )
}

export default HomeDetailPage