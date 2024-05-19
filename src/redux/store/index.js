import thunk from 'redux-thunk';
import {rootReducer} from '../reducers';
import {configureStore} from '@reduxjs/toolkit';

import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
let persistCongif = {
  key: 'root',
  storage: AsyncStorage,
};

let persistedReducer = persistReducer(persistCongif, rootReducer);
export default () => {
  let store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
  });
  return {store};
};
