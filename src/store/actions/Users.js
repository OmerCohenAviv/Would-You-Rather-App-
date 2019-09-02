import * as actionTypes from './ActionTypes';
import * as fakeData from '../../Data';

const allUsersStart = () => {
    return { type: actionTypes.ALL_USERS_START };
};

const allUsersSuccess = (users) => {
    return {type: actionTypes.ALL_USERS_SUCCESS, users: Object.values(users) }
};

const allUsersFail = (error) => {
    return {type: actionTypes.ALL_USERS_FAIL, error}
};

export const getAllUsersAPI = () => {
    return dispatch => {
        dispatch( allUsersStart() )
        fakeData._getUsers()
        .then(users => dispatch( allUsersSuccess(users) ))
        .catch(error => dispatch( allUsersFail(error) ))     
    };
};

export const onLoginUser = (userID) => {
    return { type: actionTypes.LOGIN_USER, userID: userID}
};


