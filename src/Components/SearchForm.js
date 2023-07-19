import React, {useContext, useRef, useEffect} from "react"
import {AppContext} from "../context"

function SearchForm() {
    const {setSearchTerm} = useContext(AppContext)
    const searchValue = useRef('')

    useEffect(()=>{
        searchValue.current.focus()
    },[])

    function handleInputChange(e){
        setSearchTerm(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="query">Search Your Favourite Cocktail</label>
            <input type="text" id="query" onChange={handleInputChange} ref={searchValue}/>
        </form>
    )
}

export default SearchForm