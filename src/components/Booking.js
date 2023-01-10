import React from 'react'
import { BiBuildingHouse } from 'react-icons/bi'

function Booking() {


    return (
        <div>
            <div>
                <h1>Book a Viewing</h1>
                <BiBuildingHouse />
            </div>
            <p>Address</p>
            <div>
                <form>
                    <div>
                        <label for="name">name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name"></input>
                    </div>

                    <div>
                        <label for="email">email:</label>
                        <input type="email" id="email" name="email" placeholder="email"></input>
                    </div>

                    <div>
                        <label for="rel">Phone Number:</label>
                        <input type="tel" id="rel" name="tel" placeholder="Enter your phone number"></input>
                    </div>

                    <div>
                        <label for="message">Message:</label>
                        <input type="text" id="message" name="message" placeholder="Enter your message"></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Booking