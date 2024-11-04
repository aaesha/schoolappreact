import React, { useState } from 'react'
import axios from 'axios';
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
const logo = require("../logo.png")

const login = async (username, password) => {
  try {
    const response = await fetch('http://192.168.1.160:1337/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: username,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.jwt) {
      // Save the JWT token and use it for authenticated requests
      console.log('Login successful', data);
    } else {
      console.log('Login failed', data);
    }
  } catch (error) {
    console.error('Error logging in', error);
  }
};


export default function LoginForm() {
    const [click,setClick] = useState(false);
    const {username,setUsername}=  useState("");
    const {password,setPassword}=  useState("");
    const handleLogin = async () => {
      try {
          const response = await fetch('http://192.168.1.160:1337/api/auth/local', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  username,
                  password
              })
          });
  
          if (!response.ok) {
              throw new Error('Login Failed');
          }
  
          const data = await response.json();
          const { token } = data;
          await AsyncStorage.setItem('jwt', token);
          Alert.alert("Login!");
      } catch (error) {
          Alert.alert("Login Failed", error.message);
      }
  };
  
  return (
    <SafeAreaView style={styles.container}>
        
        <Image source={logo} style={styles.image} resizeMode='contain' />
        <Text style={styles.title}>تسجيل الدخول</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='اسم الطالب' value={username} onChangeText={setUsername} autoCorrect={false}
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='كلمة المرور' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
        autoCapitalize='none'/>
        </View>
        <View style={styles.rememberView}>
            <View style={styles.switch}>
                <Switch  value={click} onValueChange={setClick} trackColor={{true : "green" , false : "gray"}} />
                <Text style={styles.rememberText}>تذكرني</Text>
            </View>
            <View>
                <Pressable onPress={() => Alert.alert("Forget Password!")}>
                    <Text style={styles.forgetText}>نسيت كلمة السر؟</Text>
                </Pressable>
            </View>
        </View>

        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>دخول</Text>
            </Pressable>
        </View>
        

        <Text style={styles.footerText}>ليس لديك حساب ؟<Text style={styles.signup}>  التسجيل</Text></Text>

        
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container : {
    alignItems : "center",
    paddingTop: 70,
  },
  image : {
    height : 200,
    width : 200 ,
    alignItems : "center",
    marginBottom: 1,
  },
  title : {
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 30,
    color : "#3c8659"
  },
  inputView : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :5
  },
  input : {
    height : 50,
    width : 300,
    paddingHorizontal : 20,
    borderColor : "#d39834",
    borderWidth : 2,
    borderRadius: 7
  },
  rememberView : {
    width : "100%",
    paddingHorizontal : 50,
    justifyContent: "space-between",
    alignItems : "center",
    flexDirection : "row",
    marginBottom : 8
  },
  switch :{
    flexDirection : "row",
    gap : 1,
    justifyContent : "center",
    alignItems : "center"
    
  },
  rememberText : {
    fontSize: 13
  },
  forgetText : {
    fontSize : 11,
    color : "#ec5813"
  },
  button : {
    backgroundColor : "#3c8659",
    height : 45,
    width : 80 ,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
  }, 
  buttonView :{
    width :"100%",
    paddingHorizontal : 50
  },
  optionsText : {
    textAlign : "center",
    paddingVertical : 10,
    color : "gray",
    fontSize : 13,
    marginBottom : 6
  },
  mediaIcons : {
    flexDirection : "row",
    gap : 15,
    alignItems: "center",
    justifyContent : "center",
    marginBottom : 23
  },
  icons : {
    width : 40,
    height: 40,
  },
  footerText : {
    textAlign: "center",
    color : "gray",
  },
  signup : {
    color : "06D001",
    fontSize : 13
  }
})