import React, { Component } from 'react';

import { updateObject } from '../../Utility/Functions';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class NewQuestion extends Component {
    state = {
        question: {
            optionOneText: '',
            optionTwoText: ''
        }
    };
    changeValueHandler = (event, optionNum) => {
        const updatedValue = updateObject(this.state.question, {[optionNum]: event.target.value})
        console.log(updatedValue)
        this.setState({question: {...updatedValue}})
    }
    submitQuestionHanlder = (event) => {
        event.preventDefault();
        const question = {
            ...this.state.question,
            author: this.props.currentUser.id
        }
        this.props.onCreateQuestion(question)
    }

    render() {
        return (
            <div>
                <h1>Create new Question.</h1>
                <h4>Would you rather...</h4>
                <form onSubmit={this.submitQuestionHanlder}>
                <input value={this.state.question.optionOne} placeholder='Option One' onChange={(event) =>this.changeValueHandler(event, 'optionOneText')} />
                <input value={this.state.question.optionTwo} placeholder='Option Two' onChange={(event) =>this.changeValueHandler(event, 'optionTwoText')} />
                <button>Submit</button>
                </form>

                
            </div>
        );
    };
};
const mapStateToProps = state => {
    return {
        currentUser: state.users.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateQuestion: (question) => dispatch(actions.createQuestionAPI(question) )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NewQuestion);