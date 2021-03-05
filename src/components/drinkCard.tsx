import { Component, CSSProperties } from "react"
import { Link } from "react-router-dom"
import { noTextDecoration } from "../css"
import { Cocktail } from "./layout"


interface Props {
    drinkCard: Cocktail;
}
class DrinkCard extends Component<Props> {
    description = this.props.drinkCard.strDrink;

    render() {
        return (
            <Link
                to={"/drinkRecipe/" + this.props.drinkCard.idDrink}
                style={noTextDecoration}
            >
                <div style={imageContainer}>
                    <img
                        src={this.props.drinkCard.strDrinkThumb}
                        style={image}
                        alt={this.description}
                    />
                    <span>{this.props.drinkCard.strDrink} </span>
                </div>
            </Link>
        )
    }
}

const imageContainer: CSSProperties = {
    backgroundColor: 'white',
    paddingBottom: '1rem',
    textAlign: 'center',
    fontSize: '1.3rem',
    borderRadius: '.5rem',
}

const image: CSSProperties = {
    width: '100%',
    objectFit: 'cover',
}

export default DrinkCard;