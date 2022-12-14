import React from "react"

export default function Badge() {
    return (
        <div className="form-container">
            <form className="badge">
                <h2 className="title">Badge:</h2>
                <input
                    type="text"
                    placeholder="First Name"

                />
                <input
                    type="text"
                    placeholder="Last Name"
                
                />
                <br />

                <input
                    type="email"
                    placeholder="Email"
                
                />
                <input
                    type="text"
                    placeholder="Place of Birth"
                
                />
                <br />

                <input
                    type="tel"
                    placeholder="Phone"
                
                />
                <input
                    type="text"
                    placeholder="Favorite Food"
                
                />
                <br />

                <textarea
                    placeholder="Tell us about yourself"
                />
                <br />
                <br />

                <button>Submit</button>
            </form>
        </div>
    )
}