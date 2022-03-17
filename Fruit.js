import React from "react"

export default function Fruit(props){
    return(
        <section className="fruitSection">
            <h3>{props.header}</h3>
            <p>{props.info}</p>
        </section>
    )
}