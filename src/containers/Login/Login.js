import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as actions from '../../store/actions/index';

class Login extends Component {
    state = {
        currentUserID: null,
        loggedIn: false,
    };

    componentDidMount() {
        this.props.currentUser === null
            ? this.setState({ loggedIn: false, currentUserID: '' })
            : this.props.onGetAllUsers();
    };
    //Handlers
    changeSelectValueHandler = (event) => {
        const updatedCurrentUserID = event.target.value
        this.setState({ currentUserID: updatedCurrentUserID })
    };
    onLoginHandler = () => {
        const currentUserID = [...this.state.currentUserID].join('');
        this.props.onLoginUser(currentUserID);
        this.setState({ loggedIn: true })

    };

    render() {
        const usersOptions = Object.values(this.props.users).map(user => {
            return <option key={user.id} value={user.id} > {user.name} </option>
        });
        let userDisplay = (
            <div>
                <h1>Sign in</h1>
                <select onChange={this.changeSelectValueHandler} >
                    <option defaultValue hidden>Choose User</option>
                    {usersOptions}
                </select>
                <button onClick={this.onLoginHandler} disabled={this.state.currentUserID === null}>Login!</button>
            </div>
        );
        if (this.props.loading && !this.state.loggedIn) { userDisplay = <p> Loading </p> };
        if (this.state.loggedIn && !this.props.loading) { userDisplay = <Redirect to='/' /> };

        return (
            <div>
                {userDisplay}
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
        onGetAllUsers: () => dispatch(actions.getAllUsersAPI()),
        onLoginUser: (userID) => dispatch(actions.onLoginUser(userID))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);