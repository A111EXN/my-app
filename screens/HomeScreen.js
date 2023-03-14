import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { collection, getDocs, doc, query, where } from 'firebase/firestore'

const HomeScreen = () => {

  const navigation = useNavigation()
  
  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error=>alert (error.message))
  }


  // const colRef = collection(db, "user");

  // const docsSnap = await getDocs(colRef);




  const user = auth.currentUser
  const [userinfo,setUserinfo]=useState({id:"toto"})//useState([])


  useEffect(() => { 
    
    const userRef = collection(db,"user")
    const q = query(userRef,where("email","==",user.email))
    getDocs(q,userRef)
    .then(res=>{
      // console.log('match found')
      const users = res.docs.map(item=>({
          id:item.id,
          ...item.data()
      }))
      // console.log(users)
      setUserinfo(users)
  })
  .catch(err=>console.log(err))
  
  }, [user.email])




  return (
    <View style={styles.container}>
      <Text>Emaild2: {auth.currentUser?.email}</Text>
      <Text style={styles.userinfoText}>Username:{userinfo[0].username}</Text>
      <Text style={styles.userinfoText}>Nickname:{userinfo[0].nickname}</Text>
      <Text style={styles.userinfoText}>Age:{userinfo[0].age}</Text>
      <TouchableOpacity
      onPress={handleSignOut}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{navigation.replace("EditInfo")}}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Account Information</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
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
    fontWeight: '700',
    fontSize: 16, 
  }, 
  userinfoText:{
    marginTop: 10,
  }
})