import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';



export default function Home({ navigation }){


    const pressHandler = () => {
      navigation.navigate('ReviewDetails');
      //navigation.push('ReviewDetails');
    }


    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>hi there </Text>
            <Button title='go to review dets' onPress={pressHandler}/>
        </View>
        )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    color: '#333',
  },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    paragraph: {
      marginVertical: 8,
      lineHeight: 20,
    },
    container: {
      flex: 1,
      padding: 20,
    },
  });
  