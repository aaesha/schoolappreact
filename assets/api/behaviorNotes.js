

const API_URL = 'https://school.acesoai.com/api';

export const getBehaviorNotes = async (userId , token) => {
  try {
    const response = await fetch(`${API_URL}/students/${userId}?populate=behavior_notes`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response:', errorData);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    // console.log('Fetched marks data:', data); // Add this line to debug
    return data;
  } catch (error) {
    console.error('Error fetching user with student data:', error);
    throw error;
  }
};
