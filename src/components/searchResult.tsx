import React from "react";
import { Link, Route } from "react-router-dom";
import ResultHeader from './resultHeader';
import './CSS/searchResultPage.css';
import DrinkItem from "./drinkItem";

function SearchResult() {
    return (
        <div className="background-image-result">
            <ResultHeader />
            <Route path="/drinkItem" component={DrinkItem} />
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