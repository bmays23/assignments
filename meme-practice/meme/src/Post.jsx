import React from "react"

export default function Post(props) {
  
    return (
        <div className="meme">
            <img src={props.randomImage}></img>
            <h1 className="topText">{props.topText}</h1>
            <h1 className="bottomText">{props.bottomText}</h1>       
            
        </div>
    )
}