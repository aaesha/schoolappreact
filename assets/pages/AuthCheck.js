import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthCheck = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        navigation.replace('login');
      } else {
        navigation.replace('StudentRegister');
      }
    };
    checkAuth();
  }, [navigation]);

  return null; // This component doesn't render anything
};

export default AuthCheck;
