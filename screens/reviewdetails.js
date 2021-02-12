import React from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';
import Card from '../shared/card';
import { images } from '../styles/global';

export default function ReviewDetails(props,{route}){
  const rating = props.route.params.rating;

    return(
        <View style={styles.container}>
          <Card>
            <Text>{props.route.params.title}</Text>
            <Text>{props.route.params.body}</Text>
            <View style={styles.rating}>
              <Text>GameZone rating: </Text>
               <Image source={images.rating[rating]} />
            </View>
          </Card>
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
    rating: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 16,
      marginTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    },
  });