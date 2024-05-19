/* eslint-disable */
// import { baseUrl } from './API';
let baseUrl = 'https://solmiapi.xevensolutions.com/api/';
let baseUrlLocal = 'http://192.168.10.211:3000/api/';

const APP_SETTINGS = {
  API_PATH: {
    AUTHENTICATION: {
      signup: baseUrl + 'users/register', //done
      login: baseUrl + 'auth/login', //done
    },
  },
};

const PATH = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  HOME: 'HOME',
  DASHBOARD: 'DASHBOARD',
};

const DROPDOWN_PROPS = {
  POSITION_PROPS: {
    DEFAULT: 'DEFAULT',
    TOP: 'TOP',
    BOTTOM: 'BOTTOM',
    AUTO: 'AUTO',
  },
  THEME: {
    DEFAULT: 'DEFAULT',
    LIGHT: 'LIGHT',
    DARK: 'DARK',
  },
  MODE: {
    DEFAULT: 'DEFAULT',
    SIMPLE: 'SIMPLE',
    BADGE: 'BADGE',
  },
};
const INPUT_PROPS = {
  ICON_POS: {
    RIGHT: 'right',
    LEFT: 'left',
  },
  ICON_LIBRARY: {
    FONT_AWESOME: 'FontAwesome',
    MATERIAL: 'MaterialIcons',
    ENTYPO: 'Entypo',
  },
};
const PLATFORM = {
  ANDROID: 'android',
  IOS: 'ios',
};
const UPLOAD_PROPS = {
  UPLOAD_TYPE: {
    LIBRARY: 'library',
    CAPTURE: 'capture',
  },
  MEDIA_TYPE: {
    PHOTO: 'photo',
    VIDEO: 'video',
    MIXED: 'mixed',
  },
  CAMERA_TYPE: {
    BACK: 'back',
    FRONT: 'front',
  },
};

const MODAL_PROPS = {
  MODAL_POSITION: {
    TOP: 'top',
    BOTTOM: 'bottom',
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right',
  },
  MODAL_SIZE: {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    FULL: 'full',
  },
};

export {
  MODAL_PROPS,
  PLATFORM,
  UPLOAD_PROPS,
  DROPDOWN_PROPS,
  INPUT_PROPS,
  PATH,
  APP_SETTINGS,
};
