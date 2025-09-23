import react, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Button, TextInput } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Input = () => {
    const [input, setInput]=useState('')
    const handleText=(textInput)=>{
        setInput=(textInput)
        console.log(input)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Starting with inputs</Text>
            <View style={styles.line}></View>
            <View style={styles.textInputContainer}>
                <View style={styles.name}>
                  <Fontisto name="person"  style={styles.icon} />
                  <TextInput 
                  style={styles.textInputContainer}
                  placeholder='enter your name'
                  value={input}
                  onChangeText={handleText}
                  
                  />
                  </View>
                  <View style={styles.email}>
                  <MaterialIcons name="email" size={24} color="black" />
                  <TextInput 
                  style={styles.textInputContainer}
                  placeholder='enter your email'
                  value={input}
                  onChangeText={handleText}
                  
                  />
                  </View>
                  
            </View>
            
            

        </View>
    )
}

styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'purple',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#fff',
        fontSize:20,
    },
    line:{
        width: 60,
        height: 2,
        backgroundColor: '#fff',
        marginTop: 7,
    },
    // textInputContainer:{
    //     borderWidth:1,
    //     marginTop: 8,
    //     paddingHorizontal:9,
    //     width:300,
    //     borderColor: '#666',
    //     backgroundColor: '#b98bcdff',
    //     borderRadius: 16,


    // },
    icon:{
        size: 20, 
        color:"#4A90E2",
        flex:1
    },
    name:{
        // flex:1,
        borderWidth:1,
        marginTop: 8,
        paddingHorizontal:9,
        width:300,
        borderColor: '#666',
        backgroundColor: '#b98bcdff',
        borderRadius: 16,
    },
    email:{
        // flex:1,
        borderWidth:1,
        marginTop: 8,
        paddingHorizontal:9,
        width:300,
        borderColor: '#666',
        backgroundColor: '#b98bcdff',
        borderRadius: 16,
        
    }

})

export default Input;