import React, {Component} from 'react';


import { connect } from 'react-redux';

class Home extends Component {
    state = {
        notAnsweredQuestions: []
    }

    componentDidMount() {
        if ( this.props.loggedIn ) {
            console.log(this.props.allQuestions)
        };
        
    }
    render() {



        return (
            <div></div>
        );
    };
};

const mapStateToProps = state => {
    return {
        allQuestions: state.home.questions,
        loggedIn: state.users.currentUser 
    };
};




export default connect(mapStateToProps)(Home);