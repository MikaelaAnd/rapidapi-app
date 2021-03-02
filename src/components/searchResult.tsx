import { ChangeEvent, Component } from "react";
import React from "react";
import { Link, Route, RouteComponentProps, withRouter } from "react-router-dom";
import ResultHeader from './resultHeader';
import './CSS/searchResultPage.css';
import DrinkItem from "./drinkItem";
import ErrorBoundary from "./errorBoundary";

interface Props {
    onChange: (value: string) => void;
    delay?: number;
}
interface State {
    value: string;
}

interface Props extends RouteComponentProps {

}

class SearchResult extends Component<Props, State> {
    timer?: NodeJS.Timeout;
    state: State = { value: '' }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: event.target.value })
    }

    componentDidUpdate(_: Props, prevState: State) {
        //const { onChange } = this.props;
        //onChange(this.state.value)
        const { delay, onChange } = this.props;
        const { value } = this.state;

        if (value && prevState.value !== value) {
            if (delay) {
                if (this.timer) clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    onChange(this.state.value)
                }, delay);
            } else {
                onChange(this.state.value);
            }
        }
    }

    render() {
        return (
            <div className="background-image-result">
                <ResultHeader />
                <div className="contentContainer">
                    <input
                        placeholder="Search cocktail by name or ingredient"
                        onChange={this.handleChange}
                    />

                    <Route path="./drinkItem" component={DrinkItem} />
                    <ErrorBoundary>
                    <Link to="/drinkItem">
                        <p>Här kommer en del bilder</p>
                        <p>Här kommer en del bilder</p>
                        <p>Här kommer en del bilder</p>
                        <p>Här kommer en del bilder</p>
                    </Link>
                    </ErrorBoundary>
                </div>
            </div>
        );
    }
}

export default withRouter(SearchResult);