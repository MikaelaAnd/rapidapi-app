import { Cocktail } from "./layout";
import './CSS/recipeText.css'

interface Props {
    drink: Cocktail[]
}

function RecipeText(props: Props) {
    return (
        <div className="drinkTextContainer" >
            <h2 className="drinkName">
                {props.drink[0]?.strDrink}
            </h2>
            
                <ul className="listStyle">
                    <li>{props.drink[0]?.strMeasure1} {props.drink[0]?.strIngredient1}</li>
                    <li>{props.drink[0]?.strMeasure2} {props.drink[0]?.strIngredient2}</li>
                    <li>{props.drink[0]?.strMeasure3} {props.drink[0]?.strIngredient3}</li>
                    <li>{props.drink[0]?.strMeasure4} {props.drink[0]?.strIngredient4}</li>
                    <li>{props.drink[0]?.strMeasure5} {props.drink[0]?.strIngredient5}</li>
                    <li>{props.drink[0]?.strMeasure6} {props.drink[0]?.strIngredient6}</li>
                    <li>{props.drink[0]?.strMeasure7} {props.drink[0]?.strIngredient7}</li>
                    <li>{props.drink[0]?.strMeasure8} {props.drink[0]?.strIngredient8}</li>
                    <li>{props.drink[0]?.strMeasure9} {props.drink[0]?.strIngredient9}</li>
                    <li>{props.drink[0]?.strMeasure10} {props.drink[0]?.strIngredient10}</li>
                    <li>{props.drink[0]?.strMeasure11} {props.drink[0]?.strIngredient11}</li>
                    <li>{props.drink[0]?.strMeasure12} {props.drink[0]?.strIngredient12}</li>
                    <li>{props.drink[0]?.strMeasure13} {props.drink[0]?.strIngredient13}</li>
                    <li>{props.drink[0]?.strMeasure14} {props.drink[0]?.strIngredient14}</li>
                    <li>{props.drink[0]?.strMeasure15} {props.drink[0]?.strIngredient15}</li>
                </ul>
            <p>
                {props.drink[0]?.strInstructions}
            </p>
        </div>
    )
}

export default RecipeText;