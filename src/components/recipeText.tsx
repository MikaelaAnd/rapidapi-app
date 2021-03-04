import { CSSProperties } from "react";
import { Cocktail } from "./layout";


interface Props {
    drink: Cocktail[]
}

function RecipeText(props: Props) {


    /*
        for (let i = 1; i < 16; i++) {
            const measurement = 'strMeasure' + [i];
            const ingredients = 'strIngredient' + [i];
    
        }
    */

    return (
        <div style={recipeContainer} >
            <h2>
                {props.drink[0]?.strDrink}
            </h2>
            
                <ul style={listStyle}>
                    <li>{props.drink[0]?.strIngredient1}</li>
                    <li>{props.drink[0]?.strIngredient2}</li>
                    <li>{props.drink[0]?.strIngredient3}</li>
                    <li>{props.drink[0]?.strIngredient4}</li>
                    <li>{props.drink[0]?.strIngredient5}</li>
                    <li>{props.drink[0]?.strIngredient6}</li>
                    <li>{props.drink[0]?.strIngredient7}</li>
                    <li>{props.drink[0]?.strIngredient8}</li>
                    <li>{props.drink[0]?.strIngredient9}</li>
                    <li>{props.drink[0]?.strIngredient10}</li>
                    <li>{props.drink[0]?.strIngredient11}</li>
                    <li>{props.drink[0]?.strIngredient12}</li>
                    <li>{props.drink[0]?.strIngredient13}</li>
                    <li>{props.drink[0]?.strIngredient14}</li>
                    <li>{props.drink[0]?.strIngredient15}</li>
                </ul>

           


            <p>
                {props.drink[0]?.strInstructions}
            </p>
        </div>

    )
}

const recipeContainer: CSSProperties = {
    width: '40%',
    objectFit: 'cover',
    textAlign: 'justify',
}

const listStyle: CSSProperties = {
    listStyleType: 'none'
}

export default RecipeText;