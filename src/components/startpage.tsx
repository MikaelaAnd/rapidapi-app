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
                <input placeholder="search"></input>
            </Link>
            <p className="search-element"></p>
        </div>
    );
} 
getRandomCocktail();

function displayRandomCocktail(cocktail: any) {
    console.log(cocktail.drinks[0].strDrink);

let drinkSection = document.querySelector('.search-element');

let drinkName = document.createElement('p');
drinkName.innerHTML = cocktail.drinks[0].strDrink;

drinkSection?.appendChild(drinkName);
}



export default Startpage;