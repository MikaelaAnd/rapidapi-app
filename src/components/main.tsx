import { Route, Switch } from "react-router-dom";
import SearchResult from "./searchResult";
import Startpage from "./startpage";

function Main() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Startpage} />
                <Route path="/searchResult" component={SearchResult} />
                // Tillfällig error boundery : )
                <p>Du har kört fast!!!!</p>
            </Switch>
        </div>
    );
}

export default Main;