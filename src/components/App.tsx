import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';

interface Props {}
interface State {
  images: CocktailPhoto[];
}
interface CocktailResponse {
  drinks: [];

}
class App extends Component<Props, State> {
  private readonly API_KEY = '1';
  private readonly COCKTAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='; // Kanske punkt på slutet
  
  
  state: State = {
    images: []
  }

  handleNewSearchValue = (value: string) => {
    this.fetchImagesFromApi(value);
  };

  
  async fetchImagesFromApi(searchValue: string) {
    try {
      const url = this.COCKTAILS_URL + searchValue;

      const response = await fetch(url, {
        headers: { 'Authorization': this.API_KEY }
      });
      
      const result: CocktailResponse = await response.json();
      this.setState({ images: result.drinks || [] })

    } catch (error: unknown) {
      console.error(error);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Layout 
          onChange={this.handleNewSearchValue}
        />
      </BrowserRouter>
    );
  }
}

export default App;

export interface CocktailPhoto {
  // drinks: [{drinkObject}]
  strDrink: string;
  //strGlass: string;
  //strInstructions: string;
  //strDrinkThumb: string;
  //strIngredient: []
  /*  "strIngredient1": "Galliano",
      "strIngredient2": "Ginger ale",
      "strIngredient3": "Ice",
      "strIngredient4": null,
      "strIngredient5": null,
      "strIngredient6": null,
      "strIngredient7": null,
      "strIngredient8": null,
  */
 //strMeasure: []
 /*   "strMeasure1": "2 1/2 shots ",
      "strMeasure2": null,
      "strMeasure3": null,
      "strMeasure4": null,
      "strMeasure5": null,
*/
}
