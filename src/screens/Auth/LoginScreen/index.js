//================================ React Native Imported Files ======================================//
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';

//================================ Local Imported Files ======================================//
import {CustomizedInput} from '../../../components';
import styles from './styles';
import {loginAction} from '../../../redux/actions';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const loginRequest = () => {
    let payload = {
      checked: false,
      email: 'sohail@getnada.com',
      password: 'Qwerty@1',
    };
    dispatch(loginAction(payload, onSuccess, onFailure));
  };

  const onSuccess = () => {
    console.log('onSuccess');
  };
  const onFailure = () => {
    console.log('onFailure');
  };
  return (
    <View style={styles.root}>
      <CustomizedInput type="text" />
      <TouchableOpacity onPress={loginRequest}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
