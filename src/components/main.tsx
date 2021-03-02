import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DrinkItem from "./drinkItem";
import SearchResult from "./searchResult";
import Startpage from "./startpage";
import './CSS/startPage.css';


interface Props { }
interface State {
    drinks: Cocktails[];
}

class Main extends Component<Props, State> {
    private readonly COCKTAIL_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.'
    state: State = {
        drinks: []
    }

    // Search by user input
    handleNewSearchValue = (value: string) => {
        this.getRandomCocktail(value);
    };

    // Get cocktails from API
    async getRandomCocktail(searchValue: string) {
        fetch(this.COCKTAIL_URL + 'php?s=' + searchValue)
            .then(
                (response) => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then((data) => {
                        console.log(data.drinks[0].strDrink);
                        this.setState({ drinks: data.drinks })
                        console.log(this.state.drinks);
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Startpage
                            delay={500}
                            onChange={this.handleNewSearchValue}
                        />
                    </Route>
                    <Route path="/searchResult">
                        <SearchResult
                            delay={500}
                            onChange={this.handleNewSearchValue}
                        />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Main;

export interface Cocktails {
    strDrink: string,
    strGlass: string,
    strDrinkThumb: string,
    strIngredient: string,
    strMeasure: string,
    strInstructions: string
}