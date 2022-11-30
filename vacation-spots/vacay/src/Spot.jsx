import React from "react"

export default function Spot(props) {

    let dollarSign
    if (props.item.price < 500) {
        dollarSign = "$"
    } else if (props.item.price > 500 && props.item.price < 1000) {
        dollarSign = "$$"
    } else if (props.item.price > 1000)
        dollarSign = "$$$"
    
 
    return (
        <div className="spot">
            
            <div className="dollar--badge">{dollarSign}</div>
            <img src={props.item.img} className="spot--images" />
            <span className="place">{props.item.place}</span>
            <span className="price">${props.item.price}</span>
            <span className="time">Best time to Visit: {props.item.timeToGo}</span>
        </div>
    )
}