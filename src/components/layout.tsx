import { Component } from 'react';
import Header from './header';
import Main from './main';

interface Props { }

interface State {
   drinks: Cocktail[];
   showStartPageStyle: boolean;
}
class Layout extends Component<Props, State> {
   private readonly COCKTAIL_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.'

   state: State = {
      drinks: [],
      showStartPageStyle: true
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
            this.toggleInput()
         })
         .catch(function (err) {
            console.log('Fetch Error :-S', err);
         });
   }

   // Decides which input field to display 
   toggleInput() {
      if (this.state.drinks == []) {
         this.setState({ showStartPageStyle: true })
      } else {
         this.setState({ showStartPageStyle: false })
      }
   }

   render() {
      return (
         <div>
            <Header
               delay={500}
               onChange={this.handleNewSearchValue}
               toggleInputStyle={this.state.showStartPageStyle}
            />
            <Main
               drinks={this.state.drinks}
               toggleBackgroundStyle={this.state.showStartPageStyle}
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
   strIngredient1: string,
   strIngredient2: string,
   strIngredient3: string,
   strIngredient4: string,
   strIngredient5: string,
   strIngredient6: string,
   strIngredient7: string,
   strIngredient8: string,
   strIngredient9: string,
   strIngredient10: string,
   strIngredient11: string,
   strIngredient12: string,
   strIngredient13: string,
   strIngredient14: string,
   strIngredient15: string,
   strMeasure1: string,
   strMeasure2: string,
   strMeasure3: string,
   strMeasure4: string,
   strMeasure5: string,
   strMeasure6: string,
   strMeasure7: string,
   strMeasure8: string,
   strMeasure9: string,
   strMeasure10: string,
   strMeasure11: string,
   strMeasure12: string,
   strMeasure13: string,
   strMeasure14: string,
   strMeasure15: string,
   strInstructions: string
}
