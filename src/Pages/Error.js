import React from "react"
import {Link} from "react-router-dom"

function Error() {
    return(
        <div>
            <h3>Oops! This is an dead end</h3>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default Error