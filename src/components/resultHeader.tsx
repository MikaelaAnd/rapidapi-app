import { Link } from "react-router-dom";

function ResultHeader() {
    return (
        <div>
            <Link to="/">
                <h2>RapiDapi</h2>
            </Link>
            <p>Här kommer ett inputfält</p>
        </div>
    );
}

export default ResultHeader;