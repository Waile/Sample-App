/* eslint-disable */
import {signInApi, signOutApi} from '../Api';
import {failure, USER_REQUEST, request, success} from './utilities';

export const loginAction = (loginData, onSuccess, onFailure) => {
  return dispatch => {
    dispatch(request(USER_REQUEST.USER_LOGIN_REQUEST));
    signInApi(loginData).then(
      response => {
        dispatch(success(USER_REQUEST.USER_LOGIN_SUCCESS, loginData));
        onSuccess(loginData);
      },
      error => {
        console.log('error', error.response);
        dispatch(
          failure(USER_REQUEST.USER_LOGIN_FAILURE, 'Failure while login'),
        );
        if (onFailure) {
          onFailure('Failure while login');
        }
      },
    );
  };
};

export const logoutAction = () => {
  console.log('logout action :::12');
  return dispatch => {
    dispatch(request(USER_REQUEST.USER_LOGOUT_REQUEST));
    signOutApi().then(
      response => {
        dispatch(success(USER_REQUEST.USER_LOGOUT_SUCCESS));
      },
      error => {
        console.log('error', error.response);
        dispatch(
          failure(USER_REQUEST.USER_LOGOUT_FAILURE, 'Failure while logout'),
        );
      },
    );
  };
};
