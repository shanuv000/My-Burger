import React, {Component} from 'react';
import Aux from "../Aux/Aux";
import Classes from './layout.module.css'
import Toolbar from "../../components/navigation/toolbar/Toolbar";
import SideDrawer from "../../components/navigation/sideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />

                <SideDrawer open={this.state.showSideDrawer}
                            closed={this.SideDrawerClosedHandler}/>
                <main className={Classes.Container}> {this.props.children}</main>
            </Aux>
        )

    }
}

export default Layout;