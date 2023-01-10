import React from 'react'

function ContactUs() {
    return (
        <div>
            <div>
                <h1>Contact Us</h1>
                <BiBuildingHouse />
            </div>
            <p>Feel free to contact us if you have any questions. Looking forward to hear from.</p>
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
                    <div>
                        <label for="option">Are you a...:</label>
                        <input type="option" id="option" name="option" placeholder="Student"></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs