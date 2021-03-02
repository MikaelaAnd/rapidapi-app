import { CSSProperties } from "react";
import ResultHeader from "./resultHeader";
import './CSS/drinkItem.css'

function DrinkItem() {
    return (
        <div>
            <ResultHeader />

            <div className="contentContainer">
                <div style={{ ...centered, }}>
                    <div className="drinkPicture">
                        bild
                    </div>
                </div>

                <div>
                    <h2 className="drinkName">
                        Margarita
                    </h2>
                    <p>Ingridiens</p>
                    <p className="drinkDescription">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt tempora non, fuga recusandae aut at magnam suscipit libero accusantium delectus cum quo porro, deleniti molestiae odit repellat eaque sit eius!
                    </p>
                </div>
            </div>
        </div>
    );
}

const centered: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

// const font: CSSProperties = {
//     fontSize: '96px',
// }

export default DrinkItem; 