import React, {Component} from 'react';
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Order Summary] will update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'uppercase'}}>{igKey}:</span>{this.props.ingredients[igKey]}
                </li>
            )

        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious Burger with the following ingredients</p>
                <ul>
                    <li> Ingredients Quantity</li>
                    {ingredientSummary}
                </ul>
                <p>Your Total sum is : <b>${this.props.totalSum.toFixed(2)}</b></p>
                <p>Continue To CheckOut?</p>

                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>

            </Aux>

        );
    }
}


export default OrderSummary;