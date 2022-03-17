import React from "react"
import {ReactComponent as Logo} from "../images/logo.svg"
import Hamburger from "../images/icon-hamburger.svg"
import Arrow from "../images/icon-arrow-down.svg"

export default function Navbar(){
    function display(){
        var links = document.getElementsByClassName("links")[0];
        if(links.style.display === "block"){
            links.style.display = "none";
        }else{
            links.style.display = "block";
        }

    }
    return(
        <div className="topSection">
            <nav className="navBar">
                <Logo className="logo" fill="#FFF" />
                <div className="links">
                    <section className="flexContain">
                        <a href="#" className="headerLinks">About</a>
                        <a href="#" className="headerLinks">Services</a>
                        <a href="#" className="headerLinks">Projects</a>
                    </section>
                    <button className="contactButton">CONTACT</button>
                </div>
                <button className="icon" onClick={display}>
                    <img className="hamBurger" src={Hamburger} />
                </button>    
            </nav>
            <h1>WE ARE CREATIVES</h1>
            <img className="arrowDown" src={Arrow} />
            
        </div>
    )
}