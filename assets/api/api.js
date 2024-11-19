const API_URL = 'https://school.acesoai.com/api';

export const getUserWithStudent = async (userId , token) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}?populate=student`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Fetched data:', data); // Debugging line
    if (!data.student) {
      console.warn('Student data not populated:', data);
    }
    return data;
  } catch (error) {
    console.error('Error fetching user with student data:', error);
    throw error;
  }
};
