import React, { useEffect, useState } from 'react'
import BannerText from '../components/BannerText'
import axios from 'axios'
import AllCitiesButton from '../components/AllCitiesButton'




function SeeAllCitiesPage() {

    const [allCities, setAllCities] = useState([])

    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/cities?limit=20&page=1`)
            .then(res => {
                console.log(res.data.response)
                setAllCities(res.data.response)
            })
            .catch(err => console.log(err))
    }, [])

    const buttonContainer = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        justifyItems: 'center',
        margin: '24px'
    }
    const allCitiesContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        padding: '40px'
    }

    return (
        <div>

            <BannerText title="Search Accommodation" text="Whatever you’re after, we can help you find the right student accommodation for you. " />
            <div style={allCitiesContainer}>
                <h1>Search by City</h1>
                <div style={buttonContainer}>
                    {
                        allCities.map((item) => {
                            return <AllCitiesButton allCities={item} />
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default SeeAllCitiesPage