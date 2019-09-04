
import * as actionTypes from '.././actions/ActionTypes';
import { updateObject } from '../../Utility/Functions';

const initalState = {
    allQuestions: null,
    loading: false,
    error: null
};

const questionReducer = (state = initalState, action) => {
    switch (action.type) {
        case (actionTypes.ALL_QUESTIONS_START): {
            return updateObject(state, { loading: true })
        }
        case (actionTypes.ALL_QUESTIONS_SUCCESS): {
            const updatedAllQuestions = Object.values(action.questions);
            return updateObject(state, { allQuestions: updatedAllQuestions, loading: false })
        }
        case (actionTypes.ALL_QUESTIONS_FAIL): {
            console.log(action.error)
            return updateObject(state, { error: action.error, loading: false })
        }
        default: { return state }
    };
};

export default questionReducer;