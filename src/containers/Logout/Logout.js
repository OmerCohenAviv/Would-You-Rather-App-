import React, { Component } from 'react';

import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Logout extends Component  {
    componentDidMount() {
        this.props.onLogout();
    };
    
    render() {
        return (
            <div> <Redirect to='/'/> </div>
        );
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch( actions.onLogoutUser() )
    };
};


export default connect(null,mapDispatchToProps)(Logout);