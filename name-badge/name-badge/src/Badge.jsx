import React from "react"


export default function Badge(props) {
    return (
        <div className="badge-container">
            <h2 className="badge-header">Badge:</h2>
            <br/>
            <p className="badge-name">{`Name: ${props.info.firstName} ${props.info.lastName}`} </p>
            <p>Phone: {props.info.phone}</p>
            <p>Place of Birth: {props.info.birthplace}</p>
            <p>Email: {props.info.email}</p>
            <p>Favorite Food: {props.info.favoriteFood}</p>
            <br/>
            <textarea className="badge-textarea" rows="5" value={props.info.description}/>
        </div>
       
    )
}