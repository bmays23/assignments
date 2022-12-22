import React from "react"

export default function Post(props) {

    function deleteMeme(event) {
        event.preventDefault()
        props.deleteMeme()
        }

    function editMeme(event) {
        event.preventDefault()
        props.editMeme()
        }
  
    return (
        <div>
            <div className="meme">
                <img src={props.randomImage} className="post-image"></img>
                <h1 className="meme--text top">{props.topText}</h1>
                <h1 className="meme--text bottom">{props.bottomText}</h1>     
            
            </div>

            <div className="post--buttons">
            <button className="save--button" onClick={editMeme}>Edit Me</button>
            <button className="save--button" onClick={deleteMeme}>Delete Me</button>
            </div>
        </div>
    )
}