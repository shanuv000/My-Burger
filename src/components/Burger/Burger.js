import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from "./BurgerIngredient/BurgerIngredients";


const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey}/>
        });
    }).reduce((prev, el) => {//Transformed all array in a  single array to check num of arrays are 0 or not
        return prev.concat(el);
    }, []);

    //flat() works same as reduce work
    // .flat();

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start Adding Ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>)

}
export default Burger;