import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    // Handle successful login here
    navigation.navigate('Team');
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.dragLine}/>
        <Text style={styles.title}>Welcome Back 👋🏻</Text>
        <Text style={styles.subTitle}>Sign in to continue</Text>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          />
        
        <TextInput
         placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}/>

        <TouchableOpacity onPress={handleLogin}>
            <View style={styles.btn}>
            <Text style={styles.btnText}>Sign in here</Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>
    )
}

export default Login

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.4)',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    dragLine:{
        width:60,
        height:6,
        backgroundColor:'#ccc',
        borderRadius:3,
        marginBottom:20,
       alignSelf:'center',
         marginTop:-15
    },
    loginContainer:{
        backgroundColor:'#fff',
        minHeight:'55%',
        width:'95%',
        marginBottom:20,
        paddingBottom:20,
        padding:30,
        elevation:5,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
     textContainer:{
        flexDirection:'row',
        gap: 15
      },
      text:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:24,
        color:'#fff',
        marginLeft:90,
        marginTop:20,
            fontWeight:'bold'
        },
        text2:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:24,
        color:'orange',
        marginTop:20,
        fontWeight:'bold' 
      },
    subTitle:{
        fontSize:15,
        marginVertical:7
    },
    btn:{
        backgroundColor:'#6C63FF',
        paddingVertical:16,
        paddingHorizontal:20,
        textAlign:'center',
        borderRadius:8
    },
    btnText:{
        color:'#fff',
        fontSize:17,
        textAlign:'center'
    },
    input:{
        backgroundColor:'green',
        marginVertical:7,
        borderRadius:8,
        backgroundColor:'#ddd',
        paddingHorizontal:8
    }
})