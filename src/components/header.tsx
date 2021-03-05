import { ChangeEvent, Component, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { noTextDecoration } from '../css';

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
            <div style={rootStyle}>
                <Link to="/" style={noTextDecoration}>
                    <h1 style={logo}>RapiDapi</h1>
                </Link>
                <input
                    style={this.props.toggleInputStyle ? largeInputStyle : smallInputStyle }
                    placeholder="Search cocktail by name or ingredient"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
            </div>
        );
    }
}

const rootStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '8rem',
    background: 'linear-gradient(180deg, #5D2232 12.51%, rgba(140, 76, 106, 0) 100%)',
}

const logo: CSSProperties = {
    fontFamily: 'Rochester, cursive',
    marginLeft: '4rem',
    color: 'white',
    fontSize: '4rem',
    fontWeight: 500,
    paddingRight: '2rem',
}

const largeInputStyle: CSSProperties = {
    position: 'absolute',
    top: '15rem',
    height: '2rem',
    width: '40%',
    borderRadius: '.5rem',
    border: 'unset',
    outline: 'none',
    padding: '.5rem 1rem',
}

const smallInputStyle: CSSProperties = {
    margin: '0 auto',
    height: '2rem',
    width: '25rem',
    borderRadius: '.5rem',
    border: 'unset',
    outline: 'none',
    padding: '.5rem 1rem',
}


export default Header;