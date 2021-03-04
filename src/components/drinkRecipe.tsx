import { Component, CSSProperties } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Cocktail } from "./layout";

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
                console.log(this.state.drink)
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

    }

    render() {
        return (
            <div style={rootStyle}>
                <div style={imageContainer}>
                    <img src={this.state.drink[0]?.strDrinkThumb} style={image} alt='' />
                </div>
                <div style={recipeContainer} >
                    <h2>
                        {this.state.drink[0]?.strDrink}
                    </h2>
                    <p>{this.state.drink[0]?.strIngredient}</p>
                    <p>
                        {this.state.drink[0]?.strInstructions}
                    </p>
                </div>
            </div>
        );
    }
}

const rootStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10rem 4rem 4rem 4rem',
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

const recipeContainer: CSSProperties = {
    width: '40%',
    objectFit: 'cover',
    textAlign: 'justify',
}

export default withRouter(DrinkRecipe); 