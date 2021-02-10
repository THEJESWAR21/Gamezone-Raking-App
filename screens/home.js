import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Card from '../shared/card';

export default function Home({ navigation }){
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);




    return(
//stacks 


        <View style={styles.container}>
          
          <FlatList 
            data={reviews}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item  )} >
                <Card>
                <Text style={styles.titleText}>{ item.title }</Text>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>

        
        )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    color: '#fff',
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