import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import HomeDetailsImages from '../components/HomeDetailsImages'
import HomeDetailsLocation from '../components/HomeDetailsLocation'
import '../styles/homedetails.css'
import HomeDetailsDescription from '../components/HomeDetailsDescription'
import HomeDetailsKeyFeatures from '../components/HomeDetailsKeyFeatures'
import HomeDetailsPrices from '../components/HomeDetailsPrices'

function HomeDetailPage() {
    const { propertyId } = useParams()
    const [propertyData, setPropertyData] = useState([])


    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
            .then(res => {
                setPropertyData(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="home-details-page-container">
            <div className="hd-grid-row-1">
                <HomeDetailsImages propertyData={propertyData} />
                <HomeDetailsLocation propertyData={propertyData} />
            </div>
            <div className="hd-grid-row-2">
                <HomeDetailsDescription propertyData={propertyData} />
                <HomeDetailsPrices propertyData={propertyData} />
            </div>
            <div className="hd-grid-row-3">
                <HomeDetailsKeyFeatures propertyData={propertyData} />
            </div>
        </div>

    )
}

export default HomeDetailPage