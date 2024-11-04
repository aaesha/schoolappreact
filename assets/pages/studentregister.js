// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { getUserWithStudent } from '../api/api'; // Adjust the path as needed
// import { getmarksofStudent } from '../api/mark'; // Adjust the path as needed

// const StudentRegister = ({ route }) => {
//   const { userId } = route.params;
//   const [user, setUser] = useState(null);
//   const [marks, setMarks] = useState(null);
//   const [studentId, setStudentId] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const userData = await getUserWithStudent(userId);
//         setUser(userData);
//         const studentId = userData.student?.id; // Assuming userData contains student info
//         setStudentId(studentId);
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       }
//     };

//     fetchUser();
//   }, [userId]);

//   useEffect(() => {
//     const fetchMarks = async (studentId) => {
//       try {
//         const marksData = await getmarksofStudent(studentId);
//         console.log('Marks data:', JSON.stringify(marksData, null, 2)); // Detailed logging
//         setMarks(marksData);
//       } catch (error) {
//         console.error('Error fetching marks:', error);
//       }
//     };

//     if (studentId) {
//       fetchMarks(studentId);
//     }
//   }, [studentId]);

//   if (!user || !marks) {
//     return <Text>Loading...</Text>;
//   }

//   const studentMarks = marks.data?.attributes?.student_marks?.data;

//   if (!studentMarks || studentMarks.length === 0) {
//     return <Text>No marks found.</Text>;
//   }

//   return (
//     <View>
//       <Text>Username: {user.username}</Text>
//       <Text>Student Name: {user.student?.first_name}</Text>
//       <Text>Student last name: {user.student?.last_student_name}</Text>
//       {/* Display student marks and exams */}
//       {studentMarks.map((mark, markIndex) => (
//         <View key={markIndex}>
//           <Text>Mark: {mark.attributes.mark}</Text>
//           {mark.attributes.exams.data.map((exam, examIndex) => (
//             <View key={examIndex}>
//               <Text>Subject: {exam.attributes.subject?.data?.attributes?.name_subject}</Text>
//               <Text>Exam Type: {exam.attributes.exam_type?.data?.attributes?.name_of_type}</Text>
//               {/* <Text>Mark: {exam.attributes.mark}</Text> */}
//               <Text>Max Score: {exam.attributes.max_score}</Text>
//             </View>
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };

// export default StudentRegister;

// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { getUserWithStudent } from '../api/api'; // Adjust the path as needed
// import { getmarksofStudent } from '../api/mark'; // Adjust the path as needed
// const logo = require("../logo.png")
// const StudentRegister = ({ route }) => {
//   const { userId } = route.params;
//   const [user, setUser] = useState(null);
//   const [marks, setMarks] = useState(null);
//   const [studentId, setStudentId] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const userData = await getUserWithStudent(userId);
//         setUser(userData);
//         const studentId = userData.student?.id; // Assuming userData contains student info
//         setStudentId(studentId);
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       }
//     };

//     fetchUser();
//   }, [userId]);

//   useEffect(() => {
//     const fetchMarks = async (studentId) => {
//       try {
//         const marksData = await getmarksofStudent(studentId);
//         console.log('Marks data:', JSON.stringify(marksData, null, 2)); // Detailed logging
//         setMarks(marksData);
//       } catch (error) {
//         console.error('Error fetching marks:', error);
//       }
//     };

//     if (studentId) {
//       fetchMarks(studentId);
//     }
//   }, [studentId]);

//   if (!user || !marks) {
//     return <Text>Loading...</Text>;
//   }

//   const studentMarks = marks.data?.attributes?.student_marks?.data;

