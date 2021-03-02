import React from "react";
import { Link } from "react-router-dom";
import ResultHeader from './resultHeader';
import './CSS/searchResultPage.css';

function SearchResult() {
    return (
        <div className="background-image-result">
            <ResultHeader />
            <div className="contentContainer">
                <Link to="/drinkItem">
                    <p>Här kommer en del bilder</p>
                    <p>Här kommer en del bilder</p>
                    <p>Här kommer en del bilder</p>
                    <p>Här kommer en del bilder</p>
                </Link>
            </div>
        </div>
    );
}

export default SearchResult;