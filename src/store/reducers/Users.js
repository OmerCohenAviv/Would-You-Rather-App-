import * as actionTypes from '../actions/ActionTypes';

const initalState = {
    allUsers: '',
    currentUser: null,
    loading: false,
    error: null
};

const usersReducer = (state = initalState, action) => {
    switch(action.type) {
        
        case(actionTypes.ALL_USERS_START): {  return {...state, ...{loading: true}} }
        
        case(actionTypes.ALL_USERS_SUCCESS): {   return {...state, ...{allUsers: action.users, loading: false}} }

        case(actionTypes.ALL_USERS_FAIL):    {   return {...state, ...{error: action.error, loading: false}} }

        case(actionTypes.LOGIN_USER): {
            const currentUser = state.allUsers.filter(user => { return user.id === action.userID });
            return {...state, ...{currentUser: currentUser} } }

        case(actionTypes.LOGOUT_USER): { return {...state, ...{currentUser: null} } }


        default: return state;
    };
};

export default usersReducer;