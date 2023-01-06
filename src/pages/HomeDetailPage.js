import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import HomeDetailsImages from '../components/HomeDetailsImages'
import HomeDetailsLocation from '../components/HomeDetailsLocation'
import '../styles/homedetails.css'

function HomeDetailPage() {
    const { cityId } = useParams()
    const [homeDetails, setHomeDetails] = useState()

    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
            .then(res => {
                setHomeDetails(res.data.response)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="home-details-page-container">
            <div className="home-details-lh-container">
                <HomeDetailsImages homeDetails={homeDetails} />
            </div>
            <div className="home-details-rh-container">
                <HomeDetailsLocation homeDetail={homeDetails} />
            </div>
        </div>
    )
}

export default HomeDetailPage