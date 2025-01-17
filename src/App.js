//================================ React Native Imported Files ======================================//
import React from 'react';
import {Provider} from 'react-redux';
import reduxStore from './redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import Toast, {BaseToast} from 'react-native-toast-message';

//================================ Local Imported Files ======================================//
import RootStack from './navigation/RootStack';
import {Colors} from './assets';
import {CommonStyles, FontSize, UtilityMethods} from './utility';
import persistStore from 'redux-persist/es/persistStore';

export const navigationRef = createNavigationContainerRef();

///  Toast Config this function is used to show toast message ///
const {store} = reduxStore();
const persistored = persistStore(store);
const toastConfig = {
  ToastMessage: props => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: Colors.WHITE,
        borderLeftColor: Colors.PRIMARY,
        width: '95%',
        height: UtilityMethods.hp(7),
      }}
      contentContainerStyle={{paddingHorizontal: UtilityMethods.wp(3)}}
      text1Style={{
        fontSize: FontSize.VALUE(16),
        ...CommonStyles.BOLD,
        color: Colors.BLACK,
      }}
      text2Style={{
        fontSize: FontSize.VALUE(13),
        ...CommonStyles.REGULAR,
        color: Colors.DARK_GRAY,
      }}
    />
  ),
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistored}>
        <NavigationContainer ref={navigationRef}>
          <GestureHandlerRootView style={{flex: 1}}>
            <RootStack />
            <Toast position="top" autoHide={true} config={toastConfig} />
          </GestureHandlerRootView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
