import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from "./BurgerIngredient/BurgerIngredients";

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {   // Object.keys(props.ingredients) JavaScript object method. Returns you a list of the keys [salad, bacon, cheese, meat]
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey}/>
        });
    }).reduce((prev, el) => {
            return prev.concat(el);
        }, []);

    //flat() works same as reduce work
        // .flat();



    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start Adding Ingredients</p>
    }
    console.log(transformedIngredients);
    return (


        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>)

}
export default Burger;