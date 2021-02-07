import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from "./navigationItem/NavigationItem";
const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>CheckOut</NavigationItem>
    </ul>
);
export default NavigationItems;


