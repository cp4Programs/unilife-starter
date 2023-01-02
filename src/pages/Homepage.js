import React from 'react'
import BannerText from '../components/BannerText'
import '../styles/homepage.css'
import { MdScreenSearchDesktop, MdOutlineReceiptLong } from "react-icons/md";
import { VscChecklist } from "react-icons/vsc"
import person from '../assets/person.png'
import TopCities from '../components/TopCities'
import Search from '../components/Search'



function Homepage() {


    const personImg = {
        backgroundImage: `url(${person})`,
        height: '37vh',
        width: '50%',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 'auto'
    }

    return (
        <div>
            <div>
                <BannerText title="Find Student Homes With Bills Included" text="A Simple and Faster Way to Search for Student Accomodation" />
            </div>
            <div>
                <Search />
            </div>
            <div>
                <TopCities />
            </div>
            <div className="comparison-container">
                <div>
                    <p className="comparison-headline">Compare all inclusive student homes.</p>
                </div>
                <div className="compare-section">
                    <div className="compare-items">
                        <MdScreenSearchDesktop className="compare-icons" />
                        <p>Search</p>
                        <p>Find your dream home in the perfect area near your universt</p>
                    </div>
                    <div className="compare-items">
                        <VscChecklist className="compare-icons" />
                        <p>Compare</p>
                        <p>Compare student accommodation to find the right home for you.</p>
                    </div>
                    <div className="compare-items">
                        <MdOutlineReceiptLong className="compare-icons" />
                        <p>Bills Included</p>
                        <p>Bills are included in all rent prices. No hidden fees.</p>
                    </div>
                </div>

            </div>
            <div className="fav-sect-container">
                <div className="fav-sect-lh">
                    <div>
                        <h1 className="spacing">Best Selection</h1>
                        <p className="spacing">Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
                    </div>
                    <div>
                        <h1 className="spacing">Your favorite</h1>
                        <p className="spacing">Shortlist your favourite properties and send enquiries in one click.</p>
                    </div>
                    <input className="spacing" type="text" placeholder="search & compare" />
                </div>
                <div className="fav-sec-img" style={personImg}></div>
            </div>
        </div >
    )
}

export default Homepage