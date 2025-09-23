import react from 'react';
import { View, TextInput, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native';   


const Welcome = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/pic3.png')} resizeMode='contain' style={styles.img}/>
                </View>

                <View style={styles.textContainer}>
            <Text style={styles.text}>
                Stays
            </Text>
            <Text style={styles.text2}>Connected</Text>
            </View>
                <Text style={styles.subText}>Lorem ipsum dolor . Labore cupiditate distinctio debitis repellendus exercitationem ut?</Text>

                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}



styles=StyleSheet.create({
      container:{
        backgroundColor:"#6C63FF",
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },

      imgContainer:{
        width:330,
        height:300
      },
      content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      img:{
        width:'100%'
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
        marginLeft:10,
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
      subText:{
        color:'#ddd',
        alignSelf:'center',
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold'
      },
      btn:{
        backgroundColor:'#fff',
        marginVertical:20,
        paddingVertical:14,
        paddingHorizontal:30,
        borderRadius:14,
        elevation:7,
        width:200
      },
      btnText:{
        textAlign:'center'
      }
})

export default Welcome;