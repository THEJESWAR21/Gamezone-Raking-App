import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

export default function ReviewDetails({ navigation }){

    const pressHandler = () => {
      navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Hi there review </Text>
            <Button title='back to Home Screen' onPress={pressHandler}/>
        </View>
        )
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
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