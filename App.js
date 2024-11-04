
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './assets/pages/login';
import UserProfile from './assets/pages/studentregister';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="StudentRegister" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
