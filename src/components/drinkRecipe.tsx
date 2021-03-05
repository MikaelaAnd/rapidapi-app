import { Component, CSSProperties } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Cocktail } from "./layout";
import RecipeImage from "./recipeImage";
import RecipeText from "./recipeText";

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
            <div style={rootStyle}>
                <RecipeImage
                    drink={this.state.drink}
                />
                <RecipeText
                    drink={this.state.drink}
                />        
            </div>
        );
    }
}

const rootStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10rem 4rem 4rem 4rem',
}

export default withRouter(DrinkRecipe); 