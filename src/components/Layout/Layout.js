import React, {Component} from 'react';
import Aux from "../../hoc/Aux";
import Classes from './layout.module.css'
import Toolbar from "../navigation/toolbar/Toolbar";
import SideDrawer from "../navigation/sideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    render() {
        return (
            <Aux>
                <Toolbar/>
                <SideDrawer open = {this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>
                <main className={Classes.Container}> {this.props.children}</main>
            </Aux>
        )

    }
}

export default Layout;