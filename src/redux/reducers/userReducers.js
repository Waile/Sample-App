import {USER_REQUEST} from '../actions/utilities';

const INITIAL_STATE = {
  loginLoading: false,
  loginSuccess: false,
  loginFailure: false,
  loginError: null,
  userDetails: null,

  logoutLoading: false,
  logoutSuccess: false,
  logoutFailure: false,
  logoutError: null,
};

export const UserReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REQUEST.USER_SIGNUP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpSuccess: false,
        signUpFailure: false,
        signUpError: null,
        signUpDetails: null,
      };
    case USER_REQUEST.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpSuccess: true,
        signUpFailure: false,
        signUpError: null,
        signUpDetails: action.payload,
      };
    case USER_REQUEST.USER_SIGNUP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpSuccess: false,
        signUpFailure: true,
        signUpError: action.payload,
        signUpDetails: null,
      };

    case USER_REQUEST.USER_LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        loginSuccess: false,
        loginFailure: false,
        loginError: null,
        userDetails: null,
      };
    case USER_REQUEST.USER_LOGIN_SUCCESS:
      console.log('User login success', action);
      return {
        ...state,
        loginLoading: false,
        loginSuccess: true,
        loginFailure: false,
        userDetails: action.payload,
      };
    case USER_REQUEST.USER_LOGIN_FAILURE:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: false,
        loginFailure: true,
        loginError: action.payload,
      };

    case USER_REQUEST.USER_LOGOUT_REQUEST:
      return {
        ...state,
        logoutLoading: true,
        logoutSuccess: false,
        logoutFailure: false,
        logoutError: null,
      };
    case USER_REQUEST.USER_LOGOUT_SUCCESS:
      console.log('User logout success', action);
      return {
        ...state,
        logoutLoading: false,
        logoutSuccess: true,
        logoutFailure: false,
        userDetails: null,
      };
    case USER_REQUEST.USER_LOGOUT_FAILURE:
      return {
        ...state,
        logoutLoading: false,
        logoutSuccess: false,
        logoutFailure: true,
        logoutError: action.payload,
      };

    default:
      return state;
  }
};
