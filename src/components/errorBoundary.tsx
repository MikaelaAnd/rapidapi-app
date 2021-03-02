import { Component } from "react";


interface Props {}

interface State {
    hasError: boolean; 
}

export default class ErrorBoundary extends Component<Props, State> {

    state = {
        hasError: false,
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    reloadPage = () =>  {
        window.URL = window.URL;
    }

    // navigateBack = () => this.props.history.goBack();

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>nått gick fel</h2>
                    <button onClick={this.reloadPage}>
                       <a href="">Ladda om sidan</a> 
                    </button>
                </div>
            )
        }
        return this.props.children;
    }
}

// export function testErrorBoundary() {
//     const nullVariable: any = null;
//     console.log(nullVariable.somethingThatDoesNotExist);
// }

