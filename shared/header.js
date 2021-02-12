  
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Header({ title, navigation }) {

    const openMenu = () => {
        navigation.toggleDrawer();
      }

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <FontAwesome5 name={'bars'} onPress={openMenu} size={28} style={styles.icon} />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
        <Text style={styles.headerText}>{ title }</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: 370,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    height: 60,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: 'row',
  }
});