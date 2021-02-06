import React, {Component} from 'react';
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuidControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }, totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        console.log('Addition - Old Price  ' + oldPrice);
        const newPrice = oldPrice + priceAddition;
        console.log('Addition - New Price  ' + newPrice);
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }

        updateIngredients[type] = updateCount;
        let priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        if (this.state.ingredients[type] === 0) {
            priceDeduction = 0;
        }
        console.log('Removal - Old Price  ' + oldPrice);
        const newPrice = oldPrice - priceDeduction;
        console.log('Removal - New Price  ' + newPrice);
        this.setState({ingredients: updateIngredients, totalPrice: newPrice});
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                               ingredientRemoved={this.removeIngredientHandler}
                               disabled={disabledInfo}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;