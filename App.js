import {Image, Text, Button, StyleSheet, View, StatusBar, TouchableOpacity} from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <StatusBar 
      barStyle={'light-content'} 
      backgroundColor="#000" 
      hidden={false}
      />

      {/* {image} */}
      <Image source={require("./assets/pic.png")} style={styles.avatar} />
      <Text style={styles.name}>Tamanjong Rhoda</Text>
      <Text style={styles.desc}> 
        I am a passionate learner, mission is to learn and change those around me,
        I am also a vegeterian
      </Text>
      {/* button title, read more */}
      <TouchableOpacity>
        <View style={styles.btn}>
        <Text style={styles.btnText}>Read More</Text>
        </View>
      </TouchableOpacity>

    </View>
    
  );
}

// create a style sheet just below our component
// this isnot css but stylesheet inspired by css
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignitems: 'center'
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    elevation: 12, 
    borderWidth: 3,
    borderColor: 'teal'
  },
  name: {
    marginTop: 12,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  desc:{
    colr: '#fff',
    textAlign: "center",
    marginVertical: 14,
    paddingHorizontal:20
  }
});