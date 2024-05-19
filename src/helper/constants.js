/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
// @flow

import {Dimensions, Platform} from 'react-native';
import {PLATFORM} from './config';

export const BASE_URL = '';
export const SCREEN = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};
export const TOKEN = 'TOKENSAVE';
export const USERDETAIL = 'USERDETAIL';
export const isIphoneXorAbove =
  SCREEN.height === 812 ||
  SCREEN.width === 812 ||
  SCREEN.height === 896 ||
  SCREEN.width === 896
    ? true
    : false;
const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
};
const isPlatformAndroid = Platform.OS === PLATFORM.ANDROID ? true : false;
const PAYMENTTYPE = {
  CREDIT: 1001,
  PAYPAL: 1002,
  APPLE: 1003,
  GOOGLE: 1004,
};

const STYLE_CONFIG = {
  FONT_FAMILY: 'SF-Pro-Text',

  BUTTON_TYPES: {
    primary: 'primary',
    disabled: 'disabled',
    outlined: 'outlined',
    outlinedDisabled: 'outlinedDisabled',
    outlinedBlack: 'outlinedBlack',
  },
};

const GOOGle_PLACES_API_KEY = 'AIzaSyBnVnoU5upM2n-XeGYKa3s4r-LKOZUIXeU';

export {
  GENDER,
  STYLE_CONFIG,
  PAYMENTTYPE,
  isPlatformAndroid,
  GOOGle_PLACES_API_KEY,
};