//   if (!studentMarks || studentMarks.length === 0) {
//     return <Text>No marks found.</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Image source={logo} style={styles.logo} />
//       <View style={styles.header}>
//         <Text style={styles.headerText}>الطالبة: {user.student?.first_name} {user.student?.father_name} {user.student?.last_student_name}</Text>
//       </View>
//       <View style={styles.table}>
//         <View style={[styles.tableRow, styles.tableRowReverse]}>
//           <Text style={[styles.tableHeader, styles.centerText , styles.cellBorder]}>المادة</Text>
//           <Text style={[styles.tableHeader, styles.centerText , styles.cellBorder]}>نوع الامتحان</Text>
//           <Text style={[styles.tableHeader, styles.centerText , styles.cellBorder]}>الدرجة العظمى</Text>
//           <Text style={[styles.tableHeader, styles.centerText , styles.cellBorder]}>درجة الطالب</Text>
//         </View>
//         {studentMarks.map((mark, markIndex) => (
//           mark.attributes.exams.data.map((exam, examIndex) => (
//             <View key={`${markIndex}-${examIndex}`} style={[styles.tableRow, styles.tableRowReverse]}>
//               <Text style={[styles.tableCell, styles.centerText , styles.cellBorder]}>{exam.attributes.subject?.data?.attributes?.name_subject}</Text>
//               <Text style={[styles.tableCell, styles.centerText , styles.cellBorder]}>{exam.attributes.exam_type?.data?.attributes?.name_of_type}</Text>
//               <Text style={[styles.tableCell, styles.centerText , styles.cellBorder]}>{exam.attributes.max_score}</Text>
//               <Text style={[styles.tableCell, styles.centerText , styles.cellBorder]}>{mark.attributes.mark}</Text>
//             </View>
//           ))
//         ))}
//       </View>
//     </View>
//   );
// };

// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
// import { getUserWithStudent } from '../api/api'; // Adjust the path as needed
// import { getmarksofStudent } from '../api/mark'; // Adjust the path as needed
// import { getBehaviorNotes } from '../api/behaviorNotes'; // Adjust the path as needed
// const logo = require("../logo.png");

// const StudentRegister = ({ route }) => {
//   const { userId } = route.params;
//   const [user, setUser] = useState(null);
//   const [marks, setMarks] = useState(null);
//   const [studentId, setStudentId] = useState(null);
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const userData = await getUserWithStudent(userId);
//         setUser(userData);
//         const studentId = userData.student?.id; // Assuming userData contains student info
//         setStudentId(studentId);
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       }
//     };

//     fetchUser();
//   }, [userId]);

//   useEffect(() => {
//     const fetchMarks = async (studentId) => {
//       try {
//         const marksData = await getmarksofStudent(studentId);
//         console.log('Marks data:', JSON.stringify(marksData, null, 2)); // Detailed logging
//         setMarks(marksData);
//       } catch (error) {
//         console.error('Error fetching marks:', error);
//       }
//     };

//     if (studentId) {
//       fetchMarks(studentId);
//     }
//   }, [studentId]);

//   useEffect(() => {
//     const fetchNotes = async (studentId) => {
//       try {
//         const notesData = await getBehaviorNotes(studentId);
//         setNotes(notesData.data.attributes.behavior_notes.data);
//       } catch (error) {
//         console.error('Error fetching notes:', error);
//       }
//     };

//     if (studentId) {
//       fetchNotes(studentId);
//     }
//   }, [studentId]);

//   if (!user || !marks) {
//     return <Text>Loading...</Text>;
//   }

//   const studentMarks = marks.data?.attributes?.student_marks?.data;

//   if (!studentMarks || studentMarks.length === 0) {
//     return <Text>No marks found.</Text>;
//   }

import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserWithStudent } from '../api/api'; // Adjust the path as needed
import { getmarksofStudent } from '../api/mark'; // Adjust the path as needed
import { getBehaviorNotes } from '../api/behaviorNotes'; // Adjust the path as needed
const logo = require("../logo.png");

