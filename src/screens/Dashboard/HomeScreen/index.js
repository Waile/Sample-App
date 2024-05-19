//================================ React Native Imported Files ======================================//
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../../redux/actions';

//================================ Local Imported Files ======================================//
// import {setUser} from '../../../redux/Reducers/AuthReducer';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logoutAction());
  };
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={logoutUser}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
