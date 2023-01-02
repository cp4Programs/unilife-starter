import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function AllCitiesButton({ allCities }) {

    // useEffect(() => {
    //     axios.get('https://unilife-server.herokuapp.com/cities')
    //         .then(res => {
    //             console.log(res.data.response)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

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
            <p>{`${allCities._id}`}</p>
            <a href={`citydetails/${allCities._id}`}><button style={buttonStyle} key={allCities._id}>{allCities.name}</button></a>
        </div >

    )
}

export default AllCitiesButton