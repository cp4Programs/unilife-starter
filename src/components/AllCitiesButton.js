import React from 'react'
import { Link } from 'react-router-dom'



function AllCitiesButton({ allCities }) {
    // allCities from SeeAllCitiesPage //


    const buttonStyle = {
        margin: '8px',
        backgroundColor: '#ffffff',
        color: 'black',
        border: 'lightgrey 1px solid',
        width: '25vh',
        height: '5vh'
    }


    return (
        <div >
            <Link to={`/citydetails/${allCities._id}`}><button style={buttonStyle} key={allCities._id}>{allCities.name}</button></Link>
        </div >

    )
}

export default AllCitiesButton