import React from 'react'
import '../styles/footer.css'
import { RiFacebookCircleFill } from "react-icons/ri"
import { AiFillTwitterCircle } from "react-icons/ai"
import { IoLogoInstagram } from "react-icons/io"


function Footer() {

    return (
        <div className="footer-container">
            <div className="contacts">
                <div className="sign-up">
                    <h1 className="bullet-margins">Keep in touch</h1>
                    <p className="bullet-margins">Curious about new offerings? Sign up for our weekly newsletter and stay informed</p>
                    <input className="bullet-margins email" placeholder="Your Email" type="email" />
                </div>
                <div className="social-media-container">
                    <div className="social-media bullet-margins">
                        <h1 className="social-media-title">Let's Socialize</h1>
                        <div className="align-icons bullet-margins">
                            <RiFacebookCircleFill />  <p>Facebook</p>
                        </div>
                        <div className="align-icons bullet-margins">
                            <AiFillTwitterCircle /> <p>Twitter</p>
                        </div>
                        <div className="align-icons bullet-margins">
                            <IoLogoInstagram /> <p>Instagram</p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
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
        </div>
    )

}

export default Footer