import React from "react"
import Navbar from "./Navbar"
import Location from "./Location"
import data from "./data"

export default function App() {

    const locations = data.map(item => {
        return (
            <Location 
                key={item.id}
                item={item}
            />
            
        )
    })

    return (
        <div>
            <Navbar />
            <section className="location-list">
                {locations}
            </section>
            
    
        </div>
    )
}

