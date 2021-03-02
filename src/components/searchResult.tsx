import React from "react";
import { Link } from "react-router-dom";
import ResultHeader from './resultHeader';
import './searchResultPage.css';

function SearchResult() {
    return (
        <div className="background-image-result">
          <ResultHeader />
            <Link to="/drinkItem">
                <p>Här kommer en del bilder</p>
                <p>Här kommer en del bilder</p>
                <p>Här kommer en del bilder</p>
                <p>Här kommer en del bilder</p>
            </Link>
        </div>
    );
}

export default SearchResult;