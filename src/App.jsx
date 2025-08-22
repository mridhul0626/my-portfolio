import React from 'react'
import photo from "./image/image.jpg"

const App = () => {
  return (
    <div>
      <div id="header">
        <h1>my portfolio</h1>
        <navbar id="nav">
          <a href="">home</a>
          <a href="">about</a>
          <a href="">portfolio</a>
          <a href="">contact</a>
        </navbar>
      </div>
      <div id="content">
        <div id="image"><img src={photo} alt="" id="image" /></div>
        <container id="about" classname="py-5">
          <h1>About us</h1>
          <h4>python full stack <span>developer</span></h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fuga unde labore repellat harum porro beatae maiores in libero vero!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fuga unde labore repellat harum porro beatae maiores in libero vero!</p>
          <button id="button">contact me</button>
        </container>
      </div>
      <div id="footer">
        <h1>my portfolio</h1>
      </div>
    </div>
  )
}

export default App