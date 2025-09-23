import react from 'react';
import { View, TextInput, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native';   


const Welcome = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/pic3.png')} resizeMode='contain' style={styles.img}/>
                </View>

                <Text style={styles.title}>Stay Connected</Text>
                <Text style={styles.subText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cupiditate distinctio debitis repellendus exercitationem ut?</Text>

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
        width:300,
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
      title:{
        fontSize:30,
        color:'#fff',
        marginVertical:20
      },
      subText:{
        color:'#ddd',
        alignSelf:'center',
        textAlign:'center',
        fontSize:17
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