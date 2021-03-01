import { Route, Switch } from "react-router-dom";
import SearchResult from "./searchResult";
import Startpage from "./startpage";
import './startPage.css';

function Main() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Startpage} />
                <Route path="/searchResult" component={SearchResult} />
     
                <p>Du har kört fast!!!!</p>
            </Switch>
        </div>
    );
}

export default Main;