const StudentRegister = ({ route, navigation }) => {
  const { userId } = route.params || {};
  const [user, setUser] = useState(null);
  const [marks, setMarks] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('userToken');
      console.log('Token:', token); ////check from token
      if (!token) {
        navigation.replace('login');
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (!userId) {
      navigation.replace('login');
      return;
    }

    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          navigation.replace('login');
          return;
        }
        console.log('Token:', token); ////check from token
        const userData = await getUserWithStudent(userId, token);
        setUser(userData);
        const studentId = userData.student?.id; // Assuming userData contains student info
        setStudentId(studentId);
        console.log('studentId:', studentId); ////check from studentId

      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  useEffect(() => {
    const fetchMarks = async (studentId) => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          navigation.replace('login');
          return;
        }

        const marksData = await getmarksofStudent(studentId, token);
        console.log('Marks data:', JSON.stringify(marksData, null, 2)); // Detailed logging
        setMarks(marksData);
      } catch (error) {
        console.error('Error fetching marks:', error);
      }
    };

    if (studentId) {
      fetchMarks(studentId);
    }
  }, [studentId]);

  useEffect(() => {
    const fetchNotes = async (studentId) => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          navigation.replace('login');
          return;
        }

        const notesData = await getBehaviorNotes(studentId, token);
        setNotes(notesData.data.attributes.behavior_notes.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    if (studentId) {
      fetchNotes(studentId);
    }
  }, [studentId]);

  if (!user || !marks) {
    return <Text>Loading...</Text>;
  }

  const studentMarks = marks.data?.attributes?.student_marks?.data;
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.replace('login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!studentMarks || studentMarks.length === 0) {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.header}>
          <Text style={styles.headerText}>الطالبة: {user.student?.first_name} {user.student?.father_name} {user.student?.last_student_name}</Text>
        </View>
        <View style={styles.header}>     
          <Text style={styles.noteTitle}>لا يوجد علامات حتى الآن..</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
           <Text style={styles.logoutButtonText}>تسجيل خروج</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  


  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.header}>
        <Text style={styles.headerText}>الطالبة: {user.student?.first_name} {user.student?.father_name} {user.student?.last_student_name}</Text>
      </View>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableRowReverse]}>
          <Text style={[styles.tableHeader, styles.centerText , styles.cellBorder]}>المادة</Text>
          <Text style={[styles.tableHeader, styles.centerText , styles.cellBorder]}>نوع الامتحان</Text>
          <Text style={[styles.tableHeader, styles.centerText , styles.cellBorder]}>تاريخ الاختبار</Text>
          <Text style={[styles.tableHeader, styles.centerText , styles.cellBorder]}>الدرجة العظمى</Text>
          <Text style={[styles.tableHeader, styles.centerText , styles.cellBorder]}>درجة الطالب</Text>
        </View>
        {studentMarks.map((mark, markIndex) => (
          mark.attributes.exams.data.map((exam, examIndex) => (
            <View key={`${markIndex}-${examIndex}`} style={[styles.tableRow, styles.tableRowReverse]}>
              <Text style={[styles.tableCellSmall, styles.centerText , styles.cellBorder]}>{exam.attributes.subject?.data?.attributes?.name_subject.replace(/ /g, '\n')}</Text>
              <Text style={[styles.tableCell, styles.centerText , styles.cellBorder]}>{exam.attributes.exam_type?.data?.attributes?.name_of_type}</Text>
              <Text style={[styles.tableCellSmall, styles.centerText , styles.cellBorder]}>{exam.attributes.date_exam}</Text>
              <Text style={[styles.tableCell, styles.centerText , styles.cellBorder]}>{exam.attributes.max_score}</Text>
              <Text style={[styles.tableCell, styles.centerText , styles.cellBorder]}>{mark.attributes.mark}</Text>
            </View>
          ))
        ))}
      </View>
      <View style={styles.notesSection}>
        <Text style={styles.notesHeader}>ملاحظات :</Text>
        <FlatList
          data={notes}
          keyExtractor={note => note.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.note}>
              <Text style={styles.noteDate}>{item.attributes.date_note}</Text>
              <Text style={styles.noteTitle}>{'-'} {item.attributes.note}</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>تسجيل خروج</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#3c8659"
  },
  table: {
    borderWidth: 1,
    borderColor: '#d2dbd5',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#d2dbd5',
  },
  tableRowReverse: {
    flexDirection: 'row-reverse',
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 13,
    backgroundColor: '#d2dbd5',
  },
  tableCell: {
    flex: 1,
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right', // Align text to the right
    flexShrink: 1, // Prevent text from wrapping
  },
  tableCellSmall: {
    flex: 1,
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center', // Align text to the right
    flexShrink: 1, // Prevent text from wrapping
  },
  centerText: {
    textAlign: 'center',
  },
  cellBorder: {
    borderWidth: 1,
    borderColor: '#3c8659',
  },
  notesSection: {
    marginTop: 20,
  },
  notesHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#3c8659",
    textAlign: 'right', // Align text to the right
  },
  note: {
    marginBottom: 10,
  },
  noteTitle: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'right', // Align text to the right
  },
  noteDate: {
    fontSize: 15,
    color: '#9ca16c',
    fontWeight: 'bold',
    textAlign: 'right', // Align text to the right
  },
  logoutButton: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '25%',
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 30,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});



export default StudentRegister;

//////////////////

