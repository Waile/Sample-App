/* eslint-disable */
import {signOutApi} from '../Api';

const request = actionType => {
  return {
    type: actionType,
  };
};
const success = (actionType, response) => {
  console.log('success', actionType, response);
  return {
    type: actionType,
    payload: response,
  };
};
const failure = (actionType, error, errorCode) => {
  console.log('failure', actionType, error, errorCode);
  if (errorCode && errorCode === 401) {
    signOutApi();
  }
  return {
    type: actionType,
    payload: error,
  };
};

const USER_REQUEST = {
  USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',

  USER_SIGNUP_REQUEST: 'USER_SIGNUP_REQUEST',
  USER_SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS',
  USER_SIGNUP_FAILURE: 'USER_SIGNUP_FAILURE',

  USER_LOGOUT_REQUEST: 'USER_LOGOUT_REQUEST',
  USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_FAILURE: 'USER_LOGOUT_FAILURE',
};

export {request, success, failure, USER_REQUEST};
