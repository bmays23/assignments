import React from "react"
import BlogPost from "./BlogPost"
import data from "./data"

export default function BlogList() {
    
    const posts = data.map(item => {
        return (
            <BlogPost 
                key={item.id}
                item={item}
            />
            
        )
    })

    return (
        <div className="list--section">
            <section>
                {posts}
            </section>
        </div>
    )
}