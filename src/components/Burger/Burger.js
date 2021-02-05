import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from "./BurgerIngredient/BurgerIngredients";

const Burger = (props) => {

    return (
        <div className={classes.Burger}>
            <BurgerIngredients shanu="bread-top"/>
            <BurgerIngredients shanu="cheese"/>
            <BurgerIngredients shanu="meat"/>
            <BurgerIngredients shanu="bacon"/>
            <BurgerIngredients shanu="bread-bottom"/>

        </div>)

}
export default Burger;