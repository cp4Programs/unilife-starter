import React from 'react'
import '../styles/footer.css'


function Footer() {

    return (
        <div className="footer-container">
            <div className="contacts">
                <div className="sign-up">
                    <p>Keep in touch</p>
                    <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed</p>
                    <input placeholder="email" type="email" />
                </div>
                <div className="social-media">
                    <p>Let's Socialize</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div className="copy-rights">
                <div>
                    <p>About us</p>
                    <p>Terms and conditions</p>
                    <p>Privacy & Cookie Policies</p>
                </div>
                <div>
                    <p>2022</p>
                    <p>UniLife</p>
                </div>
            </div>
        </div>
    )

}

export default Footer