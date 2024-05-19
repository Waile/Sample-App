/* eslint-disable */

import {combineReducers} from '@reduxjs/toolkit';
import {UserReducers} from './userReducers';

export const rootReducer = combineReducers({
  user: UserReducers,
});
