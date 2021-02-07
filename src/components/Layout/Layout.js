import React from 'react';
import Aux from "../../hoc/Aux";
import Classes from './layout.module.css'
import Toolbar from "../navigation/toolbar/Toolbar";

const Layout = (props) => (
    <Aux>
<Toolbar/>
        <main className={Classes.Container}> {props.children}</main>
    </Aux>

);
export default Layout;