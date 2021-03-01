import { Link } from "react-router-dom";
import './resultHeader.css';


function ResultHeader() {
    return (
        <div className="rapiDapiHeader">
            <Link to="/">
                <div className="result-header">
                    <h2 className="result-logo">RapiDapi</h2>
                    <input placeholder="Search ingredients..."></input>
                </div>
            </Link>
            <p>Här kommer ett inputfält</p>
        </div>
    );
}

export default ResultHeader;