import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { LineChart } from 'react-native-chart-kit';

const StudentScores = () => {
  const data = [
    { name: 'John', subject: 'Math', score: 95, grade: 'A' },
    { name: 'Jane', subject: 'Science', score: 88, grade: 'B' },
    // Add more data here
  ];

  return (
    <View style={styles.container}>
      <SearchBar placeholder="Search Students..." />
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.subject}</Text>
            <Text>{item.score}</Text>
            <Text>{item.grade}</Text>
          </View>
        )}
      />
      <LineChart
        data={{
          labels: ['Math', 'Science'],
          datasets: [{ data: [95, 88] }],
        }}
        width={320}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default StudentScores;
