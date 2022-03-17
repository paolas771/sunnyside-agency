import React from "react"

export default function Description(props){
    return(
        <div className="information">
            <h2>{props.header}</h2>
            <p>{props.info}</p>
            <button className="learnButton">LEARN MORE</button>
            
        </div>
    )
}