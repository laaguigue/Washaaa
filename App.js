import React ,{ useState, useEffect} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import launchScreen from './screens/LaunchScreen';
import Signup from './screens/SignupForm';
import Login from './screens/Login';

export default function App() {
  const Stack = createStackNavigator();                                   
 
  return (
    <><StatusBar hidden /><NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
       
        <Stack.Screen 
          name="LaunchScreen"
          options={{ headerShown: false }}
          component={launchScreen}
        />
        <Stack.Screen
        name="HomeScreen"
        options={{ headerShown: false }}
        component={HomeScreen}
        />
        <Stack.Screen
        name="SignupForm"
        options={{ headerShown: false }}
        component={Signup}
        />
        <Stack.Screen
        name="Login"
        options={{ headershown: false }}
        component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer></>
  );
}
