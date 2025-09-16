import React from "react"
import {View, StyleSheet, Text, ImageBackground, TouchableOpacity} from 'react-native'
const Wintro =()=>{
    return(
        <View style={styles.container}>
            {/* add a bg image */}
            <ImageBackground
                source={require("./assets/pic1.jpg")}
                style={styles.bg}
                imageStyle={{opacity:1}}
            >
                {/* make it open/close tag bcs we wanna add content inside */}
                <View style={styles.overlay}>
                    {/* logo */}
                    <View style={styles.logo}>
                     <Text style={styles.logoText}>W</Text>
                    </View>
                    {/* title */}
                    <Text style={styles.title}>Wintro</Text>

                     {/* subtitle */}
                     <Text style={styles.subTitle}>Where talent is discovered and nutured</Text>
                     {/* description  */}
                     <Text style={styles.desc}>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Distinctio consequatur voluptatibus aspernatur facilis laudantium 
                        qui labore exercitationem beatae neque, commodi fugit nemo mollitia et, 
                        tenetur optio. Minima cupiditate exercitationem earum!</Text>
                        {/* button */}
                        <TouchableOpacity>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Get Started</Text>
                            </View>
                        </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
    );
}
const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'teal',
    },
    bg: {
       flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(9, 11, 12, 0.8)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    logoText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    title:{
        fontSize: 21,
        color: '#fff',
        marginVertical: 14,
        fontWeight: 'bold'
    },
    subTitle:{
        color: '#fff',
        fontSize: 16
    },
    desc:{
        color: '#fff',
        marginVertical: 14,
        paddingHorizontal: 12,
        textAlign: 'center',
        fontSize: 12
    },
    btn:{
        backgroundColor: 'red',
        paddingHorizontal: 28,
        paddingVertical:12,
        elevation: 4,
        borderRadius: 7,
        marginVertical: 13
    },
    btnText:{
        color: '#fff',
        fontSize:14
    }
});

export default Wintro;