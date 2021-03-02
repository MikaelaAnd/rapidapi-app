import { Link } from "react-router-dom";
import './CSS/resultHeader.css';


function ResultHeader() {
    return (
        <div className="rapiDapiHeader">
            <Link to="/">
                <div className="result-header">
                    <h2 className="result-logo">RapiDapi</h2>
                    <input placeholder="Search ingredients..."></input>
                </div>
            </Link>
        </div>
    );
}

export default ResultHeader;