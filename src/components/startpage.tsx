// import React from "react";
import { Link } from "react-router-dom";
import './CSS/startPage.css';


function Startpage() {
    return (
        <div className="background-image rootStyle">
            <Link to="/searchResult">
                <input placeholder="Search for cocktail/ingredient..." />
            </Link>
        </div>
    );
}

export default Startpage;