import React from "react"
import { useState } from 'react'

export default function App() {
    const [formData, setFormData] = useState(
        {
            name: ""
        }
    )

    const [names, setNames] = useState(["Ashley"])

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        setNames(prevState => [...prevState, formData.name])
        setFormData( ({
          name:""
        }))
    }

    const listItem = names.map(function(name){
        return(
          <li>{name}</li>
        )
      })



    return (

        <div>
            <h1 className="title">Name Entry</h1>
            <h1 className="name">{formData.name}</h1>

            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder="Name Here"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                    className="input"
                />

                <br/>
                <br/>

                <button>Submit Name</button>
            </form>

            <ul>{listItem}</ul>

        </div>
        
    )


}   
   
    
  