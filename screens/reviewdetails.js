import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

export default function ReviewDetails(props,{route}){
 
    return(
        <View style={styles.container}>
           <Text>{props.route.params.title}</Text>
           <Text>{props.route.params.body}</Text>
           <Text>{props.route.params.rating}</Text>
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