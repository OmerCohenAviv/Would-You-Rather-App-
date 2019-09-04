import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../../Utility/Functions';

const initalState = {
    allUsers: '',
    currentUser: null,
    loading: false,
    error: null
};

const usersReducer = (state = initalState, action) => {
    switch (action.type) {
        case (actionTypes.ALL_USERS_START): {
            return updateObject(state, { loading: true })
        }
        case (actionTypes.ALL_USERS_SUCCESS): {
            return updateObject(state, { allUsers: action.users, loading: false })
        }
        case (actionTypes.ALL_USERS_FAIL): {
            return updateObject(state, { error: action.error, loading: false })
        }
        case (actionTypes.LOGIN_USER): {
            const currentUser = state.allUsers.filter(user => { return user.id === action.userID })[0];
            return updateObject(state, { currentUser: currentUser })
        }
        case (actionTypes.LOGOUT_USER): {
            return (updateObject(state, { currentUser: null }))
        }
        default: return state;
    };
};

export default usersReducer;