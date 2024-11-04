import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const ProfileStudent = () => {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.104:1337/api/classes');
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <View>
      <Text>welcome now</Text>
      <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>ID: {item.id}</Text>
          <Text>Year: {item.attributes.year}</Text>
          <Text>Class Name: {item.attributes.class_name}</Text>
          <Text>Created At: {item.attributes.createdAt}</Text>
          <Text>Updated At: {item.attributes.updatedAt}</Text>
          <Text>Published At: {item.attributes.publishedAt}</Text>
        </View>
      )}
    />
    </View>
  );
 
};

//     const [ students , setstudent] = useState ([]);
//     useEffect(()=>{
//         getstudentdata();
//     } , [] );

//     const getstudentdata =() => {
//         const URL ="http://192.168.1.160:1337/api/students?populate=student_mark.exams.subject&populate=student_mark.exams.exam_type";

    //     fetch(URL).then(res =>{
    //         return res.json()
    //     }).then((data) => {
    //         setstudent(data);
    //         console.log(data);
    //     })

    // }
    // return(

    //     <View>
    //         <Text>student mark </Text>
    //         <FlatList data={students} renderItem={( item ) => <View>
    //             <Text> style = { fontSize =18 }{item.first_name}</Text>
    //         </View>}></FlatList>
    //     </View>
    // );
    //};

export default ProfileStudent ;