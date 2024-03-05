import { createStore, applyMiddleware, compose } from 'reudx';


export default function configurationStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk),
  );

  if (module.Put) {
    module.Put.accept(() => {
      const nextRootReducer = require('').default;
      store.replaceReducer(nextRootReducer);
      
    });
  }
  return store;
}; 

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({

});

signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
     setState({ userInfo });
  }catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED){
      //user cancelled the login flow
    }else if (error.code === statusCodes.SIGN_IN_CANCELLED){
      //operation (e.g. sign in) is in progress already
    }
    else if (error.code === statusCodes.IN_PROGRESS){
      //play services not availble or outdated
    }else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //
    }else{
      //some other error happend 
    }
  }
};

