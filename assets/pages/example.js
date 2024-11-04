import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const Example = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.104:1337/api/students?populate=student_mark.exams.subject&populate=student_mark.exams.exam_type');
        const result = await response.json();
        console.log(result); // Log the entire response
        setData(result.data); // Accessing the 'data' array from your JSON
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const attributes = item.attributes || {};
          const studentMark = attributes.student_mark?.data?.attributes || {};
          const exam = studentMark.exams?.data?.[0]?.attributes || {};
          const subject = exam.subject?.data?.attributes || {};
          const examType = exam.exam_type?.data?.attributes || {};

          return (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>First Name: {attributes.first_name}</Text>
              <Text style={styles.itemText}>Last Name: {attributes.last_student_name}</Text>
              <Text style={styles.itemText}>Father's Name: {attributes.father_name}</Text>
              <Text style={styles.itemText}>Mother's Name: {attributes.mother_name}</Text>
              <Text style={styles.itemText}>Grandfather's Name: {attributes.grand_father_name}</Text>
              <Text style={styles.itemText}>Phone Number: {attributes.phone_number}</Text>
              <Text style={styles.itemText}>WhatsApp Number: {attributes.whatsapp_number}</Text>
              <Text style={styles.itemText}>Mother's Phone Number: {attributes.mother_phonenumber}</Text>
              <Text style={styles.itemText}>Father's Phone Number: {attributes.father_phonenumber}</Text>
              <Text style={styles.itemText}>Address: {attributes.address}</Text>
              <Text style={styles.itemText}>Birth Date: {attributes.birth_date}</Text>
              <Text style={styles.itemText}>Social Situation: {attributes.social_situation}</Text>
              <Text style={styles.itemText}>Living Situation: {attributes.living_situation}</Text>
              <Text style={styles.itemText}>Mark: {studentMark.mark}</Text>
              <Text style={styles.itemText}>Exam Date: {exam.date_exam}</Text>
              <Text style={styles.itemText}>Max Score: {exam.max_score}</Text>
              <Text style={styles.itemText}>Subject: {subject.name_subject}</Text>
              <Text style={styles.itemText}>Exam Type: {examType.name_of_type}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
    paddingTop: 30, // Add padding at the top
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Example;
