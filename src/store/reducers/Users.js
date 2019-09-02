import * as actionTypes from '../actions/ActionTypes';

const initalState = {
    users: [],
    loading: false,
    error: ''
};

const usersReducer = (state = initalState, action) => {
    switch(action.type) {
        case(actionTypes.ALL_QUESTIONS_START): {
            return {...state, ...{loading: true}}
        }
        case(actionTypes.ALL_QUESTIONS_SUCCESS): {
            return {...state, ...{users: action.users, loading: false}}
        }
        case(actionTypes.ALL_QUESTIONS_FAIL): {
            return {...state, ...{error: action.error, loading: false}}

        }

        default: return state;
    };
};

export default usersReducer;