import { Component, ErrorInfo } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";


interface Props extends RouteComponentProps{}
interface State {
    hasError: boolean; 
}

class ErrorBoundary extends Component<Props, State> {

    state: State = {
        hasError: false,
    };

    static getDerivedStateFromError(): State {
        return { hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log({ error, errorInfo });
    }

    // reloadPage = () =>  {
    //     window.URL = window.URL;
    // }

    navigateBack = () => this.props.history.goBack();

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>nått gick fel</h2>
                    <button onClick={this.navigateBack} >
                       Gå tillbaka
                    </button>
                </div>
            ); 
        } 
        return this.props.children;
    } 
} 

export default withRouter(ErrorBoundary);

// export function testErrorBoundary() {
//     const nullVariable: any = null;
//     console.log(nullVariable.somethingThatDoesNotExist);
// }

