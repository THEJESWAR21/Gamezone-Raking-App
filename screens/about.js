import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function About(){
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Hi there about </Text>
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