import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const isDevMode = true; // change this to toggle dev/prod domain name

let headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

AsyncStorage.getItem('match_making').then(res => {
  if (res) {
    let responseInJson = JSON.parse(res);
    console.log('responseInJson', responseInJson);
    headers.Authorization = `Bearer ${responseInJson.token}`;
  }
});

console.log('headers', headers);

export const api = axios.create({
  baseURL: 'https://solmiapi.xevensolutions.com/api/',
  headers,
});

export const DOMAIN = {
  dev: null,
  prod: null,
};

const PATH = {
  dev: 'https://solmiapi.xevensolutions.com/api/',
  prod: 'https://solmiapi.xevensolutions.com/api/',
};

export const baseDomain = isDevMode ? DOMAIN.dev : DOMAIN.prod;
export const baseUrl = isDevMode
  ? DOMAIN.dev + PATH.dev
  : DOMAIN.prod + PATH.prod;

const API = {
  signup: baseUrl + 'auth/login', //done
  login: baseUrl + 'users/register', //done
};

export default API;
