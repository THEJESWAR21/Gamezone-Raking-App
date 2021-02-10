  
import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Header({ title, navigation }) {

    const openMenu = () => {
        navigation.toggleDrawer();
      }

  return (
    <View style={styles.header}>
      <FontAwesome5 name={'bars'} onPress={openMenu} size={28} style={styles.icon} />
      <View>
        <Text style={styles.headerText}>{ title }</Text>
      </View>
    </View>
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
});