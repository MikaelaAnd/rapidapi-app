import { ChangeEvent, Component } from 'react';
import { Link } from 'react-router-dom';
import { noTextDecoration } from '../css';
import "./CSS/header.css";

interface Props {
    onChange: (value: string) => void;
    delay?: number;
    toggleInputStyle: boolean;
}
interface State {
    value: string;
}


class Header extends Component<Props, State> {
    timer?: NodeJS.Timeout;
    state: State = { value: '' }

    // Save user input in 'value'
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: event.target.value }) 
    }

    // Update state
    componentDidUpdate(_: Props, prevState: State) {
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
            <div className="rootStyle">
                <Link to="/" style={noTextDecoration}>
                    <h1 className="logo">RapiDapi</h1>
                </Link>
                <input
                    className={this.props.toggleInputStyle ? "largeInputStyle" : "smallInputStyle" }
                    placeholder="Search cocktail by name or ingredient"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
            </div>
        );
    }
}



export default Header;