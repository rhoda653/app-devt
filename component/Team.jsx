


import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Data = [
    {id: '1', name: 'Asime Domitila', role: 'Software Engineer', tag: '<W.O.C> Participant', image: require('../assets/tilla.jpg')},
    {id: '2', name: 'Ngam Sabastine', role: 'Design Expert', tag: '<W.O.C> Participant', image: require('../assets/sebastian.jpg')},
    {id: '3', name: 'Rhoda Mingo', role: 'Comp Engineering', tag: '<W.O.C> Participant', image: require('../assets/rhoda.jpg')},
    {id: '4', name: 'Fonyuy Patrick', role: 'Data Science', tag: '<W.O.C> Participant', image: require('../assets/patrick.jpg')},
    {id: '5', name: 'Tamanjong Colins', role: 'Data Science', tag: '<W.O.C> Participant', image: require('../assets/collins.jpg')},
    {id: '6', name: 'Lordsy', role: 'Computer Engineering', tag: '<W.O.C> Participant', image: require('../assets/lordsy.jpg')},
    {id: '7', name: 'Teneng Faith', role: 'Computer Engineering', tag: '<W.O.C> Participant', image: require('../assets/faith.jpg')},
    {id: '8', name: 'Kingsley', role: 'Computer Engineering', tag: '<W.O.C> Participant', image: require('../assets/kingsley.jpg')},
];

const Team = ({navigation}) =>{
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate("Welcome")}>
                <Text style={styles.back}>← Back</Text>
            </TouchableOpacity>
            <Text style={styles.header}>Team Connect</Text>
            <ScrollView contentContainerStyle={styles.list}>
                <View style={styles.row}>
                    {Data.map((item, index) => (
                        <TouchableOpacity key={item.id} style={styles.card}>
                            <Image source={item.image} style={styles.avatar}/>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.tag}>{item.tag}</Text>
                            <Text style={styles.role}>{item.role}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Team;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    back:{
        color: '#7C3AED',
        fontSize: 16,
        marginBottom: 4
    },
    header:{
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 16,
        color: '#000',
    },
    list:{
        paddingBottom: 50,
    },
    row:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    card:{
        width: '48%',
        backgroundColor: '#F9FAFB',
        borderRadius: 12,
        alignItems: 'center',
        paddingVertical: 16,
        marginBottom: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 1.5
    },
    avatar:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 8
    },
    name:{
        fontSize: 15,
        fontWeight: '600',
        color: '#111',
        textAlign: 'center'
    },
    tag:{
        fontSize: 12,
        color: '#7C3AED',
        marginVertical: 2
    },
    role:{
        fontSize: 12,
        color: '#555',
        textAlign: 'center'
    }
})