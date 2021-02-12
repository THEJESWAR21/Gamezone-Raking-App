import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import Card from '../shared/card';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ReviewForm from './reviewForm';



export default function Home({ navigation }){
  const [ModalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const addReview = (review) => {
    reviews.ley = Math.random().toString();
    setReviews((curretnReviews) => {
      return [review, ...curretnReviews];
    });
    setModalOpen(false);
  }




    return(


        <View style={styles.container}>
          <Modal visible={ModalOpen} animationType="slide">
            <View style={styles.modalContent}>

            <FontAwesome5 name={'times'}  onPress={() => setModalOpen(false)} size={24} style={{...styles.modalToggle, ...styles.modalClose}}  />
            <ReviewForm addReview={addReview} />
            </View>
          </Modal>
          <FontAwesome5 name={'plus'} onPress={() => setModalOpen(true)} size={24} style={styles.modalToggle} />


   
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
    modalToggle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
    },
    modalClose: {
      marginTop: 20,
      marginBottom: 0,
    },
    modalContent: {
      flex: 1,
    }
  });