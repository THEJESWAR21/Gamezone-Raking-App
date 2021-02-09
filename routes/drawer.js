import React from 'react';
// screens 
import Home from '../screens/home';
import About from '../screens/about';
//components
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function DrawerStack(){
    return(
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}

const Drawer = createDrawerNavigator();