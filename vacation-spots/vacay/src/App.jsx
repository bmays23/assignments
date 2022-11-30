import React from "react"
import Spot from "./Spot"
import data from "./data"

export default function App() {

    const spots = data.map(item => {
        return (
            <Spot
                key={item.id}
                item={item}
            />
            
        )
    })

    return (
        <div>
            <section className="list">
                {spots}
            </section>
        </div>
    )
}