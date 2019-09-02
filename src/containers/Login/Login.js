import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Login extends Component {
    state = {
        currentUserID: '',     
    };

    componentDidMount() {
        this.props.onGetAllUsers();
    };

    changeSelectValueHandler = (event) => {
        const updatedCurrentUserID = event.target.value
        this.setState({currentUserID: updatedCurrentUserID})
    };
    onLoginHandler = () => {
        const currentUserID = [...this.state.currentUserID].join('');
        this.props.onLoginUser(currentUserID);  
    };

    render() {
        const usersOptions = Object.values(this.props.users).map(user => {
            
            return <option key={user.id} value={user.id}> {user.name} </option>
        });
        let userDisplay = (
            <select onChange={this.changeSelectValueHandler}>
                {usersOptions}
            </select>
        );
        if (this.props.loading) { userDisplay = <p>Loading</p> };


        return (
            <div>
                <h1>Sign in</h1>
                {userDisplay}
                <button onClick={this.onLoginHandler}>Login!</button>
            </div>
        );
    };
};


const mapStateToProps = state => {
    return {
        users: state.users.allUsers,
        loading: state.users.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetAllUsers: () => dispatch(actions.getAllUsersAPI()),
        onLoginUser: (userID) => dispatch(actions.onLoginUser(userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);