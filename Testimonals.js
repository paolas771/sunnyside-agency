import React from "react"

export default function Testimonals(props){
    return(
        <section className="aTest">
            <img className="headshot" src={props.img} alt="Head Shot"/>
            <p className="opinion">{props.test}</p>
            <h3 className="name">{props.name}</h3>
            <p className="position">{props.position}</p>
        </section>
    )
}