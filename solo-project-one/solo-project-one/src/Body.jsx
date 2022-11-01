import React from "react"

export default function Body() {
    return (
        <main>
            <h1>Brittany Mays</h1>
            <h2 className="job-title">Web Developer</h2>
            <h3>brittanymays.website</h3>
            <button className="button">Email</button>
            <div className="body-container">
                <h2 className="about">About</h2>
                <p className="first-paragraph">I am an aspiring web developer currently attending VSchool. 
                </p>
                <h2 className="interests">Interests</h2>
                <p className="second-paragraph">All things anime related. Food. Game of Thrones. House of the Dragon. Starbies.</p>
            </div>
        </main>
    )
}