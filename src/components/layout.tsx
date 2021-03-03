import { Component } from 'react';
import Header from './header';
import Main from './main';

interface Props { }

interface State {
   drinks: Cocktail[]
}
class Layout extends Component<Props, State> {
   private readonly COCKTAIL_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.'

   state: State = {
      drinks: []
   }

   // Handle user input
   handleNewSearchValue = (value: string) => {
      this.getCocktailsFromAPI(value);
   };

   // Get cocktail from API
   getCocktailsFromAPI(searchValue: string) {
      fetch(this.COCKTAIL_URL + 'php?s=' + searchValue)
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
            this.setState({ drinks: data.drinks })
            console.log(this.state.drinks)
         })
         .catch(function (err) {
            console.log('Fetch Error :-S', err);
         });
   }

   render() {
      return (
         <div>
            <Header
               delay={500}
               onChange={this.handleNewSearchValue}
            />
            <Main
               drinks={this.state.drinks}
            />
         </div>
      );
   }
}

export default Layout;

export interface Cocktail {
   idDrink: string,
   strDrink: string,
   strGlass: string,
   strDrinkThumb: string,
   strIngredient: string,
   strMeasure: string,
   strInstructions: string
}
