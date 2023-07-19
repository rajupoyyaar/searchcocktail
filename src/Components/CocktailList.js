import React,{useContext} from "react"
import {Link} from "react-router-dom"
import {AppContext} from "../context"
import Loading from "./Loading"

function CocktailList() {
    const {loading,cocktail} = useContext(AppContext)

    const cocktailEl = cocktail.map(drink => {
        const {id,image,name,info,glass} = drink
        return (
            <div className="cocktail-container" key={id}>
                <img src={image} alt={name}/>
                <h4>{name}</h4>
                <Link to={`/cocktail/${id}`} className="btn">Details</Link>
            </div>
        )
    })

    if(loading){
        return <Loading />
    }
    if(cocktail.length < 1){
        return <h2>No Search Result...</h2>
    }

    return(
        <div>
            {cocktailEl}
        </div>
    )
}

export default CocktailList