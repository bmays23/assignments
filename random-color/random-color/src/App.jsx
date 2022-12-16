import React, { useEffect } from "react"


export default function App() {
  const [color, setColor] = React.useState({hex: ''})



  React.useEffect(function() {
//    console.log("Effect ran")
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(res => res.json())
        .then(data => setColor(data.colors))
        
}, [])

  console.log(color)

  const randomColor = () => {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    .then(res => res.json())
    .then(data => setColor(data.colors))
  }
  
return (
  <div style={{backgroundColor: `#${color[0]?.hex}`}} className="background">
      <button onClick={randomColor}>Click Here</button>
  </div>
)
}

