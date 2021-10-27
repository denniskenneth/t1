import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// IMPORT SCREENS
// import HomeScreen from './screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';
import SignupScreen from '../../screens/SignupScreen';

import { Colors } from '../../components/styles';

// Colors
const { tertiary } = Colors;

const StackNavigator = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer style={{ flex: 1 }}>
      <StackNavigator.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          title: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName='Login'
      >
        <StackNavigator.Screen
          name='Login'
          component={LoginScreen}
          style={{ flex: 1 }}
        />
        <StackNavigator.Screen name='Signup' component={SignupScreen} />
        <StackNavigator.Screen name='Welcome' component={WelcomeScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Stack;