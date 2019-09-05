import * as actionTypes from './ActionTypes';
import * as fakeData from '../../Data';

const allQuestionsStart = () => {
    return { type: actionTypes.ALL_QUESTIONS_START }
};
const allQuestionsSuccess = (questions) => {
    return { type: actionTypes.ALL_QUESTIONS_SUCCESS, questions: questions }
};
const allQuestionsFail = (error) => {
    return { type: actionTypes.ALL_QUESTIONS_FAIL, error: error }
};
export const fetchQuestionsAPI = () => {
    return dispatch => {
        dispatch( allQuestionsStart() ) 
        fakeData._getQuestions()
        .then(fetchedQuestions => dispatch( allQuestionsSuccess(fetchedQuestions) ))
        .catch(error => dispatch( allQuestionsFail(error) )) 
    };
};

const createQuestionStart = () => {
    return {type: actionTypes.CREATE_QUESTION_START}
};
const createQuestionSuccess = (question) => {
    return {type: actionTypes.CREATE_QUESTION_SUCCESS, question: question}
};
const createQuestionFail = (error) => {
    return {type: actionTypes.CREATE_QUESTION_FAIL}
};
export const createQuestionAPI = (question) => {
    return dispatch => {
        dispatch (createQuestionStart())
        fakeData._saveQuestion(question)
        .then(res => dispatch( createQuestionSuccess(res) ))
        .catch(err => dispatch( createQuestionFail(err) ) 
        );
    };
};


const saveAnswerStart = () => {
    return {type: actionTypes.SAVE_ANSWER_START}
};
const saveAnswerSuccess = (res) => {
    return {type: actionTypes.SAVE_ANSWER_SUCCESS, response: res}
};
const saveAnswerFail = (err) => {
    return {type: actionTypes.SAVE_ANSWER_FAIL, error: err}
};
export const saveQuestionAnswer = (questionData) => {
    return dispatch => {
        dispatch( saveAnswerStart() )
        fakeData._saveQuestionAnswer(questionData)
        .then(res => dispatch( saveAnswerSuccess (res)) )
        .catch(err => dispatch (saveAnswerFail(err)) )
    };
};