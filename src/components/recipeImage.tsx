import { Cocktail } from "./layout";
import './CSS/drinkRecipe.css'
interface Props {
    drink: Cocktail[]
}

function RecipeImage(props: Props) {
    return (
        <div className="recipeImageContainer">
            <img src={props.drink[0]?.strDrinkThumb} className="recipeImage" alt='Drink' />
        </div>
    )
}

export default RecipeImage;