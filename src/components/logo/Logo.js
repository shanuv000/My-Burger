import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from './logo.module.css'

const Logo = () => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="My-Burger"/>
    </div>
);
export default Logo;
