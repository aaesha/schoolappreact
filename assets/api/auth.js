// const API_URL = 'http://192.168.1.114:1337/api';

// export const login = async (username, password) => {
//   try {
//     const response = await fetch(`${API_URL}/auth/local`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         identifier: username,
//         password: password,
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error('Error response:', errorData);
//       throw new Error(`Network response was not ok: ${response.statusText}`);
//     }

//     const data = await response.json();
//     const { jwt, user } = data;
//     return { token: jwt, userId: user.id };
//   } catch (error) {
//     console.error('Error logging in:', error);
//     throw error;
//   }
// };

import AsyncStorage from '@react-native-async-storage/async-storage';
const API_URL = 'https://ec88-169-150-218-3.ngrok-free.app/api';
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: username,
        password: password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response:', errorData);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    const { jwt, user } = data;

    if (!jwt || !user) {
      throw new Error('Invalid response structure');
    }

    return { token: jwt, userId: user.id };
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};



// export const login = async (username, password) => {
//   try {
//     const response = await fetch(`${API_URL}/auth/local`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         identifier: username,
//         password: password,
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error('Error response:', errorData);
//       throw new Error(`Network response was not ok: ${response.statusText}`);
//     }

//     const data = await response.json();
//     const { jwt, user } = data;

//     // Store the token
//     await AsyncStorage.setItem('userToken', jwt);

//     return { token: jwt, userId: user.id };
//   } catch (error) {
//     console.error('Error logging in:', error);
//     throw error;
//   }
// };
