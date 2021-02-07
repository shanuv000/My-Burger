import React from 'react';
import Aux from "../../hoc/Aux";
import Classes from './layout.module.css'
import Backdrop from "../UI/Backdrop/Backdrop";
const Layout = (props) => (
    <Aux>
        <Backdrop/>
        <div>ToolBar,SideDrawer, BackDrop</div>

        <main className={Classes.Container}> {props.children}</main>
    </Aux>

);
export default Layout;