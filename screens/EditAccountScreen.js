import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { collection, doc, setDoc, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';

const EditAccountScreen = () => {

  const [email,setEmail] =useState ('')
  const [username,setUsername] = useState ('')
  const [nickname,setNickname] = useState ('')
  const [age,setAge] = useState ('')

  const navigation = useNavigation()

  function create () {
    addDoc(collection(db, "user"), {
      email: email,
      username: username,
      nickname: nickname,
      age: age, 
    }).then(()=>{
      console.log('succsses')
    }).catch((error)=>{
      console.log('error');
    });;
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput
      placeholder='Enter Email'
      value={email}
      style={styles.input}
      onChangeText={(email)  => setEmail(email)}
      />      
      <TextInput
      placeholder='Enter New Username'
      value={username}
      style={styles.input}
      onChangeText={(username)  => setUsername(username)}
      />
      <TextInput
      placeholder='Enter New Nickname'
      value={nickname}
      style={styles.input}
      onChangeText={(nickname)  => setNickname(nickname)}
      />
      <TextInput
      placeholder='Enter New Age'
      value={age}
      style={styles.input}
      onChangeText={(age)  => setAge(age)}
      />
      </View>
      <TouchableOpacity
      style={styles.button}
      onPress={create}
      >
        <Text style={styles.buttonText}>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      onPress={()=>{navigation.navigate("Login")}}
      >
      <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>
    </View>
  )
  }

export default EditAccountScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
  }
})