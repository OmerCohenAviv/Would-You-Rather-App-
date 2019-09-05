import React, { Component } from 'react';

import * as actions from '../../store/actions/index';
import HomeComponent from '../../components/Question/Question';
import { connect } from 'react-redux';

class Home extends Component {
    state = {
        notAnsweredQuestions: [],
        selectedOption: 'optionOne'
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
            this.setState({ notAnsweredQuestions: notAnsweredQuestions })
        };
    };
    answerQuestionHandler = (event, answer, qID) => {
        console.log(event.target.value)
        console.log(answer)
        console.log(this.props.currentUser.id)
        event.preventDefault();
        const questionData = {
            authedUser: this.props.currentUser.id,
            qid: qID,
            answer: answer
        };
        this.props.onSavingAnswer(questionData)

    }
    optionChangeHandler = (event) => {
        this.setState({selectedOption: event.target.value})
    }

    render() {
        let display = 'Please log in'
        if (this.props.currentUser && this.props.allQuestions ) {
            display = [];
            for (let question of this.state.notAnsweredQuestions) {
                display.push(question)
            }
            display = display.map(
                quest => <HomeComponent
                    optionChange={this.optionChangeHandler}
                    selectedOption = {this.state.selectedOption}
                    answerQuestion = {(event, answer, questionID) => this.answerQuestionHandler(event, answer, questionID)}
                    key={quest.id}
                    question={quest}
                />
            )
        };

        return (
            <div>
                {display}
            </div>
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
        onSavingAnswer: (questionData) => dispatch(actions.saveQuestionAnswer(questionData) ),
        onGetAllQuestions: () => dispatch(actions.fetchQuestionsAPI())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);