import React from 'react'
import { MdScreenSearchDesktop, MdOutlineReceiptLong } from "react-icons/md";
import { VscChecklist } from "react-icons/vsc"
// import '../styles/homepage.css'


function MidSectionContent() {

    return (
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


    )
}

export default MidSectionContent