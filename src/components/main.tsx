import { Route, Switch } from "react-router-dom";
import DrinkItem from "./drinkItem";
import SearchResult from "./searchResult";
import Startpage from "./startpage";
import './CSS/startPage.css';

function Main() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Startpage} />
                <Route path="/searchResult" component={SearchResult} />     
                <Route path="/drinkItem" component={DrinkItem} />

            </Switch>
        </div>
    );
}

export default Main;