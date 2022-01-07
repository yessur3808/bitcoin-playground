import React from "react"
import NavBar from "../components/nav-bar"


const PlaygroundLayout = ({ children }) => (
  <>
    <NavBar />
    <div className="container">
    { children }
    </div>
    
  </>
)
export default PlaygroundLayout