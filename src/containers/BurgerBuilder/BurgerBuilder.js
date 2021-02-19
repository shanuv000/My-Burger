import React, {Component} from 'react';
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuidControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

let today = new Date(),

    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '  absolute Date : ' +
        today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }, totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        currentDateTime: time
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);
        return this.setState({purchasable: sum > 0})
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
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
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
        const newPrice = oldPrice - priceDeduction;
        this.setState({ingredients: updateIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updateIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }
    purchaseContinueHandler = () => {
        this.setState({loading: true})
        const orders = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            currentTime: this.state.currentDateTime,
            customer: {
                name: 'American Sinha',
                address: {
                    street: 'Kumhrar',
                    pinCode: 800006,
                    City: 'Patna',
                    Country: 'India'
                },
                email: 'shanuvatika@gmail.com'
            }, deliveryPartner: 'eKart',
            deliveryMode: 'Fast'
        }

        axios.post('/orders.json', orders)
            .then(response => this.setState({loading: false, purchasing: false}))
            .catch(error => this.setState({loading: false, purchasing: false}));
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo <= 0;
        }
        let orderSummary = <OrderSummary ingredients={this.state.ingredients}
                                         purchaseCancelled={this.purchaseCancelHandler}
                                         purchaseContinued={this.purchaseContinueHandler}
                                         totalSum={this.state.totalPrice}
        />
        if (this.state.loading) {
            orderSummary = <Spinner/>
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>

                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                               ingredientRemoved={this.removeIngredientHandler}
                               disabled={disabledInfo}
                               price={this.state.totalPrice}
                               purchasable={this.state.purchasable}
                               ordered={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);