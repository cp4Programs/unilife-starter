import React from 'react'
import { useParams } from 'react-router-dom'

function HomeDetailPage() {
    const { detailsId } = useParams()


    return (
        <div>HomeDetailPage</div>
    )
}

export default HomeDetailPage