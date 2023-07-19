import React,{useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import Loading from "../Components/Loading"

function SingleCocktail() {
    const {id} = useParams()
    const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
    const [loading,setLoading] = useState(true)
    const [cocktailDetail,setCocktailDetail] = useState('')

    const fetchCocktail = async()=>{
        try {
            const response = await fetch(`${url}${id}`)
            const data = await response.json()
            const {drinks} = data
            if(drinks) {
                const {strAlcoholic:alcoholic, strDrink:name, strDrinkThumb:image,
                strGlass:glass, strIngredient1,strIngredient2,strIngredient3,strIngredient4} = drinks[0]
                const ingredient =  [strIngredient1,strIngredient2,strIngredient3,strIngredient4]
                const newCocktail = {
                    alcoholic,
                    name,
                    image,
                    glass,
                    ingredient
                }
                setCocktailDetail(newCocktail)
            }
            else{
                setCocktailDetail('')
            }
        setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchCocktail()
    },[id])

    const {image,alcoholic,glass,name,ingredient} = cocktailDetail

    if(loading){
        return <Loading />
    }
    if(!cocktailDetail){
        return <h3>No Such Cocktail Detail</h3>
    }
    return(
        <div className="single-cocktail">
            <img src={image} alt={name} />
            <span>
               <h3>{name}</h3>
               <p className="alcoholic">{alcoholic}</p>
            </span>
            <p className="glass">Glass: {glass}</p>
            <h3>Ingridients : </h3>
            {ingredient.map((item,i) => <p key={i}>{item}</p>)}
        </div>
    )
}

export default SingleCocktail