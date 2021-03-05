import { Component, CSSProperties, ErrorInfo } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import './CSS/backgroundImage.css'

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

    reloadPage = () =>  {
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="background-image">
                    <div  style={ errorBoundaryContainer }>
                        <h2>Oops something went wrong</h2>
                        <button onClick={this.reloadPage}  style={ button }>
                        Go back
                        </button>
                    </div>
                </div>
            ); 
        } 
        return this.props.children;
    } 
} 

export default withRouter(ErrorBoundary);

const errorBoundaryContainer: CSSProperties = {
    position: "absolute",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.587)',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

const button: CSSProperties = {
    width: '7rem',
    height: '2rem',
    borderRadius: '1rem',
    background: '#5D2232',
    color: 'white',
    border: 'none',
    letterSpacing: '0.1rem',
}

