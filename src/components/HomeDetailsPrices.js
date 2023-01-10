import React from 'react'
import { FaPoundSign } from 'react-icons/fa'

function HomeDetailsPrices({ propertyData }) {
    console.log(propertyData)


    return (

        <div className="hd-prices-container">
            <div >
                <h1>Bedroom Prices</h1>
                <br></br>
                <br></br>
                <div className="bedroom-prices-table">
                    <div className="top-row-line">
                        <p>Bedroom 1</p>
                        <p><FaPoundSign /> {propertyData?.bedroom_prices?.bedroom_one} per week</p>
                    </div>
                    <div className="row-lines">
                        <p>Bedroom 2</p>
                        <p><FaPoundSign /> {propertyData?.bedroom_prices?.bedroom_two} per week</p>
                    </div>
                    <div className="row-lines">
                        <p>Bedroom 3</p>
                        <p><FaPoundSign /> {propertyData?.bedroom_prices?.bedroom_three} per week</p>
                    </div>
                    <div className="row-lines">
                        <p>Bedroom 4</p>
                        <p><FaPoundSign /> {propertyData?.bedroom_prices?.bedroom_four} per week</p>
                    </div>
                    <div className="row-lines">
                        <p>Bedroom 5</p>
                        <p><FaPoundSign /> {propertyData?.bedroom_prices?.bedroom_five} per week</p>
                    </div>
                    <div className="row-lines">
                        <p>Bedroom 6</p>
                        <p><FaPoundSign /> {propertyData?.bedroom_prices?.bedroom_six} per week</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDetailsPrices