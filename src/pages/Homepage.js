import React from 'react'
import BannerText from '../components/BannerText'
import '../styles/homepage.css'
import TopCities from '../components/TopCities'
import Search from '../components/Search'
import MidSectionContent from '../components/MidSectionContent';
import FavoriteSection from '../components/FavoriteSection'



function Homepage() {



    return (
        <div>
            <BannerText title="Find Student Homes With Bills Included" text="A Simple and Faster Way to Search for Student Accomodation" />
            <Search />
            <TopCities />
            <MidSectionContent />
            <FavoriteSection />
        </div >
    )
}

export default Homepage