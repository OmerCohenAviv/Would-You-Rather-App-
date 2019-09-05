import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom'
import * as actions from '../../store/actions/index';
import LoginComponent from '../../components/Login/Login'

class Login extends Component {
    state = {
        currentUserID: null,
        displayAvatar: '',
        loggedIn: false,
    };

    //Handlers
    changeSelectValueHandler = (event) => {
        const updatedCurrentUserID = event.target.value
        this.setState({ currentUserID: updatedCurrentUserID } , () => {
        });
    };
    onLoginHandler = () => {
        const currentUserID = [...this.state.currentUserID].join('');
        this.props.onLoginUser(currentUserID);
        this.setState({ loggedIn: true })
    };

    render() {
        return (
            <div>
                <LoginComponent 
                currentUser={this.state.currentUserID}
                login={this.onLoginHandler}
                change={this.changeSelectValueHandler}
                users={this.props.users} />
            </div>
        );
    };
};


const mapStateToProps = state => {
    return {
        users: state.users.allUsers,
        user: state.users.currentUser,
        loading: state.users.loading
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onGetAllUsers: ()     => dispatch(actions.getAllUsersAPI()),
        onLoginUser: (userID) => dispatch(actions.onLoginUser(userID))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);