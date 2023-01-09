import React, { useEffect, useState } from 'react'
import BannerText from '../components/BannerText'
import Search from '../components/Search.js'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import StudentLifeSection from '../components/StudentLifeSection'

function CityDetails() {

    const { cityId } = useParams()
    const [propertiesData, setPropertiesData] = useState([])
    const [studentLife, setStudentLife] = useState('')


    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
            .then(res => {
                setPropertiesData(res.data.response)

            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
            .then(res => {

                setStudentLife(res.data.data)
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
                        return <PropertyCard key={item._id} property={item} />
                    })
                }
            </div>
            <StudentLifeSection studentLifeData={studentLife} />
        </div >

    )

}

export default CityDetails