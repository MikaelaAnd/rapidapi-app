import StartHeader from './startHeader';
import ResultHeader from './resultHeader';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from './errorBoundary';

function Header() {
    // (null as any).something;
    return (
        <div>
            <Switch>
                <ErrorBoundary>
                    <Route exact path="/" component={StartHeader} />
                    <Route path="/SearchResult" component={ResultHeader} />
                </ErrorBoundary>
            </Switch>
        </div>
    );
}

export default Header;