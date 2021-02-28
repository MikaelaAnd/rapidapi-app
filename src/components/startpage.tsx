import { Link } from "react-router-dom";
import './startPage.css';


function Startpage() {
    return (
        <div>
            <Link to="/searchResult">
                <p>Här ska ett inputfält in</p>
            </Link>
        </div>
    );
}

export default Startpage;