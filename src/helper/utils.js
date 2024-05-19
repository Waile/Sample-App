import moment from 'moment';
import {Alert, Platform, ToastAndroid} from 'react-native';

function remoteDateToDashFormate(data) {
  var formatedDate = moment(data).format('MM/DD/YYYY');

  return formatedDate;
}

const getAgeFromDateOfBirth = datOfBirth => {
  var formatedDate = moment(datOfBirth).format('YYYY-MM-DD');
  let age = moment().diff(formatedDate, 'years');
  return age;
};

function notifyMessage(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert(msg);
  }
}

const getMedia = mediaName => {
  return `https://solmiapi.xevensolutions.com/api/user-upload/read-image?filename=${mediaName}`;
};

const isFavouriteOrNot = (favouriteList, itemId) => {
  let itemexistInFavList = favouriteList?.find(
    favList => favList.favouriteId === itemId,
  );
  console.log('itemexistInFavList', itemexistInFavList);
  if (itemexistInFavList) {
    return true;
  } else {
    return false;
  }
};

const checkConnectionStatus = (userId, currentlyLoginUser) => {
  console.log('userId', userId);
  let isFriendOrNot = currentlyLoginUser?.friendsList.find(
    friendItem => friendItem.sender.senderId === userId,
  );
  console.log('isFriendOrNot', isFriendOrNot);
  if (isFriendOrNot) {
    return 'FRIEND';
  } else {
    let isRequestPendingOrNot = currentlyLoginUser?.sentRequests.find(
      sentRequestItem => sentRequestItem.receiver.receiverId === userId,
    );
    if (isRequestPendingOrNot) {
      return 'REQUEST_SEND';
    } else {
      return null;
    }
  }
};
export {
  remoteDateToDashFormate,
  notifyMessage,
  getMedia,
  getAgeFromDateOfBirth,
  isFavouriteOrNot,
  checkConnectionStatus,
};
