import React from "react"

export default function Location(props) {
    return (
        <div className="location">
            <div className="location--container">
                <img src={props.item.imageUrl} className="pictures"/>
                <div className="location--description">
                    <h3>{props.item.location}</h3>
                    <h1 className="title">{props.item.title}</h1>
                    <h3>{props.item.startDate} - {props.item.endDate}</h3>
                    <p>{props.item.description}</p>
                    <line className="line"></line>
                </div>
            </div>
        </div>
    )}