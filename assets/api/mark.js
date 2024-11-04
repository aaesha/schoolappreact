// const API_URL = 'http://192.168.1.160:1337/api';
// export const getmarksofStudent = async (userId , token) => {
//     try {
//       const response = await fetch(`${API_URL}/students/${userId}?populate=student_marks.exams.subject&populate=student_marks.exams.exam_type`);
    
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Error response:', errorData);
//         throw new Error(`Network response was not ok: ${response.statusText}`);
//       }
//       const data = await response.json();
//       // console.log('Fetched marks data:', data); // Add this line to debug
//       return data;
//     } catch (error) {
//       console.error('Error fetching user with student data:', error);
//       throw error;
//     }
//   };

const API_URL = 'https://ec88-169-150-218-3.ngrok-free.app/api';
// const TOKEN = 'your_token_here'; // Replace with your actual token

export const getmarksofStudent = async (userId , token) => {
  try {
    const response = await fetch(`${API_URL}/students/${userId}?populate=student_marks.exams.subject&populate=student_marks.exams.exam_type`, {
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
