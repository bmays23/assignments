import React from "react"

export default function BlogPost(props) {
    return (
        <div className="list--item">
            <h1 className="list--title">{props.item.title}</h1>
            <h2 className="list--subTitle">{props.item.subTitle}</h2>
            <h3 className="list--authorDate">Posted by {props.item.author} on {props.item.date}</h3>
        </div>
    )
}