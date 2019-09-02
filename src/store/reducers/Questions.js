
import * as actionTypes from '.././actions/ActionTypes';

const initalState = {
    allQuestions: null,
    loading: false,
    error: null
}

const questionReducer = (state = initalState, action) => {
    switch (action.type) {
        case (action.type === actionTypes.ALL_QUESTIONS_START): {
            return { ...state, ...{ loading: true} }
        }
        
        case (action.type === actionTypes.ALL_QUESTIONS_SUCCESS): {
            const updatedAllQuestions = [...action.questions];
            return {...state, ...{allQuestions: updatedAllQuestions} }
        }

        case (action.type === actionTypes.ALL_QUESTIONS_FAIL): {
            return {...state, ...{error: action.error}}
        }

        default: { return state }
    };
};

export default questionReducer;