import { Link } from "react-router-dom";
import React from 'react';
import './header.css';

function StartHeader() {
    return (
        <Link to="/">
            <div className="start-header">
                <h1 className="logo">RapiDapi</h1>
            </div>
        </Link>
    );
}

export default StartHeader;