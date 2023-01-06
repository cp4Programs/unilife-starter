import React, { useState } from 'react'
import '../styles/homedetails.css'

function HomeDetailsImages({ homeDetails }) {
    const [images, setImages] = useState()
    console.log(homeDetails[0].images[1])

    return (
        <div>
            <img src={homeDetails[0]?.images[1]} />
            <img src={homeDetails[0]?.images[2]} />
            <img src={homeDetails[0]?.images[3]} />
            <img src={homeDetails[0]?.images[4]} />
        </div>
    )
}

export default HomeDetailsImages