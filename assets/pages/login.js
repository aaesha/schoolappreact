
import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../api/auth'; // Adjust the path as needed
import Icon from 'react-native-vector-icons/FontAwesome';
const logo = require("../logo.png");

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const { token, userId } = await login(username, password);
      if (!token || !userId) {
        throw new Error('Invalid login response');
      }
      await AsyncStorage.setItem('userToken', token);
      console.log('Token:', token);
      navigation.replace('StudentRegister', { userId });
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error('Login failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>الثانوية الشرعية للبنات في عين منين</Text>

      <Text style={styles.label}>اسم المستخدم:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="أدخل اسم المستخدم"
      />
      <Text style={styles.label}>كلمة المرور:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="أدخل كلمة المرور"
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>تسجيل دخول</Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/+963998433425')}>
          <Icon name="whatsapp" size={30} color="#25D366" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100063617392263')}>
          <Icon name="facebook" size={30} color="#3b5998" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 5,
    backgroundColor: '#fff',
    borderWidth: 20, // Add this line
    borderColor: '#3c8659', // Add this line
    borderRadius: 5, // Optional: Add this line for rounded corners
  },
  logoContainer: {
    backgroundColor: '#f0f0f0', // Add your desired background color here
    padding: 10,
    borderRadius: 75, // Optional: Adjust for rounded corners
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 1,
   
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 20,
    color: '#3c8659',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#3c8659',
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#3c8659',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '75%',
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 10,
    marginVertical : 20,
  },
});

export default LoginScreen;
