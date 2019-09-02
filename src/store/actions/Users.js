import * as actionTypes from './ActionTypes';
import * as fakeData from '../../Data';

const allUsersStart = () => {
    return { type: actionTypes.ALL_QUESTIONS_START };
};

const allUsersSuccess = (users) => {
    return {type: actionTypes.ALL_USERS_SUCCESS, users}
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