
import { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Cocktail } from "./layout";
import RecipeImage from "./recipeImage";
import RecipeText from "./recipeText";
import './CSS/drinkRecipe.css'
import ErrorBoundary from "./errorBoundary";

interface Props extends RouteComponentProps<{ id: string }> { }
interface State {
    drink: Cocktail[]
}
class DrinkRecipe extends Component<Props, State> {
    state: State = { drink: [] }

    componentDidMount() {
        const drinkId = this.props.match.params.id

        // Get specific drink from API
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drinkId)
            .then(
                (response) => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    return response.json()
                }
            )
            .then((data) => {
                this.setState({ drink: data.drinks })
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }

    render() {
        return (
            <div className="drinkRecipeContainer">
                <ErrorBoundary>
                    <RecipeImage
                        drink={this.state.drink}
                    />
                </ErrorBoundary>
                <ErrorBoundary>
                    <RecipeText
                        drink={this.state.drink}
                    />
                </ErrorBoundary>  
            </div>
        );
    }
}

export default withRouter(DrinkRecipe); 