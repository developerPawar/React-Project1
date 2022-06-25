import React from "react"
import reactlogo from "../images/react-logo.png"

export default function Navbar(){
    return(
        <nav className="nav-container">
            <img src={reactlogo} alt="react-logo" className="logo-styling"></img>
            <span className="nav-title">ReactFacts</span>
            <span className="nav-sub-title">React Course - Project 1</span>
        </nav>    
    )
}