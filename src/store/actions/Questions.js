import * as actionTypes from './ActionTypes';
import * as fakeData from '../../Data';

const allQuestionsStart = () => {
    return { type: actionTypes.ALL_QUESTIONS_START }
};

const allQuestionsSuccess = (questions) => {
    return { type: actionTypes.ALL_QUESTIONS_SUCCESS, questions }
};

const allQuestionsFail = (error) => {
    return { type: actionTypes.ALL_QUESTIONS_FAIL, error }
};

export const fetchQuestionsAPI = () => {
    return dispatch => {
        dispatch(allQuestionsStart())
        fakeData._getQuestions()
        .then(fetchedQuestions =>  dispatch( allQuestionsSuccess( fetchedQuestions ))
        .catch(error => allQuestionsFail( error )));
    };
};