/* eslint-disable */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {APP_SETTINGS, PATH} from '../../helper/config';

export const signInApi = user => {
  console.log('signInApi', user);
  // return axios.post(APP_SETTINGS.API_PATH.AUTHENTICATION.login, userData);
  return AsyncStorage.setItem('user_details', JSON.stringify(user));
};
export const signUpApi = userData => {
  return axios.post(APP_SETTINGS.API_PATH.AUTHENTICATION.signup, userData);
};
export const signOutApi = userData => {
  return AsyncStorage.removeItem('user_details');
};
