import React, {Component, Fragment } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { connect } from 'react-redux'; 
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <Fragment>
            <Toolbar userLogged = {this.props.userLogged}/>
            <main className={classes.Layout}>
                {this.props.children}
            </main>
        </Fragment>
        );
    };
};
const mapStateToProps = state => {
    return {
        userLogged: state.users.currentUser !== null
    }
}

export default connect(mapStateToProps)(Layout);