import { Link } from "react-router-dom";
import React from 'react';
import './CSS/header.css';

function StartHeader() {
    return (
        <div className="rapidapi-Header">
            <Link to="/">
                <div className="start-header">
                    <h1 className="logo">RapiDapi</h1>
                </div>
            </Link>
        </div>
    );
}

export default StartHeader;