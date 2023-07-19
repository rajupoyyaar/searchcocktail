import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return(
         <div className="nav-container">
            <h3>Cocktails</h3>
            <div>
              <Link to="/" className="link">Home</Link>
              <Link to="/about" className="link">About</Link>
            </div>
         </div>
    )
}

export default Navbar