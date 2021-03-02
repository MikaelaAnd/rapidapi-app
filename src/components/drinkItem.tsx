import { CSSProperties } from "react";
import {  fullScreen } from '../css';
import ResultHeader from "./resultHeader";

function DrinkItem() {
    return (
        <div style={{ ...container, ...fullScreen }}>

            <div>
                <ResultHeader/>
            </div>

            <div style={{ ...centered, }}>
                <div style={{ ...picture }}>
                    bild
                </div>    
            </div>

            <div>
                <h2 style={{ ...font, }}>
                    Margarita
                </h2>       
                <p>Ingridiens</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt tempora non, fuga recusandae aut at magnam suscipit libero accusantium delectus cum quo porro, deleniti molestiae odit repellat eaque sit eius!</p>
            </div>
        </div>
    );
}

const picture: CSSProperties = {
    width: '15rem',
    height: '15rem',
    background: 'red',
    margin: '1rem',
}

const container: CSSProperties = {
    display: 'flex',
    
}

const centered: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}

const font: CSSProperties = {
    fontSize: '96px',
}

export default DrinkItem; 