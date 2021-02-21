import React from 'react';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import Classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
    return (
        <div className={Classes.CheckoutSummary}>
            <h1>We Hope it taste well</h1>
            <div style={{width: '100%', margin: 'auto'}}>

                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType='Danger'
                    clicked={props.onCheckoutCancelled}>Cancel</Button>
            <Button btnType='Success' clicked={props.onCheckoutContinued}>Continue</Button>

        </div>

    )

}
export default CheckoutSummary;