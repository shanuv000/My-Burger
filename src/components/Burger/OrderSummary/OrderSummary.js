import React from 'react';
import Aux from "../../../hoc/Aux";

const OrderSummary = (props) => {

    const IngredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'uppercase'}}>{igKey}:</span>{props.ingredients[igKey]}
            </li>
        )

    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients</p>
            <ul>
                <li> Ingredients Quantity</li>
                {IngredientSummary}
            </ul>
            <p>Continue To CheckOut?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Aux>

    )
}
export default OrderSummary;