
import * as actionTypes from '.././actions/ActionTypes';
import { updateObject } from '../../Utility/Functions'

const initalState = {
    allQuestions: null,
    loading: false,
    error: null
}

const questionReducer = (state = initalState, action) => {
    switch (action.type) {
        case ( actionTypes.ALL_QUESTIONS_START): { return updateObject( state, {loading: true} ) }

        case ( actionTypes.ALL_QUESTIONS_SUCCESS): {
            const updatedAllQuestions = [...action.questions];
            return {...state, ...{allQuestions: updatedAllQuestions} }
        }

        case ( actionTypes.ALL_QUESTIONS_FAIL): {
            return {...state, ...{error: action.error}}
        }

        default: { return state }
    };
};

export default questionReducer;