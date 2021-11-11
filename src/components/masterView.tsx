import { Component } from "react";
import DrinkCard from "./drinkCard";
import { Cocktail } from "./layout";
import "./CSS/masterView.css";
import ErrorBoundary from "./errorBoundary"
interface Props {
    drinks: Cocktail[];
    toggleBackgroundStyle: boolean;
}
class MasterView extends Component<Props> {
    render() {
        return (
            <div className={this.props.toggleBackgroundStyle ? "background-image" : "background-image-white"}>
                <div className="root-style-masterview">
                    {this.props.drinks.map((drink, index) =>
                    <ErrorBoundary>
                        <DrinkCard
                            drinkCard={drink}
                            key={index}
                            />     
                    </ErrorBoundary>        
          ))}
        </div>
      </div>
    );
  }
}

export default MasterView;