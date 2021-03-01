import { Route, Switch } from "react-router-dom";
import SearchResult from "./searchResult";
import Startpage from "./startpage";

function Main() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Startpage} />
                <Route path="/searchResult" component={SearchResult} />

            </Switch>
        </div>
    );
}

export default Main;