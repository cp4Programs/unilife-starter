import React from 'react'

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
                        <p></p>
                    </div>
                    <div className="row-lines">
                        <p>Bedroom 2</p>
                    </div>
                    <div className="row-lines">
                        <p>Bedroom 3</p>
                    </div>
                    <div className="row-lines">
                        <p>Bedroom 4</p>
                    </div>
                    <div className="row-lines">
                        <p>Bedroom 5</p>
                    </div>
                    <div className="row-lines">
                        <p>Bedroom 6</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDetailsPrices