import React, { Component } from 'react';

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class Home extends Component {
    state = {
        notAnsweredQuestions: []
    };
    componentDidMount() {
        this.props.onGetAllQuestions();
        let notAnsweredQuestions = ''
        if (this.props.currentUser) {
            const answeredQuestions = Object.keys(this.props.currentUser.answers);
            notAnsweredQuestions = this.props.allQuestions.filter(question => {
                let returnedValue = false
                for (let answer of answeredQuestions) {
                    if (answer === question.id) {
                        returnedValue = true
                        break;
                    }
                }
                return !returnedValue;
            });
            this.setState({notAnsweredQuestions: notAnsweredQuestions})
        }
    }
    render() {
        console.log(this.props.currentUser)
        let display = 'Please log in'
        if  (this.props.currentUser) {
            display = [];
            for (let question of this.state.notAnsweredQuestions) {
                console.log(question)
                display.push(question)
            }
            display = display.map(quest => <p key={quest.id}>{quest.id}</p>)
        }


        return (
            <div>{display}</div>
        );
    };
};

const mapStateToProps = state => {
    return {
        allQuestions: state.home.allQuestions,
        currentUser: state.users.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetAllQuestions: () => dispatch(actions.fetchQuestionsAPI())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Home);