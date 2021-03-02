import { Link } from "react-router-dom";
import "./searchResult.css";


function getRandomCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
            displayRandomCocktail(data);
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

function Startpage() {
    return (
        <div>
            <Link to="/searchResult">
                <button onClick={getRandomCocktail}>
                    Get random drink
                </button>
            </Link>
        </div>
    );
} 

function displayRandomCocktail(cocktail: any) {
    console.log(cocktail.drinks[0].strDrink);

let drink = document.querySelector('.search-element');
let drinkInstructions = document.querySelector('.instructions');
let drinkIngredients = document.querySelector('.ingredients');
let drinkPhoto = document.querySelector('.drink-photo');

let drinkName = document.createElement('h3');
let img = document.createElement('img');
let instructions = document.createElement('p');
let ingredients1 = document.createElement('span');
let ingredients2 = document.createElement('span');
let ingredients3 = document.createElement('span');
let ingredients4 = document.createElement('span');
let ingredients5 = document.createElement('span');
let ingredients6 = document.createElement('span');
let ingredients7 = document.createElement('span');
let ingredients8 = document.createElement('span');
let ingredients9 = document.createElement('span');
let ingredients10 = document.createElement('span');

drinkName.innerHTML = cocktail.drinks[0].strDrink;
img.src = cocktail.drinks[0].strDrinkThumb;
instructions.innerHTML = cocktail.drinks[0].strInstructions;
ingredients1.innerHTML = cocktail.drinks[0].strIngredient1;
ingredients2.innerHTML = cocktail.drinks[0].strIngredient2;
ingredients3.innerHTML = cocktail.drinks[0].strIngredient3;
ingredients4.innerHTML = cocktail.drinks[0].strIngredient4;
ingredients5.innerHTML = cocktail.drinks[0].strIngredient5;
ingredients6.innerHTML = cocktail.drinks[0].strIngredient6;
ingredients7.innerHTML = cocktail.drinks[0].strIngredient7;
ingredients8.innerHTML = cocktail.drinks[0].strIngredient8;
ingredients9.innerHTML = cocktail.drinks[0].strIngredient9;
ingredients10.innerHTML = cocktail.drinks[0].strIngredient10;


drinkInstructions?.appendChild(instructions);
drinkPhoto?.appendChild(img);
drink?.appendChild(drinkName);
drinkIngredients?.appendChild(ingredients1);
drinkIngredients?.appendChild(ingredients2);
drinkIngredients?.appendChild(ingredients3);
drinkIngredients?.appendChild(ingredients4);
drinkIngredients?.appendChild(ingredients5);
drinkIngredients?.appendChild(ingredients6);
drinkIngredients?.appendChild(ingredients7);
drinkIngredients?.appendChild(ingredients8);
drinkIngredients?.appendChild(ingredients9);
drinkIngredients?.appendChild(ingredients10);
}


export default Startpage;