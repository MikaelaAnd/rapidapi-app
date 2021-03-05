import { Component, CSSProperties } from "react";
import "./CSS/backgroundImage.css";
import DrinkItem from "./drinkItem";
import { Cocktail } from "./layout";


interface Props {
    drinks: Cocktail[];
    toggleBackgroundStyle: boolean;
}

class MasterView extends Component<Props> {

    render() {
        return (
            <div className={this.props.toggleBackgroundStyle ? "background-image" : "background-image-white"}>
                <div style={rootStyle}>
                    {this.props.drinks.map((drink, index) =>
                        <DrinkItem
                            drinkItem={drink}
                            key={index}
                        />)}
                </div>
            </div>
        );
    }
}


const rootStyle: CSSProperties = {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
    columnGap: '1.5rem',
    rowGap: '3rem',
    margin: '15rem 4rem 4rem 4rem',
}


export default MasterView;