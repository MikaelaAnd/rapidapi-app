import { Suspense } from "react";
import { Route, Switch, } from "react-router-dom";
import DrinkRecipe from "./drinkRecipe";
import { Cocktail } from "./layout";
import MasterView from "./masterView";
interface Props {
    drinks: Cocktail[];
    toggleBackgroundStyle: boolean;
}

function Main(props: Props) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <Switch>
                    <Route exact path="/">
                        <MasterView
                            drinks={props.drinks}
                            toggleBackgroundStyle={props.toggleBackgroundStyle}
                        />
                    </Route>
                    <Route path="/drinkRecipe/:id">
                        <DrinkRecipe/>
                    </Route>
                </Switch>
            </div>
        </Suspense>
    );
}

export default Main;