import React from 'react';
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
            <p>Your Total sum is : <b>${props.totalSum.toFixed(2)}</b></p>
            <p>Continue To CheckOut?</p>

            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>

        </Aux>

    )
}
export default OrderSummary;