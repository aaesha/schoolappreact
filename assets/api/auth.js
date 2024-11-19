// auth.js
const API_URL = 'https://school.acesoai.com/api';

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

    const responseBody = await response.json();
    console.log('Response body:', responseBody);

    if (!response.ok) {
      console.error('Error response:', responseBody);
      throw new Error(`Network response was not ok: ${responseBody.message}`);
    }

    const { jwt, user } = responseBody;

    if (!jwt || !user) {
      throw new Error('Invalid response structure');
    }

    return { token: jwt, userId: user.id };
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
