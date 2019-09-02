import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        console.log(this.props.users);
        return (
            <div>
                
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        users: state.users.allUsers
    };
};

export default connect(mapStateToProps)(Login);