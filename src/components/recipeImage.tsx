import { CSSProperties } from "react";
import { Cocktail } from "./layout";

interface Props {
    drink: Cocktail[]
}

function RecipeImage(props: Props) {
    return (
        <div style={imageContainer}>
            <img src={props.drink[0]?.strDrinkThumb} style={image} alt='' />
        </div>
    )
}

const imageContainer: CSSProperties = {
    display: 'flex', 
    marginRight: '5rem',
    width: '40%'  
}

const image: CSSProperties = {
    width: '100%',
    objectFit: 'cover',
}

export default RecipeImage;