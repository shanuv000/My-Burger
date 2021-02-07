import React from 'react';
import Aux from "../../hoc/Aux";
import Classes from './layout.module.css'
const Layout = (props) => (
    <Aux>
        <div>ToolBar,SideDrawer, BackDrop</div>

        <main className={Classes.Container}> {props.children}</main>
    </Aux>

);
export default Layout;