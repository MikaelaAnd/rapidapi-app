import StartHeader from './startHeader';
import ResultHeader from './resultHeader';
import { Route, Switch } from 'react-router-dom';
import { ChangeEvent, Component } from 'react';

interface Props {
    onChange: (value: string) => void;
 }
interface State {
    value: string;
}

class Header extends Component<Props, State> {
    state: State = { value: '' }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: event.target.value })
    }

    componentDidUpdate(_:Props) {
        
    }

    render() {
        return (
            <div>
                <input
                    placeholder="Search cocktail by name or ingredient"
                    onChange={this.handleChange}
                />
                <Switch>
                    <Route exact path="/" component={StartHeader} />
                    <Route path="/SearchResult" component={ResultHeader} />
                </Switch>
            </div>
        );
    }
}

export default Header;