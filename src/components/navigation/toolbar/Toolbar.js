import React from 'react';
import classes from './Toolbar.module.css';
import Logo from "../../logo/Logo";
import NavigationItems from "../navigationItems/NavigationItems";

const Toolbar = () => (
    <header className={classes.Toolbar}>
        <div>MENU</div>

        <div className={classes.Logo}>
            <Logo/></div>

        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)
export default Toolbar;