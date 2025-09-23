import react from 'react';
import { View, TextInput, StyleSheet, Text, Image, Button } from 'react-native';   


const Connected = () => {
    return(
        <View style={styles.container}>

        <Image source={require("./assets/pic3.png")} style={styles.avatar} />
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                Stays
            </Text>
            <Text style={styles.text2}>Connected</Text>
            </View>
            <Text style={styles.text3}>chat, meet & share moments, and also beg   
                 from God</Text>
             <View style={styles.btns}>
                 <Button title='Get Started' />
             </View>
        </View>
    )
}

styles=StyleSheet.create({
      container:{
        backgroundColor:"#6C63FF",
        flex:1,
      },
      avatar:{
        width:200,
        height:200,
        justifyContent:"center",
        alignItems:"center",
        marginTop:200,
        marginLeft:80,
        
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
      text3:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:14,
        color:'#fff',
        marginTop:10,
        arginVertical: 14,
        paddingHorizontal: 12,
        textAlign: 'center',
       
      },
        btns:{
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          marginTop:20,
          borderRadius:50,
        //   backgroundColor:'white',
          color:'blacks'
        }
})

export default Connected;