import React,{useState,useEffect} from "react"
const AppContext = React.createContext()

function ContextProvider({children}) {
    const [loading,setLoading] = useState(true)
    const [searchTerm,setSearchTerm] = useState("a")
    const [cocktail,setCocktail] = useState([])
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

    const fetchCocktail = async() => {
        try{
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            const {drinks} = data
            if(drinks){
                const newCocktails = drinks.map(drink => {
                    const {idDrink,strAlcoholic,strDrink,strDrinkThumb,strGlass} = drink
                    return {
                        id : idDrink,
                        info : strAlcoholic,
                        name : strDrink,
                        image : strDrinkThumb,
                        glass : strGlass,
                    }
                })
             setCocktail(newCocktails)   
            } else {
                setCocktail([])
            }
            setLoading(false)
        }
        catch(error){
            console.log(error)
            setLoading(false)
        }
        
    }

    useEffect(()=>{
        fetchCocktail()
    },[searchTerm])

    return(
        <AppContext.Provider value={{loading,cocktail,searchTerm,setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}

export {ContextProvider, AppContext}