import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const EditAccountScreen = () => {

  const [username,setUsername] = useState ('')
  const [nickname,setNickname] = useState ('')
  const [age,setAge] = useState ('')

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput
      placeholder='Enter New Username'
      style={styles.input}
      onChangeText={text  => setUsername(text)}
      />
      <TextInput
      placeholder='Enter New Nickname'
      style={styles.input}
      onChangeText={text  => setNickname(text)}
      />
      <TextInput
      placeholder='Enter New Age'
      style={styles.input}
      onChangeText={text  => setAge(text)}
      />
      </View>
      <TouchableOpacity
      style={styles.button}
      >
        <Text style={styles.buttonText} onPress={()=>{navigation.navigate("Login")}}>Save & Return</Text>
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