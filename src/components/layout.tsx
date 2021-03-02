import Header from './header';
import Main from './main';
import Footer from './footer';
import { Component } from 'react';

interface Props { }
interface State {
   drinks: Cocktails[];
}
class Layout extends Component<Props, State> {
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
                  this.setState({ drinks: data.drinks})
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
            <Header 
               delay={500}
               onChange={this.handleNewSearchValue}
            />
            <Main />
            <Footer />
         </div >
      );
   }
}

export default Layout;

export interface Cocktails {
   strDrink: string,
   strGlass: string,
   strDrinkThumb: string,
   strIngredient: string,
   strMeasure: string,
   strInstructions: string
}