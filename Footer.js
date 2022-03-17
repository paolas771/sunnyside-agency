import React from "react"
import {ReactComponent as Logo} from "../images/logo.svg"
import facebook from "../images/icon-facebook.svg"
import instagram from "../images/icon-instagram.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
export default function Footer(){
    return(
        <footer>
            <Logo className="footerLogo" fill="#2C7566"/>
            <div className="footerLinks">
                <a href="#" className="footerLinksName">About</a>
                <a href="#" className="footerLinksName">Services</a>
                <a href="#" className="footerLinksName">Projects</a>
            </div>
            <div className="smLogo">
                <img src={facebook}  alt="facebook logo" />
                <img src={instagram} alt="instagram logo" />
                <img src={twitter} alt="twitter logo" />
                <img src={pinterest} alt="pinterest logo" />
            </div>
        </footer>
    )
}