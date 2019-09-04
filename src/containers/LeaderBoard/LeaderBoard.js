import React, { Component } from 'react';

import { connect } from 'react-redux';

class LeaderBoard extends Component {
    render() {
        console.log(this.props.allUsers)
        const allUsers = [...this.props.allUsers]
        let displayUsers = []
        for (let user of allUsers) {
            displayUsers.push(user)
        };
        displayUsers = displayUsers.map(user => <p key={user.id}> {user.name} </p>)
        return (
            <div>{displayUsers}</div>
        );
    };
};

const mapStateToProps = state => {
    return {
        allUsers: state.users.allUsers
    };
};



export default connect(mapStateToProps)(LeaderBoard);