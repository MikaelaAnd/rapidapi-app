import { Component } from "react";
import { Link } from "react-router-dom";
import { noTextDecoration } from "../css";
import { Cocktail } from "./layout";
import './CSS/drinkCard.css';


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
                <div className="image-container-drinkCard">
                    <img
                        src={this.props.drinkCard.strDrinkThumb}
                        className="image-drinkCard"
                        alt={this.description}
                    />
                    <span>{this.props.drinkCard.strDrink} </span>
                </div>
            </Link>
        )
    }
}

export default DrinkCard;