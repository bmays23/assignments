import React from "react"
import { useState } from 'react'
import Badge from "./Badge"

export default function App(props) {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email:"",
            birthplace: "",
            phone:"",
            favoriteFood:"",
            description:""
        }
    )

    const [nameBadges, setNameBadges] = useState(()=>[])

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
    event.preventDefault()
    setNameBadges(prevState => ([
      ...prevState,
      formData
    ]))
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      birthplace: "",
      phone: "",
      favoriteFood: "",
      description: ""
    })
  }

  const nameList = nameBadges.map(info =>(
    <Badge
      key = {info.email}
      info = {info}
    />  
    )
  )

    return (
        <div className="form-container">   
            <form onSubmit={handleSubmit} className="form">
                <h2 className="title">Badge:</h2>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input
                    type="text"
                    placeholder="Place of Birth"
                    onChange={handleChange}
                    name="birthplace"
                    value={formData.birthplace}
                />
                <br />
                <input
                    type="tel"
                    placeholder="Phone"
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                />
                <input
                    type="text"
                    placeholder="Favorite Food"
                    onChange={handleChange}
                    name="favoriteFood"
                    value={formData.favoriteFood}
                />
                <br />
                <textarea
                    placeholder="Tell us about yourself"
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                    className="main-textarea"
                />
                <br />
                <br />
                <button>Submit</button>
                {nameList}
            </form>
            
          
        </div>  
    )
}